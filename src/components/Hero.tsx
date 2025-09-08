import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Zap, Globe, Sprout, Star, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-blockchain.jpg';
import { useScrollAnimation, useTextReveal } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [typedText, setTypedText] = useState('');
  const dynamicWords = ['ADVANCING', 'REVOLUTIONIZING', 'TRANSFORMING', 'PIONEERING'];
  
  const { elementRef: heroRef, isVisible: heroInView } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: titleRef, revealedChars } = useTextReveal('BLOCKCHAIN INNOVATION', 100);

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect for dynamic words
    const typeText = (text: string) => {
      let index = 0;
      setTypedText('');
      const interval = setInterval(() => {
        setTypedText(text.slice(0, index + 1));
        index++;
        if (index >= text.length) {
          clearInterval(interval);
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              setTypedText(text.slice(0, index));
              index--;
              if (index < 0) {
                clearInterval(deleteInterval);
                setCurrentWord(prev => (prev + 1) % dynamicWords.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };

    typeText(dynamicWords[currentWord]);
  }, [currentWord, dynamicWords]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % dynamicWords.length);
    }, 4000);

    return () => clearInterval(wordInterval);
  }, []);

  const products = [{
    icon: <Shield className="w-4 h-4" />,
    name: 'Oversight',
    color: 'from-orange-400 to-red-500',
    badge: 'Fraud Prevention'
  }, {
    icon: <Zap className="w-4 h-4" />,
    name: 'TransX Chain',
    color: 'from-blue-500 to-purple-600',
    badge: 'Layer 1'
  }, {
    icon: <Globe className="w-4 h-4" />,
    name: 'Warex',
    color: 'from-green-500 to-emerald-600',
    badge: 'Crypto Payments'
  }, {
    icon: <Sprout className="w-4 h-4" />,
    name: 'FarmX',
    color: 'from-lime-500 to-green-600',
    badge: 'AgriTech'
  }];

  const stats = [{
    value: '1M+',
    label: 'Transactions Secured',
    icon: <Shield className="w-4 h-4" />
  }, {
    value: '99.9%',
    label: 'Uptime Guarantee',
    icon: <Star className="w-4 h-4" />
  }, {
    value: '50ms',
    label: 'Average Latency',
    icon: <Zap className="w-4 h-4" />
  }, {
    value: '256-bit',
    label: 'Encryption',
    icon: <Sparkles className="w-4 h-4" />
  }];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-24 lg:py-32 page-transition" 
      aria-label="TransX Hero Section"
    >
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Advanced blockchain network infrastructure visualization showing interconnected nodes and secure transaction pathways representing TransX's revolutionary technology platform" 
          className="w-full h-full object-cover opacity-10 scale-105 parallax-slow transform transition-all duration-[20s] ease-linear" 
          loading="eager" 
          fetchPriority="high" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 morph-shape" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 modern-grid opacity-[0.02]" />

      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute w-2 h-2 rounded-full opacity-40 ${
              i % 4 === 0 ? 'bg-blue-primary parallax-fast' : 
              i % 4 === 1 ? 'bg-purple-primary parallax-element' : 
              i % 4 === 2 ? 'bg-green-primary parallax-slow' : 
              'bg-orange-primary parallax-fast'
            } cursor-follow hover:scale-150 transition-transform duration-300`} 
            style={{
              left: `${15 + i % 5 * 18}%`,
              top: `${20 + i % 3 * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i % 3}s`
            }} 
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Dynamic Main Headline with Text Effects */}
        <div className="mb-16 lg:mb-20">
          <div className="mb-6">
            <span className={`text-2xl md:text-3xl font-semibold text-blue-primary transition-all duration-1000 delay-200 ${heroInView ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <h1 
            ref={titleRef as any}
            className={`text-5xl md:text-7xl xl:text-8xl font-black leading-tight font-display transform transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
          >
            <span className="block mb-4 transition-all duration-700 delay-500 hover:scale-105 transform text-reveal">
              <span className="text-shimmer">
                {revealedChars > 0 ? 'BLOCKCHAIN'.slice(0, Math.min(revealedChars, 10)) : ''}
              </span>
            </span>
            <span className="block transition-all duration-700 delay-700 hover:scale-105 transform text-reveal">
              <span className="text-glow-pulse">
                {revealedChars > 10 ? 'INNOVATION'.slice(0, revealedChars - 11) : ''}
              </span>
            </span>
          </h1>
        </div>

        {/* Enhanced Subtitle */}
        <div className={`mb-20 lg:mb-24 transform transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 mb-8 max-w-5xl mx-auto leading-relaxed font-medium">
            Empowering enterprises with <span className="text-blue-primary font-semibold">next-generation blockchain solutions</span> that enhance security, drive efficiency, and enable transparent digital transformation.
          </p>
          <p className="text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            Four integrated products. One revolutionary ecosystem. Unlimited possibilities.
          </p>
        </div>

        {/* Enhanced CTA Buttons with Magnetic Effect */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-24 lg:mb-32 transform transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg" 
            className="group btn-primary btn-magnetic px-10 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden" 
            aria-label="Discover TransX blockchain ecosystem and products"
          >
            <span className="relative z-10">Discover Our Ecosystem</span>
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group btn-outline btn-magnetic px-10 py-6 text-lg font-medium rounded-2xl transition-all duration-300 relative overflow-hidden" 
            aria-label="Watch TransX platform demonstration video"
          >
            <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Watch Platform Demo</span>
          </Button>
        </div>

        {/* Enhanced Product Showcase */}
        <div className={`mb-24 lg:mb-32 transform transition-all duration-1000 delay-900 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 text-neutral-600 text-sm font-medium mb-16">
            <Sparkles className="w-4 h-4 text-blue-primary" />
            <span>Our Complete Blockchain Ecosystem</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto" role="list" aria-label="TransX product ecosystem">
            {products.map((product, index) => (
              <div 
                key={product.name} 
                className={`card-modern hover-lift p-8 group transform transition-all duration-500 cursor-pointer relative overflow-hidden ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} 
                style={{
                  animationDelay: `${1000 + index * 150}ms`
                }} 
                role="listitem" 
                aria-label={`${product.name} - ${product.badge}`}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative`}>
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-xl group-hover:text-blue-primary transition-colors duration-300">{product.name}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 font-medium group-hover:bg-blue-tertiary group-hover:text-blue-primary transition-all duration-300">
                      {product.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators / Stats with Counter Animation */}
        <div className={`mb-16 transform transition-all duration-1000 delay-1200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto" role="list" aria-label="TransX platform statistics and achievements">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group hover-lift cursor-pointer relative" 
                role="listitem"
              >
                <div className="flex items-center justify-center mb-4">
                  <div 
                    className="text-blue-primary group-hover:scale-110 group-hover:text-purple-primary transition-all duration-300 parallax-element" 
                    aria-hidden="true"
                  >
                    {stat.icon}
                  </div>
                </div>
                <div 
                  className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300" 
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  <span className="text-shimmer">{stat.value}</span>
                </div>
                <div className="text-sm text-neutral-600 font-medium group-hover:text-blue-primary transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;