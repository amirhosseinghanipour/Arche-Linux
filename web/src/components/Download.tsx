import { Download, Key, Hash } from 'lucide-react';

// Determine base URL for downloads
const baseUrl = window.location.hostname === 'localhost'
  ? 'http://localhost:5173/arche-linux'
  : 'https://arche-linux.org/arche-linux';

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Download Arche Linux</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Download the latest Arche Linux ISO with Minimal i3 environment.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border">
            <div>
              <h4 className="font-semibold text-neutral-900">Arche ISO</h4>
              <p className="text-sm text-neutral-600">archelinux-2025.07.24-x86_64.iso</p>
            </div>
            <a href={`${baseUrl}/archelinux-2025.07.24-x86_64.iso`} className="bg-black text-white px-6 py-2 rounded-lg hover:bg-neutral-800 transition-colors duration-200 flex items-center space-x-2">
              <Download size={18} />
              <span>Download</span>
            </a>
          </div>
          <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border">
            <div>
              <h4 className="font-semibold text-neutral-900">SHA256 Checksum</h4>
              <p className="text-xs font-mono text-neutral-600 break-all">c3c94567bdf7a7e7752f28a057e7fd9e0229f56370d70897cb1d7dfde8877a9c</p>
            </div>
            <a href={`${baseUrl}/SHA256SUMS`} className="bg-neutral-200 text-neutral-800 px-6 py-2 rounded-lg hover:bg-neutral-300 transition-colors duration-200 flex items-center space-x-2">
              <Hash size={18} />
              <span>SHA256</span>
            </a>
          </div>
          <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border">
            <div>
              <h4 className="font-semibold text-neutral-900">GPG Signature</h4>
              <p className="text-xs text-neutral-600">archelinux-2025.07.24-x86_64.iso.asc</p>
            </div>
            <a href={`${baseUrl}/archelinux-2025.07.24-x86_64.iso.asc`} className="bg-neutral-200 text-neutral-800 px-6 py-2 rounded-lg hover:bg-neutral-300 transition-colors duration-200 flex items-center space-x-2">
              <Key size={18} />
              <span>Signature</span>
            </a>
          </div>
          <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border">
            <div>
              <h4 className="font-semibold text-neutral-900">Signed Checksums</h4>
              <p className="text-xs text-neutral-600">SHA256SUMS.asc</p>
            </div>
            <a href={`${baseUrl}/SHA256SUMS.asc`} className="bg-neutral-200 text-neutral-800 px-6 py-2 rounded-lg hover:bg-neutral-300 transition-colors duration-200 flex items-center space-x-2">
              <Key size={18} />
              <span>Signed Sums</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}