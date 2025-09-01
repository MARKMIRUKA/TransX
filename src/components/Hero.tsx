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
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Professional Grid Background */}
      <div className="absolute inset-0 professional-grid opacity-30" />

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className={`mb-12 transform transition-all duration-1000 ${isVisible ? 'scale-in' : 'scale-0 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-primary mb-8 shadow-lg">
            <span className="text-3xl font-bold text-white">TΞX</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-8 text-foreground transform transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          TRANSFORMING
          <br />
          <span className="text-gradient">BLOCKCHAIN</span>
          <br />
          TECHNOLOGY
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          Empowering organizations with enterprise-grade blockchain solutions that drive innovation, 
          <br />
          <span className="text-blue-600 font-semibold">enhance security, and create transparent ecosystems.</span>
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" className="group bg-gradient-primary hover:shadow-lg transition-all duration-300 text-white px-8 py-4 text-lg">
            Explore Solutions
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 px-8 py-4 text-lg">
            <Play className="mr-2 group-hover:scale-110 transition-transform" />
            Watch Overview
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm text-gray-500 mb-4">Trusted by leading organizations worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transform transition-all duration-1000 delay-1200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
              <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Discover our ecosystem</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;