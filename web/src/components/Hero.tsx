import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden mt-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Arche Linux
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            An opinionated Arch-based distribution for developers who value minimalism, security, and control.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#download"
            className="inline-flex items-center space-x-2 bg-white text-neutral-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-all duration-200 transform hover:scale-105"
          >
            <Download size={20} />
            <span>Download Arche</span>
          </a>
          <a
            href="#docs"
            className="inline-flex items-center space-x-2 border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-neutral-800 transition-all duration-200"
          >
            <span>View Documentation</span>
          </a>
        </div>

        <div className="mt-12 text-sm text-neutral-500">
          Latest Release: <span className="text-white font-mono">archelinux-2025.07.24-x86_64.iso</span> • Minimal i3 environment • GPG signed
        </div>
      </div>
    </section>
  );
}