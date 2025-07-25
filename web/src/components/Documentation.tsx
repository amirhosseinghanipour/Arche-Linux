import { Terminal, Network, Settings, HelpCircle } from 'lucide-react';

export default function Documentation() {
  const repoUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:5173/$repo/os/$arch'
    : 'https://arche-linux.org/$repo/os/$arch';
  return (
    <section id="docs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Documentation</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Everything you need to know about installing, configuring, and using Arche Linux.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Installation Guide */}
          <div className="bg-neutral-50 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Terminal className="text-neutral-900" size={24} />
              <h3 className="text-2xl font-bold text-neutral-900">Installation Guide</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <span className="bg-black  w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-neutral-900">Boot the ISO</span>
                </h4>
                <p className="text-neutral-600 text-sm ml-8">
                  Create a bootable USB drive and boot from it. Arche supports both BIOS and UEFI systems.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <span className="bg-black  w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-neutral-900">Verify network connectivity</span>
                </h4>
                <div className="ml-8">
                  <div className="p-3 rounded-lg text-neutral-900 font-mono text-sm border">
                    ip a<br />
                    systemctl is-active systemd-networkd iwd
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <span className="bg-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-neutral-900">Run arche-installer.sh</span>
                </h4>
                <div className="ml-8">
                  <div className="bg-white text-neutral-900 p-3 rounded-lg font-mono text-sm border">
                    arche-installer.sh
                  </div>
                  <p className="text-neutral-600 text-sm mt-2">
                    Interactive installer handles partitioning, formatting, and system setup with sane defaults. After installation, you will have a minimal i3 environment, Xorg, fonts, and essential developer tools.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <span className="bg-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span className="text-neutral-900">Reboot and customize</span>
                </h4>
                <p className="text-neutral-600 text-sm ml-8">
                  Reboot into your minimal Arche system and start customizing according to your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Features & FAQ */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-black  p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Settings className="" size={24} />
                <h3 className="text-2xl font-bold">Key Features</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Network className="text-neutral-300 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-neutral-100">Modern Networking</h4>
                    <p className="text-neutral-400 text-sm">systemd-networkd and iwd for robust connectivity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Terminal className="text-neutral-300 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-neutral-100">Minimal Base</h4>
                    <p className="text-neutral-400 text-sm">15 packages: base, linux, networking, virtualization tools, GPG</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Settings className="text-neutral-300 mt-1" size={16} />
                  <div>
                    <h4 className="font-semibold text-neutral-100">VM Ready</h4>
                    <p className="text-neutral-400 text-sm">Hypervisor guest tools included: VirtualBox, VMware, QEMU, Hyper-V</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-neutral-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <HelpCircle className="text-neutral-900" size={24} />
                <h3 className="text-2xl font-bold text-neutral-900">FAQ</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Why no desktop environment?</h4>
                  <p className="text-neutral-600 text-sm">
                    Developers don't need a pre-configured desktop. Install i3, dwm, or whatever fits your workflow. We provide the foundation, you build the experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">How do I extend the GPG key?</h4>
                  <p className="text-neutral-600 text-sm">
                    Use <code className="bg-neutral-200 px-2 py-1 rounded text-xs">gpg --edit-key</code> and the <code className="bg-neutral-200 px-2 py-1 rounded text-xs">expire</code> command to extend key validity.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Is Arche suitable for beginners?</h4>
                  <p className="text-neutral-600 text-sm">
                    Arche is for developers and system administrators who understand Linux. If you need hand-holding, this isn't for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Arche Linux Repository Section */}
      <div className="mt-20 bg-neutral-50 p-8 rounded-2xl border">
        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Using the Arche Linux Repository</h3>
        <p className="text-neutral-700 mb-4">
          Arche Linux uses the <span className="font-mono">linux-hardened</span> kernel by default for maximum security. If you want to use the regular kernel, you must install it manually.
        </p>
        <ol className="list-decimal list-inside text-neutral-800 space-y-4 text-left mb-6">
          <li>
            <span className="font-semibold">Add the Arche Linux repo to your <span className='font-mono'>/etc/pacman.conf</span>:</span>
            <div className="bg-black text-white p-3 rounded-lg font-mono text-sm mt-2 overflow-x-auto">
              [arche]<br />
              SigLevel = Required<br />
              Server = {repoUrl}
            </div>
          </li>
          <li>
            <span className="font-semibold">Update your package database:</span>
            <div className="bg-black text-white p-3 rounded-lg font-mono text-sm mt-2 overflow-x-auto">
              sudo pacman -Sy
            </div>
          </li>
          <li>
            <span className="font-semibold">Install the recommended packages:</span>
            <div className="bg-black text-white p-3 rounded-lg font-mono text-sm mt-2 overflow-x-auto">
              sudo pacman -S base base-devel linux-hardened linux-firmware mkinitcpio vi vim git tmux sudo which file less jq curl rsync man-db pacman-contrib binutils pkgconf iwd networkd iptables dnsutils wireplumber pipewire bluez bluez-utils iw rfkill alsa-utils alsa-lib xorg-server xorg-xinit alacritty polkit audit strace htop ncdu tree cat ripgrep exa fd tar gzip bzip2 xz locate sed awk grep find zsh i3-wm i3status i3blocks dmenu ranger ttf-dejavu ttf-liberation noto-fonts
            </div>
          </li>
        </ol>
        <p className="text-neutral-700 mb-2">
          <span className="font-semibold">Tip:</span> All packages are signed. For your security, we strongly recommend verifying checksums and GPG signatures before installation, but it is not required.
        </p>
        <div className="bg-black text-white p-3 rounded-lg font-mono text-sm overflow-x-auto">
          pacman-key --verify &lt;package-file&gt;
        </div>
      </div>
    </section>
  );
}