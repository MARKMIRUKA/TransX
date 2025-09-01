import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Link, CreditCard, Sprout, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

const products: Product[] = [
  {
    id: 'oversight',
    name: 'Oversight',
    tagline: 'Fraud doesn\'t stand a chance.',
    description: 'Trust Without Compromise - Advanced monitoring system designed to reduce fraud in organizations and governments.',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-red-500 to-orange-500',
    glowColor: 'shadow-red-500/30',
  },
  {
    id: 'transx',
    name: 'TransX',
    tagline: 'The backbone of the TransX ecosystem.',
    description: 'The Chain That Rewrites the Rules - Our Layer 1 blockchain powering the future of decentralized applications.',
    icon: <Link className="w-8 h-8" />,
    color: 'from-electric to-blue-400',
    glowColor: 'shadow-blue-500/30',
  },
  {
    id: 'warex',
    name: 'Warex',
    tagline: 'The Stripe of Web3.',
    description: 'Crypto Payments. Simplified. - Enable seamless payments using crypto and stablecoins with enterprise-grade security.',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-400',
    glowColor: 'shadow-green-500/30',
  },
  {
    id: 'farmx',
    name: 'FarmX',
    tagline: 'Agriculture meets blockchain.',
    description: 'Feeding the Future, Fraud-Free - Help organizations monitor and distribute farming essentials with complete transparency.',
    icon: <Sprout className="w-8 h-8" />,
    color: 'from-lime-500 to-green-400',
    glowColor: 'shadow-lime-500/30',
  },
];

const ProductStoryline = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const currentProduct = products[activeProduct];

  return (
    <section ref={sectionRef} className="min-h-screen bg-background relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-neural-net opacity-20" />
      
      {/* Title */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className={`text-5xl md:text-6xl font-bold gradient-text mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Our Ecosystem
        </h2>
        <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Four revolutionary products working together to transform how the world interacts with blockchain technology.
        </p>
      </div>

      {/* Main Product Display */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Visualization */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Product Card */}
              <div className={`glass-effect rounded-2xl p-8 border border-electric/20 hover-glow transition-all duration-500 ${currentProduct.glowColor}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${currentProduct.color} mb-6 animate-glow-pulse`}>
                  {currentProduct.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-foreground mb-3">
                  {currentProduct.name}
                </h3>
                
                <p className="text-lg text-electric font-semibold mb-4">
                  {currentProduct.tagline}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {currentProduct.description}
                </p>
                
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-electric/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Product Navigation */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`relative cursor-pointer transition-all duration-500 ${
                  index === activeProduct ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveProduct(index)}
              >
                {/* Progress Bar */}
                {index === activeProduct && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-electric rounded-full">
                    <div className="w-full bg-electric-bright rounded-full animate-blockchain-flow" />
                  </div>
                )}

                <div className={`glass-effect rounded-xl p-6 border transition-all duration-300 ${
                  index === activeProduct 
                    ? 'border-electric/40 bg-electric/5' 
                    : 'border-electric/10 hover:border-electric/20'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} ${
                      index === activeProduct ? 'animate-glow-pulse' : ''
                    }`}>
                      {product.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`font-semibold text-lg ${
                        index === activeProduct ? 'text-electric' : 'text-foreground'
                      }`}>
                        {product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {product.tagline}
                      </p>
                    </div>

                    {index === activeProduct && (
                      <div className="text-electric animate-pulse">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center mt-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Ready to experience the future?
        </h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of innovators already building on the TransX ecosystem.
        </p>
        <Button variant="hero" size="lg" className="group">
          Start Your Journey
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default ProductStoryline;