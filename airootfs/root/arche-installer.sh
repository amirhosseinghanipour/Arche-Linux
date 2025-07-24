#!/usr/bin/env bash
################################################################################
# arche-installer - Official Installer for Arche Linux
# AUTHOR: d3v1ll3n@gmail.com
################################################################################

VERSION='0.1'
ARCHE_PATH='/usr/share/arche-installer'

TRUE=0
FALSE=1
SUCCESS=0
FAILURE=1
VERBOSE='/dev/null'

WHITE="$(tput setaf 7)"
CYAN="$(tput setaf 6)"
CYANB="$(
  tput bold
  tput setaf 6
)"
RED="$(tput setaf 1)"
YELLOW="$(tput setaf 3)"
NC="$(tput sgr0)"

CHROOT='/mnt'

# Exit on CTRL + c
trap "echo -e '\n${RED}Aborted by user${NC}'; exit $FAILURE" 2

# Print formatted output
wprintf() { printf "%s$1%s" "$WHITE" "$NC" "${@:2}"; }
warn() { printf "%s[!] WARNING: %s%s\n" "$YELLOW" "$1" "$NC"; }
err() {
  printf "%s[-] ERROR: %s%s\n" "$RED" "$1" "$NC"
  return $FAILURE
}
title() {
  clear
  printf "${CYANB}== Arche Installer v$VERSION ==${NC}\n\n"
}

# Check root
check_uid() {
  [ "$(id -u)" != '0' ] && err 'You must be root to run the Arche installer!' && exit $FAILURE
}

# Ask for hostname
ask_hostname() {
  while [ -z "$HOST_NAME" ]; do
    title
    wprintf '[?] Set your hostname: '
    read -r HOST_NAME
  done
}

# Ask for locale
ask_locale() {
  title
  wprintf '[?] Set locale [en_US.UTF-8]: '
  read -r LOCALE
  [ -z "$LOCALE" ] && LOCALE='en_US.UTF-8'
}

# Ask for keymap
ask_keymap() {
  title
  wprintf '[?] Set keymap [us]: '
  read -r KEYMAP
  [ -z "$KEYMAP" ] && KEYMAP='us'
}

# Get available disks
get_hd_devs() {
  HD_DEVS="$(lsblk -d -n -o NAME | grep -v loop)"
}

# Ask for disk
ask_hd_dev() {
  while true; do
    title
    wprintf '[+] Available disks:\n'
    for i in $HD_DEVS; do echo "    > $i"; done
    wprintf '[?] Choose disk (e.g. sda): '
    read -r HD_DEV
    if echo "$HD_DEVS" | grep -wq "$HD_DEV"; then
      HD_DEV="/dev/$HD_DEV"
      break
    fi
  done
}

# Partitioning
partition_disk() {
  title
  warn "Partition your disk with cfdisk. You need at least EFI (if UEFI), root, and optionally swap."
  sleep 2
  cfdisk "$HD_DEV"
}

# Get partitions
get_partitions() {
  PARTITIONS=$(lsblk -ln -o NAME "$HD_DEV" | grep -v "$(basename $HD_DEV)" | awk '{print "/dev/"$1}')
}

# Ask for partitions
ask_partitions() {
  get_partitions
  title
  wprintf '[+] Detected partitions:\n'
  lsblk "$HD_DEV"
  wprintf '[?] EFI partition (empty if BIOS): '
  read -r BOOT_PART
  wprintf '[?] Root partition: '
  read -r ROOT_PART
  wprintf '[?] Swap partition (empty for none): '
  read -r SWAP_PART
  [ -z "$SWAP_PART" ] && SWAP_PART='none'
}

# Format partitions
format_partitions() {
  title
  [ -n "$BOOT_PART" ] && mkfs.fat -F32 "$BOOT_PART" || err "Failed to format EFI partition" && exit $FAILURE
  mkfs.ext4 "$ROOT_PART" || err "Failed to format root partition" && exit $FAILURE
  [ "$SWAP_PART" != "none" ] && mkswap "$SWAP_PART" || err "Failed to format swap partition" && exit $FAILURE
}

# Mount partitions
mount_partitions() {
  mount "$ROOT_PART" $CHROOT || err "Failed to mount root partition" && exit $FAILURE
  [ -n "$BOOT_PART" ] && mkdir -p "$CHROOT/boot" && mount "$BOOT_PART" "$CHROOT/boot" || err "Failed to mount EFI partition" && exit $FAILURE
  [ "$SWAP_PART" != "none" ] && swapon "$SWAP_PART" || err "Failed to enable swap" && exit $FAILURE
}

# Install system
install_system() {
  title
  wprintf '[+] Installing system packages...\n'
  [ -f /root/packages-installed.x86_64 ] || err "Package list /root/package-list.x86_64 not found" && exit $FAILURE
  pacstrap $CHROOT $(cat /root/package-list.x86_64) || err "Failed to install system packages" && exit $FAILURE
}

# Fstab
gen_fstab() {
  genfstab -U $CHROOT >>"$CHROOT/etc/fstab"
}

# Locale, keymap, hostname
setup_system() {
  grep -q "^$LOCALE" "$CHROOT/etc/locale.gen" || err "Invalid locale: $LOCALE" && exit $FAILURE
  sed -i "s/^#${LOCALE}/${LOCALE}/" "$CHROOT/etc/locale.gen"
  echo "LANG=$LOCALE" >"$CHROOT/etc/locale.conf"
  echo "KEYMAP=$KEYMAP" >"$CHROOT/etc/vconsole.conf" || err "Invalid keymap: $KEYMAP" && exit $FAILURE
  echo "$HOST_NAME" >"$CHROOT/etc/hostname"
  chroot $CHROOT locale-gen || err "Failed to generate locale" && exit $FAILURE
}

# Timezone
setup_timezone() {
  ln -sf /usr/share/zoneinfo/UTC "$CHROOT/etc/localtime"
  chroot $CHROOT hwclock --systohc
}

# User
setup_user() {
  title
  wprintf '[?] New username: '
  read -r NORMAL_USER
  chroot $CHROOT useradd -m -G wheel,audio,video,network -s /bin/zsh "$NORMAL_USER"
  chroot $CHROOT passwd "$NORMAL_USER"
  chroot $CHROOT passwd
  sed -i 's/^# %wheel ALL=(ALL) ALL/%wheel ALL=(ALL) ALL/' "$CHROOT/etc/sudoers"
  chroot $CHROOT bash -c "echo 'export PATH=\$PATH' > /home/$NORMAL_USER/.zshrc"
  chroot $CHROOT chown $NORMAL_USER:$NORMAL_USER /home/$NORMAL_USER/.zshrc
  chroot $CHROOT chsh -s /bin/zsh root
  chroot $CHROOT bash -c "echo 'export PATH=\$PATH' > /root/.zshrc"
  install -Dm644 /etc/skel/.xinitrc /mnt/root/.xinitrc
  install -Dm644 /etc/skel/.config/i3/config /mnt/root/.config/i3/config
}

# Network
setup_network() {
  chroot $CHROOT systemctl enable iwd systemd-networkd
}

# Bluetooth
setup_bluetooth() {
  chroot $CHROOT systemctl enable bluetooth
}

# Bootloader
setup_bootloader() {
  if [ -n "$BOOT_PART" ]; then
    chroot $CHROOT pacman -S --noconfirm systemd-boot
    chroot $CHROOT bootctl install || err "Failed to install systemd-boot" && exit $FAILURE
    UUID=$(blkid -s UUID -o value "$ROOT_PART")
    cat >"$CHROOT/boot/loader/entries/arche.conf" <<EOF
title   Arche Linux
linux   /vmlinuz-linux
initrd  /initramfs-linux.img
options root=UUID=$UUID rw
EOF
  else
    chroot $CHROOT pacman -S --noconfirm grub
    chroot $CHROOT grub-install --target=i386-pc "$HD_DEV" || err "Failed to install GRUB" && exit $FAILURE
    chroot $CHROOT grub-mkconfig -o /boot/grub/grub.cfg || err "Failed to configure GRUB" && exit $FAILURE
  fi
}

# Main
main() {
  check_uid
  ask_locale
  ask_keymap
  ask_hostname
  get_hd_devs
  ask_hd_dev
  partition_disk
  ask_partitions
  format_partitions
  mount_partitions
  install_system
  gen_fstab
  setup_system
  setup_timezone
  setup_user
  setup_network
  setup_bluetooth
  setup_bootloader
  echo -e "${CYANB}Arche installation complete! Time to split your panes and :vsp your world!${NC}"
}

main "$@"
