import React from 'react';

const Repository: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Arche Linux Repository</h1>
      
      <div className="prose max-w-none">
        <h2>Adding the Repository</h2>
        <p>To add the Arche Linux repository to your system, add the following to <code>/etc/pacman.conf</code>:</p>
        
        <pre className="bg-neutral-800 text-white p-4 rounded-lg">
          [arche]
          Server = https://arche-linux.org/repo/$arch
          SigLevel = Optional TrustAll
        </pre>
        
        <h2 className="mt-8">Available Packages</h2>
        <ul>
          <li><strong>arche-install</strong> - The official Arche Linux installer</li>
        </ul>
        
        <h2 className="mt-8">Package Signing</h2>
        <p>Currently, our packages are unsigned for development purposes. In production, we recommend:</p>
        <ul>
          <li>Setting up a secure signing key</li>
          <li>Using <code>SigLevel = Required DatabaseRequired</code></li>
          <li>Importing our public key: <code>pacman-key --recv-keys KEY_ID</code></li>
        </ul>
        
        <h2 className="mt-8">Repository Structure</h2>
        <p>The repository follows the standard Arch Linux repository structure:</p>
        <pre className="bg-neutral-800 text-white p-4 rounded-lg">
          /repo/
          ├── x86_64/
          │   ├── arche.db.tar.gz
          │   ├── arche.files.tar.gz
          │   └── *.pkg.tar.zst
        </pre>
      </div>
    </div>
  );
};

export default Repository;
