import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Globe, Sprout, Star, Sparkles, TrendingUp } from 'lucide-react';

const FinalImpact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const impactMetrics = [
    { value: '$50B+', label: 'Transaction Volume', icon: <TrendingUp className="w-6 h-6" />, color: 'text-green-primary' },
    { value: '150+', label: 'Enterprise Clients', icon: <Star className="w-6 h-6" />, color: 'text-blue-primary' },
    { value: '99.99%', label: 'Security Rate', icon: <Shield className="w-6 h-6" />, color: 'text-orange-primary' },
    { value: '24/7', label: 'Global Support', icon: <Globe className="w-6 h-6" />, color: 'text-purple-primary' },
  ];

  const productIcons = [
    { icon: <Shield className="w-8 h-8" />, name: 'Oversight', color: 'from-orange-400 to-red-500' },
    { icon: <Zap className="w-8 h-8" />, name: 'TransX Chain', color: 'from-blue-500 to-purple-600' },
    { icon: <Globe className="w-8 h-8" />, name: 'Warex', color: 'from-green-500 to-emerald-600' },
    { icon: <Sprout className="w-8 h-8" />, name: 'FarmX', color: 'from-lime-500 to-green-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % productIcons.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, productIcons.length]);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-background overflow-hidden py-6xl">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="absolute inset-0 modern-grid opacity-[0.03]" />
      </div>

      {/* Floating Product Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {productIcons.map((product, index) => (
          <div
            key={product.name}
            className={`absolute transition-all duration-1000 ${
              index === currentIndex ? 'opacity-30 scale-100' : 'opacity-10 scale-90'
            }`}
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + (index % 2) * 40}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${product.color} flex items-center justify-center blur-sm hover:blur-none transition-all duration-500`}>
              <div className="text-white opacity-60">
                {product.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 container-wide mx-auto px-6">
        {/* Enhanced Header Section */}
        <div className="text-center mb-6xl">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-primary/10 border border-blue-primary/20 mb-8">
              <Sparkles className="w-5 h-5 text-blue-primary animate-pulse" />
              <span className="text-blue-primary font-semibold tracking-wide uppercase text-sm">The Future is Here</span>
            </div>
          </div>

          <h2 className={`text-display text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-foreground transform transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Revolutionizing
            <br />
            <span className="text-gradient relative">
              Blockchain
              <div className="absolute -inset-4 bg-gradient-primary opacity-5 blur-3xl rounded-2xl" />
            </span>
            <br />
            <span className="text-foreground">Forever</span>
          </h2>

          <p className={`text-body text-xl md:text-2xl lg:text-3xl text-neutral-600 max-w-5xl mx-auto leading-relaxed mb-8 font-medium transform transition-all duration-1000 delay-400 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Join the global movement transforming industries through 
            <br />
            <span className="text-blue-primary font-semibold">transparent, secure, and scalable blockchain technology.</span>
          </p>

          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto mb-8">
              Experience the future of finance, governance, agriculture, and security—all powered by the TransX ecosystem.
            </p>
          </div>
        </div>

        {/* Enhanced Impact Metrics */}
        <div className={`mb-6xl transform transition-all duration-1000 delay-800 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-3xl">
            <h3 className="text-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Real Impact, Real Results
            </h3>
            <p className="text-body text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              Trusted by industry leaders worldwide to deliver measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {impactMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`card-modern card-hover p-8 text-center group transform transition-all duration-300 ${
                  isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${800 + index * 150}ms` }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className={`${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                    {metric.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-foreground font-display">
                    {metric.value}
                  </div>
                  <div className="text-base md:text-lg font-medium text-neutral-600">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-strong rounded-3xl p-3xl max-w-5xl mx-auto border border-neutral-200 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-primary rounded-full blur-3xl opacity-10" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-secondary rounded-full blur-3xl opacity-10" />
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary/10 text-blue-primary text-sm font-medium tracking-wide uppercase">
                <div className="w-2 h-2 rounded-full bg-blue-primary animate-pulse" />
                Ready to Transform?
              </div>
              
              <h3 className="text-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
                Start Your Blockchain
                <br />
                <span className="text-gradient">Journey Today</span>
              </h3>
              
              <p className="text-body text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Join thousands of forward-thinking organizations already leveraging the TransX ecosystem to drive innovation, enhance security, and create transparent operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                <Button size="lg" className="group btn-primary px-12 py-5 text-xl font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  Join the Waitlist
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="btn-outline px-12 py-5 text-xl font-medium rounded-2xl">
                  Schedule Consultation
                </Button>
              </div>

              <div className="pt-8 border-t border-neutral-200">
                <p className="text-sm text-neutral-500 font-medium">
                  Trusted by 150+ enterprises • $50B+ in transactions secured • 99.99% uptime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ambient Light */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-5" />
    </section>
  );
};

export default FinalImpact;