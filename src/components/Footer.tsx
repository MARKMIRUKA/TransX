import { ExternalLink, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">TΞX</span>
              </div>
              <span className="text-2xl font-bold text-white">TEX</span>
            </div>
            <p className="text-gray-300 max-w-md mb-6 leading-relaxed">
              Empowering organizations with enterprise-grade blockchain solutions that drive innovation, 
              enhance security, and create transparent ecosystems for the future.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/showcase/texinc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/_trans_x_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#oversight" className="text-gray-300 hover:text-blue-400 transition-colors">Oversight</a></li>
              <li><a href="#tex" className="text-gray-300 hover:text-blue-400 transition-colors">TEX Chain</a></li>
              <li><a href="#warex" className="text-gray-300 hover:text-blue-400 transition-colors">Warex</a></li>
              <li><a href="#farmx" className="text-gray-300 hover:text-blue-400 transition-colors">FarmX</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-blue-400 transition-colors">News</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2024 TEX. All rights reserved. Building the future of blockchain technology.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl" />
      </div>
    </footer>
  );
};

export default Footer;