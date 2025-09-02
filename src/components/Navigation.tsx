import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ExternalLink } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Technology', href: '#tech' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-strong border-b border-neutral-200 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-wide mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-xl border border-white/20">
              <span className="text-xl font-bold text-white font-display">TΞX</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground font-display tracking-tight">TEX</span>
              <span className="text-xs text-neutral-500 tracking-wider uppercase font-medium">Blockchain Innovation</span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-body relative text-neutral-600 hover:text-blue-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-blue-tertiary/50 group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* Enhanced Social & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/showcase/texinc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-blue-primary transition-all duration-300 p-2 rounded-lg hover:bg-blue-tertiary/50"
                title="LinkedIn"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/_tex_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-purple-primary transition-all duration-300 p-2 rounded-lg hover:bg-purple-tertiary/50"
                title="Instagram"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <Button className="btn-primary px-8 py-3 text-base font-semibold rounded-xl focus-ring">
              Get Started
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200 focus-ring"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 mt-2 pt-6 pb-8 glass-strong rounded-b-2xl shadow-2xl">
            <div className="content-stack-lg">
              <div className="content-stack">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-body text-neutral-600 hover:text-blue-primary transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-blue-tertiary/50 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              <div className="flex flex-col gap-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://linkedin.com/showcase/texinc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-blue-primary transition-all duration-300 p-3 rounded-xl hover:bg-blue-tertiary/50"
                    title="LinkedIn"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/_tex_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-purple-primary transition-all duration-300 p-3 rounded-xl hover:bg-purple-tertiary/50"
                    title="Instagram"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <Button className="btn-primary w-full py-4 text-lg font-semibold rounded-xl">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;