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
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-electric/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric to-accent flex items-center justify-center glow-pulse">
              <span className="text-lg font-bold text-background">TΞX</span>
            </div>
            <span className="text-xl font-bold gradient-text">TransX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-electric transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://linkedin.com/showcase/transxinc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_trans_x_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <Button variant="waitlist" size="sm">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-electric/20 mt-2 pt-4 pb-6 bg-background/95 backdrop-blur-lg rounded-b-lg">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-electric transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-electric/20">
                <a
                  href="https://linkedin.com/showcase/transxinc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-electric transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/_trans_x_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-electric transition-colors duration-200"
                >
                  Instagram
                </a>
              </div>
              <Button variant="waitlist" className="mt-4">
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;