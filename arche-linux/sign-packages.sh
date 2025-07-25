#!/bin/bash

# Script for managing package signing for Arche Linux repository

REPO_DIR="/home/v1ll3n/arche/arche-linux/repo/x86_64"
KEY_NAME="Arche Linux Package Signing"
KEY_EMAIL="packages@arche-linux.org"
KEY_FILE="arche-trusted"
EXPIRY="2y"  # Key valid for 2 years

setup_signing_key() {
    # Generate GPG key batch file
    cat > /tmp/gpg-key-gen << EOF
%echo Generating Arche Linux package signing key
Key-Type: RSA
Key-Length: 4096
Key-Usage: sign
Name-Real: $KEY_NAME
Name-Email: $KEY_EMAIL
Expire-Date: $EXPIRY
%no-protection
%commit
%echo Key generation completed
EOF

    # Generate the key
    gpg --batch --generate-key /tmp/gpg-key-gen
    rm /tmp/gpg-key-gen

    # Export public key
    gpg --export --armor "$KEY_EMAIL" > "$REPO_DIR/$KEY_FILE"
    
    # Get the key ID
    KEY_ID=$(gpg --list-keys --with-colons "$KEY_EMAIL" | awk -F: '/^pub:/ { print $5 }')
    echo "Key ID: $KEY_ID"
    echo "Public key exported to $REPO_DIR/$KEY_FILE"
}

sign_packages() {
    cd "$REPO_DIR" || exit 1
    
    # Sign all package files
    for pkg in *.pkg.tar.zst; do
        if [ -f "$pkg" ]; then
            gpg --detach-sign --sign "$pkg"
            echo "Signed $pkg"
        fi
    done
    
    # Sign database files
    for db in *.db.tar.gz *.files.tar.gz; do
        if [ -f "$db" ]; then
            gpg --detach-sign --sign "$db"
            echo "Signed $db"
        fi
    done
}

case "$1" in
    "setup")
        setup_signing_key
        ;;
    "sign")
        sign_packages
        ;;
    *)
        echo "Usage: $0 {setup|sign}"
        echo "  setup - Generate new signing key"
        echo "  sign  - Sign all packages and databases"
        exit 1
        ;;
esac
