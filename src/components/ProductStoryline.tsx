import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Link, CreditCard, Sprout, ArrowRight, CheckCircle } from 'lucide-react';

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
}

const products: Product[] = [
  {
    id: 'oversight',
    name: 'Oversight',
    tagline: 'Advanced Fraud Prevention & Monitoring',
    description: 'Enterprise-grade fraud detection system that protects organizations and governments.',
    longDescription: 'Oversight leverages cutting-edge AI and blockchain technology to create an impenetrable shield against fraud. Our system monitors transactions, behaviors, and patterns in real-time, providing instant alerts and comprehensive reporting.',
    benefits: [
      'Real-time fraud detection with 99.9% accuracy',
      'AI-powered behavioral analysis',
      'Comprehensive audit trails',
      'Regulatory compliance built-in'
    ],
    icon: <Shield className="w-8 h-8" />,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    accentColor: 'text-red-600'
  },
  {
    id: 'transx',
    name: 'TransX Chain',
    tagline: 'Next-Generation Layer 1 Blockchain',
    description: 'High-performance blockchain infrastructure powering the future of decentralized applications.',
    longDescription: 'TransX Chain is built from the ground up for enterprise use cases, offering unprecedented speed, security, and scalability. Our consensus mechanism ensures fast finality while maintaining decentralization.',
    benefits: [
      '100,000+ transactions per second',
      'Sub-second finality',
      'Enterprise-grade security',
      'EVM compatible'
    ],
    icon: <Link className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-600',
    bgColor: 'bg-blue-50',
    accentColor: 'text-blue-600'
  },
  {
    id: 'warex',
    name: 'Warex',
    tagline: 'Enterprise Crypto Payment Solutions',
    description: 'Seamless cryptocurrency payments with enterprise-grade security and compliance.',
    longDescription: 'Warex transforms how businesses handle digital payments, offering a comprehensive suite of tools for accepting, processing, and managing cryptocurrency transactions. Built for scale and security.',
    benefits: [
      'Multi-currency support',
      'Instant settlement',
      'Built-in compliance tools',
      'Enterprise APIs'
    ],
    icon: <CreditCard className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    accentColor: 'text-green-600'
  },
  {
    id: 'farmx',
    name: 'FarmX',
    tagline: 'Agricultural Supply Chain Transparency',
    description: 'Blockchain-powered solutions for agricultural monitoring and distribution.',
    longDescription: 'FarmX brings unprecedented transparency to agricultural supply chains, enabling organizations to track products from farm to table. Our platform ensures food safety, quality control, and fair trade practices.',
    benefits: [
      'End-to-end traceability',
      'Quality assurance tracking',
      'Fair trade verification',
      'Sustainability metrics'
    ],
    icon: <Sprout className="w-8 h-8" />,
    color: 'from-lime-500 to-green-600',
    bgColor: 'bg-lime-50',
    accentColor: 'text-lime-600'
  },
];

const ProductStoryline = () => {
  const [visibleProducts, setVisibleProducts] = useState<Set<string>>(new Set());
  const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
    <section className="min-h-screen bg-background relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 professional-grid opacity-20" />
      
      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Our Complete
          <br />
          <span className="text-gradient">Ecosystem</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Four integrated solutions working together to transform how organizations leverage blockchain technology. 
          Each product builds upon the others, creating a comprehensive platform for the future.
        </p>
      </div>

      {/* Product Storyline */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => { productRefs.current[product.id] = el; }}
              data-product-id={product.id}
              className={`relative ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex items-center gap-16`}
            >
              {/* Product Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className={`transform transition-all duration-1000 ${
                  visibleProducts.has(product.id) 
                    ? 'fade-in-left' 
                    : 'opacity-0 translate-x-10'
                }`}>
                  {/* Product Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${product.bgColor} ${product.accentColor} text-sm font-medium mb-6`}>
                    {product.icon}
                    {product.tagline}
                  </div>

                  {/* Product Title */}
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {product.longDescription}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-4 mb-8">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex}
                        className={`flex items-center gap-3 transform transition-all duration-500 ${
                          visibleProducts.has(product.id) 
                            ? 'fade-in-left' 
                            : 'opacity-0 translate-x-10'
                        }`}
                        style={{ animationDelay: `${benefitIndex * 100 + 300}ms` }}
                      >
                        <CheckCircle className={`w-5 h-5 ${product.accentColor} flex-shrink-0`} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button className="group bg-gradient-primary hover:shadow-lg transition-all duration-300 text-white px-6 py-3">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Product Visualization */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                <div className={`transform transition-all duration-1000 delay-300 ${
                  visibleProducts.has(product.id) 
                    ? 'fade-in-right' 
                    : 'opacity-0 translate-x-10'
                }`}>
                  <div className={`relative ${product.bgColor} rounded-3xl p-12 border border-gray-200 shadow-lg`}>
                    {/* Product Icon */}
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${product.color} mb-8 shadow-lg`}>
                      <div className="text-white">
                        {product.icon}
                      </div>
                    </div>

                    {/* Product Name */}
                    <h4 className="text-2xl font-bold text-foreground mb-4">
                      {product.name}
                    </h4>

                    {/* Product Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-xl opacity-60" />
                    <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-lg opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-32">
        <div className="glass-effect rounded-3xl p-12 border border-gray-200">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Organization?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking organizations already leveraging the TransX ecosystem to drive innovation, 
            enhance security, and create transparent operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-lg transition-all duration-300 text-white px-8 py-4 text-lg">
              Start Your Journey
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 px-8 py-4 text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStoryline;