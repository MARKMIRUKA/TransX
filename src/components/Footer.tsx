import { ExternalLink, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-electric/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric to-accent flex items-center justify-center">
                <span className="text-xl font-bold text-background">TΞX</span>
              </div>
              <span className="text-2xl font-bold gradient-text">TransX</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Revolutionary blockchain solutions that rewrite the rules. 
              Building the future of decentralized technology, one innovation at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/showcase/transxinc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-electric transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/_trans_x_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-electric transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#oversight" className="text-muted-foreground hover:text-electric transition-colors">Oversight</a></li>
              <li><a href="#transx" className="text-muted-foreground hover:text-electric transition-colors">TransX Chain</a></li>
              <li><a href="#warex" className="text-muted-foreground hover:text-electric transition-colors">Warex</a></li>
              <li><a href="#farmx" className="text-muted-foreground hover:text-electric transition-colors">FarmX</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-electric transition-colors">About</a></li>
              <li><a href="#careers" className="text-muted-foreground hover:text-electric transition-colors">Careers</a></li>
              <li><a href="#news" className="text-muted-foreground hover:text-electric transition-colors">News</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-electric transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-electric/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 TransX. All rights reserved. Building the future of blockchain.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-electric transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-muted-foreground hover:text-electric transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
      </div>
    </footer>
  );
};

export default Footer;