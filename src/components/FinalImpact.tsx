import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Globe, Shield, Sprout } from 'lucide-react';

const FinalImpact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [orbiting, setOrbiting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setOrbiting(true), 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    { icon: <Shield className="w-8 h-8" />, name: 'Oversight', angle: 0 },
    { icon: <Zap className="w-8 h-8" />, name: 'TransX', angle: 90 },
    { icon: <Globe className="w-8 h-8" />, name: 'Warex', angle: 180 },
    { icon: <Sprout className="w-8 h-8" />, name: 'FarmX', angle: 270 },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-background to-surface flex items-center justify-center relative overflow-hidden py-20">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neural-net opacity-30" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Central Brand Orb */}
        <div className={`relative mb-16 transform transition-all duration-2000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="relative inline-block">
            {/* Main Logo */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-electric via-accent to-electric flex items-center justify-center glow-pulse border-4 border-electric/30">
              <span className="text-4xl font-bold text-background">TΞX</span>
            </div>

            {/* Orbiting Products */}
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`absolute w-16 h-16 rounded-xl bg-surface-glass backdrop-blur-lg border border-electric/30 flex items-center justify-center transition-all duration-1000 ${
                  orbiting ? 'animate-spin' : ''
                }`}
                style={{
                  transform: `rotate(${product.angle}deg) translateX(120px) rotate(-${product.angle}deg)`,
                  animationDuration: '20s',
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div className="text-electric">
                  {product.icon}
                </div>
              </div>
            ))}

            {/* Pulse Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-electric/20 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 rounded-full border border-accent/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </div>
        </div>

        {/* Final Message */}
        <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-6xl md:text-8xl font-bold gradient-text mb-8 glow-text">
            THE FUTURE OF
            <br />
            BLOCKCHAIN
          </h2>
          
          <h3 className={`text-3xl md:text-4xl font-semibold text-foreground mb-6 transform transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Built by TransX.
          </h3>

          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto transform transition-all duration-1000 delay-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Four revolutionary products. One ecosystem. Infinite possibilities.
            <br />
            <span className="text-electric font-semibold">Experience the future today.</span>
          </p>

          {/* Final CTA */}
          <div className={`transform transition-all duration-1000 delay-2500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button variant="hero" size="lg" className="group text-lg px-12 py-6 h-auto">
              Join the Waitlist Now
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-6 max-w-md mx-auto">
              Be among the first to experience the next generation of blockchain technology. 
              Limited early access available.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transform transition-all duration-1000 delay-3000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { number: '99.9%', label: 'Fraud Reduction', subtext: 'with Oversight' },
            { number: '10,000+', label: 'TPS Capability', subtext: 'TransX Chain' },
            { number: '<1s', label: 'Payment Speed', subtext: 'via Warex' },
            { number: '100%', label: 'Transparency', subtext: 'in FarmX' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scanning Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanning-line w-full h-full opacity-30" />
      </div>
    </section>
  );
};

export default FinalImpact;