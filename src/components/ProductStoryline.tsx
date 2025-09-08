import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Link, CreditCard, Sprout, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  accentColor: string;
  shortDescription: string;
}

const products: Product[] = [
  {
    id: 'oversight',
    name: 'Oversight',
    tagline: 'Trust Without Compromise',
    description: 'Advanced monitoring system designed to reduce fraud in organizations and governments.',
    longDescription: 'Oversight leverages cutting-edge AI and blockchain technology to create an impenetrable shield against fraud. Our system monitors transactions, behaviors, and patterns in real-time, providing instant alerts and comprehensive reporting that ensures transparency and accountability at every level.',
    shortDescription: 'AI-powered fraud detection with real-time monitoring and comprehensive audit trails.',
    benefits: [
      'Real-time fraud detection with 99.9% accuracy',
      'AI-powered behavioral analysis and pattern recognition',
      'Comprehensive audit trails with immutable records',
      'Regulatory compliance automation and reporting'
    ],
    icon: <Shield className="w-10 h-10" />,
    color: 'from-orange-primary to-orange-secondary',
    bgColor: 'bg-orange-tertiary',
    accentColor: 'text-orange-primary'
  },
  {
    id: 'transx',
    name: 'TransX Chain',
    tagline: 'The Chain That Rewrites the Rules',
    description: 'Next-generation Layer 1 blockchain powering the future of decentralized applications.',
    longDescription: 'TransX Chain is built from the ground up for enterprise use cases, offering unprecedented speed, security, and scalability. Our innovative consensus mechanism ensures fast finality while maintaining true decentralization and providing the backbone for the entire TransX ecosystem.',
    shortDescription: 'Enterprise-grade Layer 1 blockchain with unprecedented speed and security.',
    benefits: [
      '100,000+ transactions per second with linear scaling',
      'Sub-second finality with Byzantine fault tolerance',
      'Enterprise-grade security with quantum resistance',
      'Full EVM compatibility with enhanced smart contracts'
    ],
    icon: <Link className="w-10 h-10" />,
    color: 'from-blue-primary to-purple-primary',
    bgColor: 'bg-blue-tertiary',
    accentColor: 'text-blue-600'
  },
  {
    id: 'warex',
    name: 'Warex',
    tagline: 'Crypto Payments. Simplified.',
    description: 'The Stripe of Web3 - seamless cryptocurrency payments with enterprise-grade security.',
    longDescription: 'Warex revolutionizes digital payments by enabling organizations to accept, process, and manage cryptocurrency transactions effortlessly. Our platform bridges the gap between traditional finance and Web3, offering stablecoin payments that work like traditional payment processors but with the benefits of blockchain technology.',
    shortDescription: 'Seamless cryptocurrency payment processing for modern businesses.',
    benefits: [
      'Multi-currency support for all major stablecoins',
      'Instant settlement with sub-second confirmations',
      'Built-in compliance tools and regulatory reporting',
      'Enterprise APIs with 99.99% uptime guarantee'
    ],
    icon: <CreditCard className="w-10 h-10" />,
    color: 'from-green-primary to-green-secondary',
    bgColor: 'bg-green-tertiary',
    accentColor: 'text-green-primary'
  },
  {
    id: 'farmx',
    name: 'FarmX',
    tagline: 'Feeding the Future, Fraud-Free',
    description: 'Agriculture meets blockchain - monitoring and distributing farming essentials to prevent fraud.',
    longDescription: 'FarmX transforms agricultural supply chains by providing transparent, blockchain-powered tracking of farming essentials. Organizations and governments can monitor the distribution of equipment, fertilizer, and other agricultural resources, ensuring they reach the intended recipients and preventing fraud in agricultural programs.',
    shortDescription: 'Blockchain-powered agricultural supply chain transparency and fraud prevention.',
    benefits: [
      'End-to-end traceability from supplier to farmer',
      'Real-time monitoring of resource distribution',
      'Fraud prevention with immutable audit trails',
      'Impact measurement and sustainability metrics'
    ],
    icon: <Sprout className="w-10 h-10" />,
    color: 'from-green-secondary to-green-primary',
    bgColor: 'bg-green-tertiary',
    accentColor: 'text-green-secondary'
  },
];

const ProductStoryline = () => {
  const [visibleProducts, setVisibleProducts] = useState<Set<string>>(new Set());
  const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const { elementRef: sectionRef, isVisible: sectionInView } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef: productsRef, visibleItems } = useStaggeredAnimation(products.length, 200);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = entry.target.getAttribute('data-product-id');
            if (productId) {
              setVisibleProducts(prev => new Set([...prev, productId]));
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    Object.values(productRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef as any}
      className="min-h-screen bg-background relative overflow-hidden py-6xl story-section" 
      aria-label="TransX Product Ecosystem"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 morph-shape" />
      <div className="absolute inset-0 modern-grid opacity-15 parallax-slow" />
      
      {/* Section Header */}
      <div className={`relative z-10 container-wide mx-auto px-6 text-center mb-6xl story-content transform transition-all duration-1000 ${sectionInView ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
        <div className="content-stack-xl">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-tertiary text-blue-primary text-sm font-medium tracking-wide uppercase hover-lift cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-blue-primary animate-pulse parallax-element" />
            Product Ecosystem
          </div>
          
          <h2 className="text-display text-6xl md:text-7xl lg:text-8xl font-black text-foreground animate-words">
            <span>Our</span> <span>Complete</span>
            <br />
            <span className="text-gradient relative text-shimmer">
              <span>Ecosystem</span>
              <div className="absolute -inset-4 bg-gradient-primary opacity-5 blur-2xl rounded-xl morph-shape" />
            </span>
          </h2>
          
          <p className="text-body text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Four integrated solutions working together to transform how organizations leverage blockchain technology. 
            <br />
            <span className="text-blue-primary font-semibold text-glow-pulse">Each product builds upon the others, creating a comprehensive platform for the future.</span>
          </p>
        </div>
      </div>

      {/* Enhanced Product Storyline */}
      <div ref={productsRef as any} className="relative z-10 container-wide mx-auto px-6">
        <div className="space-y-6xl">
          {products.map((product, index) => {
            const isVisible = visibleProducts.has(product.id) || visibleItems.has(index);
            
            return (
              <article
                key={product.id}
                ref={(el: HTMLDivElement | null) => { productRefs.current[product.id] = el; }}
                data-product-id={product.id}
                className={`relative ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex items-center gap-5xl story-section ${
                  isVisible ? 'visible opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
                aria-labelledby={`${product.id}-title`}
              >
                {/* Enhanced Product Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className={`content-stack-lg transform transition-all duration-1000 ${
                    isVisible
                      ? 'fade-in-left' 
                      : 'opacity-0 translate-x-10'
                  }`}>
                    {/* Enhanced Product Badge */}
                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl ${product.bgColor} ${product.accentColor} text-base font-semibold border border-current/20 hover-lift cursor-pointer`}>
                      <div aria-hidden="true" className="parallax-element">{product.icon}</div>
                      {product.tagline}
                    </div>

                    {/* Enhanced Product Title */}
                    <h3 id={`${product.id}-title`} className="text-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
                      <span className="text-shimmer hover:text-glow-pulse transition-all duration-500 cursor-pointer">
                        {product.name}
                      </span>
                    </h3>

                    {/* Enhanced Product Description */}
                    <p className="text-body text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
                      {product.longDescription}
                    </p>

                    {/* Enhanced Benefits List */}
                    <div className="content-stack">
                      <h4 className="sr-only">Key Benefits of {product.name}</h4>
                      {product.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefitIndex}
                          className={`flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 hover-lift cursor-pointer transition-all duration-300 transform ${
                            isVisible
                              ? 'fade-in-left' 
                              : 'opacity-0 translate-x-10'
                          }`}
                          style={{ animationDelay: `${benefitIndex * 100 + 300}ms` }}
                        >
                          <CheckCircle className={`w-6 h-6 ${product.accentColor} flex-shrink-0 mt-1 parallax-element hover:scale-110 transition-transform duration-300`} aria-hidden="true" />
                          <span className="text-body text-lg text-neutral-700 leading-relaxed cursor-follow hover:text-blue-primary transition-colors duration-300">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced CTA Button */}
                    <Button 
                      className="btn-primary btn-magnetic group px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 relative overflow-hidden"
                      aria-label={`Learn more about ${product.name} blockchain solution`}
                    >
                      <span className="relative z-10">Learn More About {product.name}</span>
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    </Button>
                  </div>
                </div>

                {/* Enhanced Product Visualization */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} mt-2xl lg:mt-0`}>
                  <div className={`transform transition-all duration-1000 delay-300 ${
                    isVisible
                      ? 'fade-in-right' 
                      : 'opacity-0 translate-x-10'
                  }`}>
                    <div className={`card-modern ${product.bgColor} p-3xl shadow-2xl border-0 overflow-hidden relative group hover-lift cursor-pointer transition-all duration-500`}>
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                      
                      {/* Enhanced Product Icon */}
                      <div className={`inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-br ${product.color} mb-2xl shadow-2xl border border-white/20 group-hover:scale-105 transition-transform duration-300 morph-shape relative z-10`}>
                        <div className="text-white group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                          {product.icon}
                        </div>
                      </div>

                      {/* Enhanced Product Info */}
                      <div className="content-stack relative z-10">
                        <h4 className="text-display text-3xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                          {product.name}
                        </h4>

                        <p className="text-body text-lg text-neutral-600 leading-relaxed group-hover:text-blue-primary transition-colors duration-300">
                          {product.description}
                        </p>
                      </div>

                      {/* Enhanced Floating Elements */}
                      <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${product.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 parallax-element`} />
                      <div className={`absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br ${product.color} rounded-full blur-xl opacity-15 group-hover:opacity-25 transition-opacity duration-500 parallax-fast`} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Enhanced Bottom CTA */}
      <div className={`relative z-10 container-medium mx-auto px-6 text-center mt-6xl transform transition-all duration-1000 delay-500 ${sectionInView ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
        <div className="glass-strong rounded-3xl p-3xl border border-neutral-200 shadow-2xl relative overflow-hidden hover-lift cursor-pointer transition-all duration-500">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-5 morph-shape" />
          
          <div className="content-stack-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary/10 text-blue-primary text-sm font-medium tracking-wide uppercase mb-4 hover-lift">
              <div className="w-2 h-2 rounded-full bg-blue-primary animate-pulse parallax-element" />
              Ready to Transform?
            </div>
            
            <h3 className="text-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground animate-words">
              <span>Join</span> <span>the</span> <span>Future</span> <span>of</span>
              <br />
              <span className="text-gradient text-shimmer">Blockchain</span> <span className="text-glow-pulse">Innovation</span>
            </h3>
            
            <p className="text-body text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Join forward-thinking organizations already leveraging the TransX ecosystem to drive innovation, 
              <br />
              <span className="text-blue-primary font-semibold text-shimmer">enhance security, and create transparent operations.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="btn-primary btn-magnetic px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden"
                aria-label="Start your blockchain transformation journey with TransX"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight className="ml-3 w-6 h-6 relative z-10" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline btn-magnetic px-10 py-5 text-xl font-medium rounded-2xl transition-all duration-300 relative overflow-hidden"
                aria-label="Schedule a personalized demo of TransX platform"
              >
                <span className="relative z-10">Schedule a Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStoryline;