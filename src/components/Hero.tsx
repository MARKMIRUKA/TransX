import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Zap, Globe, Sprout, Star, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-blockchain.jpg';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const dynamicWords = ['ADVANCING', 'REVOLUTIONIZING', 'TRANSFORMING', 'PIONEERING'];
  useEffect(() => {
    setIsVisible(true);
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % dynamicWords.length);
    }, 3000);
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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-24 lg:py-32" aria-label="TransX Hero Section">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Advanced blockchain network infrastructure visualization showing interconnected nodes and secure transaction pathways representing TransX's revolutionary technology platform" className="w-full h-full object-cover opacity-10 scale-105 transition-transform duration-20000 ease-linear" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 modern-grid opacity-[0.02]" />

      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => <div key={i} className={`absolute w-2 h-2 rounded-full opacity-40 animate-float ${i % 4 === 0 ? 'bg-blue-primary' : i % 4 === 1 ? 'bg-purple-primary' : i % 4 === 2 ? 'bg-green-primary' : 'bg-orange-primary'}`} style={{
        left: `${15 + i % 5 * 18}%`,
        top: `${20 + i % 3 * 25}%`,
        animationDelay: `${i * 0.8}s`,
        animationDuration: `${4 + i % 3}s`
      }} />)}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Dynamic Main Headline */}
        <div className="mb-16 lg:mb-20">
          <h1 className={`text-5xl md:text-7xl xl:text-8xl font-black leading-tight text-foreground font-display transform transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <span className="block mb-4 text-foreground transition-all duration-700 delay-500 hover:scale-105 hover:text-gradient transform">
              BLOCKCHAIN
            </span>
            <span className="block text-foreground transition-all duration-700 delay-700 hover:scale-105 hover:text-gradient transform">
              INNOVATION
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

        {/* Enhanced CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-24 lg:mb-32 transform transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" className="group btn-primary px-10 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300" aria-label="Discover TransX blockchain ecosystem and products">
            Discover Our Ecosystem
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group btn-outline px-10 py-6 text-lg font-medium rounded-2xl hover:scale-105 transition-all duration-300" aria-label="Watch TransX platform demonstration video">
            <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Platform Demo
          </Button>
        </div>

        {/* Enhanced Product Showcase */}
        <div className={`mb-24 lg:mb-32 transform transition-all duration-1000 delay-900 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 text-neutral-600 text-sm font-medium mb-16">
            <Sparkles className="w-4 h-4 text-blue-primary" />
            <span>Our Complete Blockchain Ecosystem</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto" role="list" aria-label="TransX product ecosystem">
            {products.map((product, index) => <div key={product.name} className={`card-modern card-hover p-8 group transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} style={{
            animationDelay: `${1000 + index * 150}ms`
          }} role="listitem" aria-label={`${product.name} - ${product.badge}`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-xl">{product.name}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                      {product.badge}
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Trust Indicators / Stats */}
        <div className={`mb-16 transform transition-all duration-1000 delay-1200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto" role="list" aria-label="TransX platform statistics and achievements">
            {stats.map((stat, index) => <div key={stat.label} className="text-center group hover:scale-105 transition-transform duration-300" role="listitem">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-blue-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2" aria-label={`${stat.value} ${stat.label}`}>{stat.value}</div>
                <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
              </div>)}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        
      </div>
    </section>;
};
export default Hero;