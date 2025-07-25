import { Github, MessageCircle, Heart, Code } from 'lucide-react';

// Determine base URL for external links
const baseUrl = window.location.hostname === 'localhost'
  ? 'http://localhost:5173'
  : 'https://arche-linux.org';

export default function Community() {
  return (
    <section id="community" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join the Community</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Arche Linux is built by developers, for developers. Join us if you value a minimal, transparent, and developer-focused system with a usable i3 environment and essential tools out of the box.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-900 p-8 rounded-2xl text-center group hover:bg-neutral-800 transition-colors duration-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
              <Github className="text-neutral-900" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">GitHub Repository</h3>
            <p className="text-neutral-400 mb-6 text-sm">
              Review our opinionated package choices, contribute improvements, or fork if you disagree.
            </p>
            <a
              href="https://github.com/ArcheLinux"
              className="inline-flex items-center space-x-2 text-white hover:underline"
            >
              <span>View arche-linux on GitHub</span>
            </a>
          </div>

          <div className="bg-neutral-900 p-8 rounded-2xl text-center group hover:bg-neutral-800 transition-colors duration-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
              <MessageCircle className="text-neutral-900" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Forum</h3>
            <p className="text-neutral-400 mb-6 text-sm">
              Share your minimal setups, discuss security practices, and help fellow developers using arche-linux.
            </p>
            <a
              href={`${baseUrl}/forum`}
              className="inline-flex items-center space-x-2 text-white hover:underline"
            >
              <span>Join Discussion</span>
            </a>
          </div>

          <div className="bg-neutral-900 p-8 rounded-2xl text-center group hover:bg-neutral-800 transition-colors duration-200">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
              <Code className="text-neutral-900" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Contribute</h3>
            <p className="text-neutral-400 mb-6 text-sm">
              Found a bug? Have a better approach? We're opinionated, but we're not stubborn. Contribute to arche-linux!
            </p>
            <a
              href={`${baseUrl}/contribute`}
              className="inline-flex items-center space-x-2 text-white hover:underline"
            >
              <span>Get Involved</span>
            </a>
          </div>
        </div>

        <div className="bg-neutral-900 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="text-red-500" size={24} />
              <h3 className="text-2xl font-bold">For Developers Like Us</h3>
            </div>
            <p className="text-neutral-300">
              If you understand why we made these choices, you'll fit right in with arche-linux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Our Standards</h4>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start space-x-3">
                  <span className="bg-white text-neutral-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</span>
                  <span>Every package addition must be justified</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-white text-neutral-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
                  <span>Security and minimalism over convenience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-white text-neutral-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
                  <span>Test in VMs and bare metal before submitting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-white text-neutral-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
                  <span>Code speaks louder than feature requests</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">What We Value</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Developers who read the source code</li>
                <li>• Security-conscious contributors</li>
                <li>• Minimalists who question every dependency</li>
                <li>• VM and container enthusiasts</li>
                <li>• People who understand "less is more"</li>
                <li>• Contributors who test their own work</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}