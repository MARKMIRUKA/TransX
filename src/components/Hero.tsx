import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-blockchain.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Blockchain Network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Neural Grid Background */}
      <div className="absolute inset-0 neural-grid opacity-30" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-electric rounded-full opacity-60 animate-neural-pulse"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-electric to-accent mb-6 glow-pulse">
            <span className="text-2xl font-bold text-background">TΞX</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className={`text-6xl md:text-8xl font-bold mb-6 gradient-text transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          THE FUTURE OF
          <br />
          <span className="glow-text">BLOCKCHAIN</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Revolutionary blockchain solutions that rewrite the rules. 
          <br />
          <span className="text-electric font-semibold">Built by TransX. Powered by innovation.</span>
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button variant="waitlist" size="lg" className="group">
            Join the Waitlist
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="neural" size="lg" className="group">
            <Play className="mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-electric/50 rounded-full mx-auto">
              <div className="w-1 h-3 bg-electric rounded-full mx-auto mt-2 animate-pulse" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Scroll to explore our ecosystem</p>
        </div>
      </div>

      {/* Scanning Lines Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanning-line w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;