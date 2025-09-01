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
      {/* Enhanced Background with Mesh Gradient */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Blockchain Network Infrastructure" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 modern-grid opacity-20" />

      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-60 animate-pulse ${
              i % 2 === 0 ? 'bg-blue-primary' : 'bg-purple-primary'
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container-wide px-6 text-center">
        {/* Enhanced Logo Section */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'scale-in' : 'scale-0 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-primary mb-6 shadow-2xl border border-white/20">
            <span className="text-4xl font-bold text-white font-display">TΞX</span>
          </div>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Enhanced Main Headline */}
        <h1 className={`text-display text-6xl md:text-8xl lg:text-9xl font-black mb-8 text-foreground transform transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          TRANSFORMING
          <br />
          <span className="text-gradient relative">
            BLOCKCHAIN
            <div className="absolute -inset-2 bg-gradient-primary opacity-10 blur-xl rounded-lg" />
          </span>
          <br />
          <span className="text-neutral-600">TECHNOLOGY</span>
        </h1>

        {/* Enhanced Subtitle */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-body text-xl md:text-2xl lg:text-3xl text-neutral-600 mb-6 max-w-5xl mx-auto leading-relaxed">
            Empowering organizations with enterprise-grade blockchain solutions that drive innovation,
          </p>
          <p className="text-body text-lg md:text-xl text-blue-primary font-semibold max-w-4xl mx-auto">
            enhance security, and create transparent ecosystems for the future.
          </p>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" className="btn-primary group px-10 py-5 text-lg font-semibold rounded-2xl">
            Explore Solutions
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="btn-outline group px-10 py-5 text-lg font-medium rounded-2xl">
            <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Overview
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className={`mb-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-body text-sm text-neutral-500 mb-6 tracking-wide uppercase font-medium">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex justify-center items-center gap-12 opacity-40">
            <div className="w-24 h-10 bg-neutral-200 rounded-lg animate-pulse" />
            <div className="w-28 h-10 bg-neutral-200 rounded-lg animate-pulse" />
            <div className="w-20 h-10 bg-neutral-200 rounded-lg animate-pulse" />
            <div className="w-26 h-10 bg-neutral-200 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Modern Scroll Indicator */}
        <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center gap-3">
            <div className="animate-bounce">
              <div className="w-8 h-12 border-2 border-neutral-400 rounded-full mx-auto flex items-start justify-center pt-2">
                <div className="w-1.5 h-4 bg-gradient-primary rounded-full animate-pulse" />
              </div>
            </div>
            <p className="text-body text-xs text-neutral-500 tracking-wider uppercase font-medium">
              Discover our ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;