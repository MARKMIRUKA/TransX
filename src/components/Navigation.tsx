import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ExternalLink, Linkedin, Instagram } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'Platform', href: '#platform' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Company', href: '#company' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-strong shadow-lg border-b border-neutral-200/50 backdrop-blur-xl' 
        : 'bg-transparent'
    }`}>
      <div className="container-wide mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo with Animation */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300">
                <span className="text-xl font-black text-white font-display tracking-tight">TΞX</span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-foreground font-display tracking-tight group-hover:text-blue-primary transition-colors duration-300">TransX</span>
              <span className="text-xs text-neutral-500 tracking-wider uppercase font-medium">Blockchain Innovation</span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-body text-neutral-600 hover:text-blue-primary transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-blue-tertiary/50 group"
              >
                {item.name}
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
              </a>
            ))}
          </div>

          {/* Enhanced Social & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com/showcase/transxinc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl text-neutral-500 hover:text-blue-primary hover:bg-blue-tertiary/50 transition-all duration-300 group"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/_trans_x_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl text-neutral-500 hover:text-purple-primary hover:bg-purple-tertiary/50 transition-all duration-300 group"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            <Button className="btn-primary px-8 py-3 text-base font-semibold rounded-xl focus-ring group">
              <span className="group-hover:scale-105 transition-transform duration-200">Get Started</span>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-12 h-12 text-foreground rounded-xl hover:bg-neutral-100 transition-all duration-300 focus-ring"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="glass-strong rounded-2xl mt-4 p-6 shadow-2xl border border-white/20">
            <div className="space-y-6">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block text-body text-neutral-600 hover:text-blue-primary transition-all duration-300 font-medium py-4 px-4 rounded-xl hover:bg-blue-tertiary/50 transform ${
                      isMobileMenuOpen ? 'fade-in-up' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="pt-6 border-t border-neutral-200 space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://linkedin.com/showcase/transxinc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl text-neutral-500 hover:text-blue-primary hover:bg-blue-tertiary/50 transition-all duration-300"
                    title="Follow us on LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/_trans_x_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl text-neutral-500 hover:text-purple-primary hover:bg-purple-tertiary/50 transition-all duration-300"
                    title="Follow us on Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
                <Button className="btn-primary w-full py-4 text-lg font-semibold rounded-xl">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;