import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Zap, Globe, Sprout, Star, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-blockchain.jpg';
import TypewriterAnimation from './TypewriterAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const dynamicWords = ['ADVANCING', 'REVOLUTIONIZING', 'TRANSFORMING', 'PIONEERING'];

  useEffect(() => {
    setIsVisible(true);
    
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  const products = [
    { icon: <Shield className="w-4 h-4" />, name: 'Oversight', color: 'from-orange-400 to-red-500', badge: 'Fraud Prevention' },
    { icon: <Zap className="w-4 h-4" />, name: 'TransX Chain', color: 'from-blue-500 to-purple-600', badge: 'Layer 1' },
    { icon: <Globe className="w-4 h-4" />, name: 'Warex', color: 'from-green-500 to-emerald-600', badge: 'Crypto Payments' },
    { icon: <Sprout className="w-4 h-4" />, name: 'FarmX', color: 'from-lime-500 to-green-600', badge: 'AgriTech' },
  ];

  const stats = [
    { value: '1M+', label: 'Transactions Secured', icon: <Shield className="w-4 h-4" /> },
    { value: '99.9%', label: 'Uptime Guarantee', icon: <Star className="w-4 h-4" /> },
    { value: '50ms', label: 'Average Latency', icon: <Zap className="w-4 h-4" /> },
    { value: '256-bit', label: 'Encryption', icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background" aria-label="TransX Hero Section">
      {/* Dark background with geometric shapes */}
      <div className="absolute inset-0 bg-dark">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl transform rotate-12 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/6 w-32 h-32 bg-accent/30 rounded-2xl transform -rotate-45 blur-lg"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none">
                <span className="text-accent">TransX</span>
              </h1>
              <div className="flex items-center gap-4 text-6xl lg:text-8xl font-black text-white leading-none">
                <span>TΞX</span>
                <TypewriterAnimation />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;