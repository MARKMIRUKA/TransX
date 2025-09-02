import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Zap, Globe, Sprout } from 'lucide-react';
import heroImage from '@/assets/hero-blockchain.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    { icon: <Shield className="w-5 h-5" />, name: 'Oversight', color: 'from-red-500 to-orange-500' },
            { icon: <Zap className="w-5 h-5" />, name: 'TransX', color: 'from-blue-500 to-purple-600' },
    { icon: <Globe className="w-5 h-5" />, name: 'Warex', color: 'from-green-500 to-emerald-600' },
    { icon: <Sprout className="w-5 h-5" />, name: 'FarmX', color: 'from-lime-500 to-green-600' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Blockchain Network" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Professional Grid Background */}
      <div className="absolute inset-0 professional-grid opacity-20" />

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className={`mb-10 transform transition-all duration-1000 ${isVisible ? 'scale-in' : 'scale-0 opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-6 shadow-xl">
            <span className="text-2xl font-bold text-white">TΞX</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-foreground transform transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          ADVANCING
          <br />
          <span className="text-gradient">BLOCKCHAIN</span>
          <br />
          INNOVATION
        </h1>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          Empowering enterprises with next-generation blockchain solutions that enhance security, 
          <br />
          <span className="text-blue-600 font-semibold">drive efficiency, and enable transparent digital transformation.</span>
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" className="group bg-gradient-primary hover:shadow-lg transition-all duration-300 text-white px-6 py-3">
            Discover Solutions
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 px-6 py-3">
            <Play className="mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Product Showcase */}
        <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm text-gray-500 mb-6">Our comprehensive ecosystem</p>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm transform transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${1000 + index * 100}ms` }}
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {product.icon}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700">{product.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`transform transition-all duration-1000 delay-1200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-8 mt-8 opacity-50">
            <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-14 h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transform transition-all duration-1000 delay-1400 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-bounce">
            <div className="w-5 h-8 border-2 border-gray-400 rounded-full mx-auto">
              <div className="w-1 h-2 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Explore our platform</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;