import { Github, Shield, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-xl tracking-wide mb-4">Arche Linux</h3>
            <p className="text-neutral-400 max-w-md">
              An opinionated Arch-based distribution for developers who value minimalism, security, and control—featuring a minimal i3 environment, Xorg, and essential tools out of the box.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://github.com/ArcheLinux"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                <Shield size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#download" className="hover:text-white transition-colors duration-200">
                  Download
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-white transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://wiki.archlinux.org" className="hover:text-white transition-colors duration-200 flex items-center space-x-1">
                  <span>Arch Wiki</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition-colors duration-200">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Forum
                </a>
              </li>
              <li>
                <a href="https://github.com/ArcheLinux/ArcheLinux/issues" className="hover:text-white transition-colors duration-200 flex items-center space-x-1">
                  <span>Report Issues</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Security</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © 2025 Arche Linux. Licensed under GPL-3.0.
            </div>
            <div className="text-neutral-400 text-sm">
              Built with minimal principles and maximum security.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}