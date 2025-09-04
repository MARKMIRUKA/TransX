import { ExternalLink, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Oversight', href: '#oversight', description: 'Fraud Prevention' },
      { name: 'TransX Chain', href: '#transx', description: 'Layer 1 Blockchain' },
      { name: 'Warex', href: '#warex', description: 'Crypto Payments' },
      { name: 'FarmX', href: '#farmx', description: 'AgriTech Solutions' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Support', href: '#support' },
      { name: 'Status', href: '#status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Security', href: '#security' },
    ],
  };

  return (
    <footer className="bg-background border-t border-neutral-200" role="contentinfo" aria-label="Site footer">
      <div className="container-wide mx-auto px-6 py-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-6xl">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 group">
              <a href="/" aria-label="TransX homepage" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl font-black text-white font-display tracking-tight" aria-hidden="true">TΞX</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-foreground font-display tracking-tight">TransX</span>
                <span className="text-sm text-neutral-500 tracking-wider uppercase font-medium">Blockchain Innovation</span>
              </div>
              </a>
            </div>
            
            <div className="space-y-4">
              <p className="text-body text-lg text-neutral-600 leading-relaxed max-w-md">
                Pioneering the future of blockchain technology with enterprise-grade solutions that transform industries and drive innovation.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-neutral-600">
                  <Mail className="w-5 h-5 text-blue-primary" aria-hidden="true" />
                  <a href="mailto:hello@transx.tech" className="text-body hover:text-blue-primary transition-colors duration-300" aria-label="Email TransX at hello@transx.tech">hello@transx.tech</a>
                </div>
                <div className="flex items-center gap-3 text-neutral-600">
                  <MapPin className="w-5 h-5 text-blue-primary" aria-hidden="true" />
                  <span className="text-body">Global HQ • Remote First</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4" role="list" aria-label="Social media links">
              <a
                href="https://linkedin.com/showcase/transxinc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl text-neutral-500 hover:text-blue-primary hover:bg-blue-tertiary/50 hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2"
                title="Follow us on LinkedIn"
                aria-label="Follow TransX on LinkedIn"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/_trans_x_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl text-neutral-500 hover:text-purple-primary hover:bg-purple-tertiary/50 hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-primary focus:ring-offset-2"
                title="Follow us on Instagram"
                aria-label="Follow TransX on Instagram"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 font-display">Products</h3>
            <ul className="space-y-4" role="list">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex flex-col hover:text-blue-primary hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 rounded-md p-1"
                    aria-label={`Learn about ${link.name} - ${link.description}`}
                  >
                    <span className="text-body text-neutral-600 group-hover:text-blue-primary font-medium">
                      {link.name}
                    </span>
                    <span className="text-sm text-neutral-400">{link.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 font-display">Company</h3>
            <ul className="space-y-4" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-body text-neutral-600 hover:text-blue-primary hover:scale-105 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 rounded-md p-1"
                    aria-label={`Navigate to ${link.name} page`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-6 font-display">Resources</h3>
              <ul className="space-y-4" role="list">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-body text-neutral-600 hover:text-blue-primary hover:scale-105 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 rounded-md p-1"
                      aria-label={`Access ${link.name} resources`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-6 font-display">Legal</h3>
              <ul className="space-y-4" role="list">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-body text-neutral-600 hover:text-blue-primary hover:scale-105 transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 rounded-md p-1"
                      aria-label={`View ${link.name} information`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-neutral-500">
              <span aria-label={`Copyright ${currentYear} TransX. All rights reserved.`}>© {currentYear} TransX. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <span>Building the future of blockchain technology</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-primary animate-pulse" aria-hidden="true" />
                <span aria-label="System status: All systems operational">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-primary rounded-full blur-3xl opacity-5" />
    </footer>
  );
};

export default Footer;