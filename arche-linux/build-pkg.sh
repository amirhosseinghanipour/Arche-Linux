#!/bin/bash

# Build script for arche-install package

# Set version from git if available
if [ -d .git ]; then
    VERSION=$(git describe --tags --always)
else
    VERSION="0.1.0"
fi

# Create package directory
mkdir -p pkg/arche-install/src
cp airootfs/root/arche-install pkg/arche-install/src/

# Update version in PKGBUILD
sed -i "s/^pkgver=.*$/pkgver=$VERSION/" pkg/arche-install/PKGBUILD

# Build package
cd pkg/arche-install
makepkg -f

# Move package to repo directory
mkdir -p ../../repo/x86_64
mv *.pkg.tar.zst ../../repo/x86_64/

# Update repository database
cd ../../repo/x86_64
repo-add arche.db.tar.gz *.pkg.tar.zst

# Sign packages and database
../../sign-packages.sh sign

# Deploy to web directory
mkdir -p ../../../web/public/repo/x86_64
cp -r * ../../../web/public/repo/x86_64/

echo "Package built and deployed to web repository"
echo "Run 'cd ../../web && npm run build' to rebuild the website"
