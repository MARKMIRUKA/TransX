import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Globe, Shield, Sprout, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

const FinalImpact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimatedStats(true), 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '500+', label: 'Enterprise Clients', color: 'text-blue-600' },
    { icon: <TrendingUp className="w-8 h-8" />, number: '99.9%', label: 'Uptime Guarantee', color: 'text-green-600' },
    { icon: <Award className="w-8 h-8" />, number: '50+', label: 'Industry Awards', color: 'text-purple-600' },
  ];

  const products = [
    { icon: <Shield className="w-8 h-8" />, name: 'Oversight', angle: 0, color: 'from-red-500 to-orange-500' },
            { icon: <Zap className="w-8 h-8" />, name: 'TransX', angle: 90, color: 'from-blue-500 to-purple-600' },
    { icon: <Globe className="w-8 h-8" />, name: 'Warex', angle: 180, color: 'from-green-500 to-emerald-600' },
    { icon: <Sprout className="w-8 h-8" />, name: 'FarmX', angle: 270, color: 'from-lime-500 to-green-600' },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-background to-gray-50 flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 professional-grid opacity-20" />
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-30 animate-pulse"
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
        <div className={`relative mb-20 transform transition-all duration-2000 ${isVisible ? 'scale-in' : 'scale-0 opacity-0'}`}>
          <div className="relative inline-block">
            {/* Main Logo */}
            <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-2xl border-4 border-white">
              <span className="text-4xl font-bold text-white">TΞX</span>
            </div>

            {/* Orbiting Products */}
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`absolute w-16 h-16 rounded-xl bg-white backdrop-blur-lg border border-gray-200 flex items-center justify-center transition-all duration-1000 shadow-lg ${
                  animatedStats ? 'animate-spin' : ''
                }`}
                style={{
                  transform: `rotate(${product.angle}deg) translateX(120px) rotate(-${product.angle}deg)`,
                  animationDuration: '20s',
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div className={`bg-gradient-to-br ${product.color} p-2 rounded-lg`}>
                  <div className="text-white">
                    {product.icon}
                  </div>
                </div>
              </div>
            ))}

            {/* Pulse Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 rounded-full border border-purple-200 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </div>
        </div>

        {/* Final Message */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
            THE FUTURE OF
            <br />
            <span className="text-gradient">BLOCKCHAIN</span>
            <br />
            IS HERE
          </h2>
          
          <h3 className={`text-2xl md:text-3xl font-semibold text-muted-foreground mb-8 transform transition-all duration-1000 delay-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Built by TransX. Trusted by the world.
          </h3>

          <p className={`text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-1500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Our integrated ecosystem represents the pinnacle of blockchain innovation, combining cutting-edge technology 
            with enterprise-grade reliability. We're not just building the future—we're defining it.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-2000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-8 border border-gray-200 card-hover"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100 mb-6 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className={`mb-16 transform transition-all duration-1000 delay-2500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-2xl font-semibold text-foreground mb-8">Why Organizations Choose TransX</h4>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Enterprise-grade security and compliance',
              'Seamless integration with existing systems',
              '24/7 expert support and consultation',
              'Proven track record of success'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={`transform transition-all duration-1000 delay-3000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-3xl p-12 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to Lead the Blockchain Revolution?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the elite group of organizations that are already transforming their operations with TransX technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-lg transition-all duration-300 text-white px-8 py-4 text-lg">
                Get Started Today
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalImpact;