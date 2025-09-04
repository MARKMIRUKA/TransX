import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductStoryline from '@/components/ProductStoryline';
import FinalImpact from '@/components/FinalImpact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <ProductStoryline />
        <FinalImpact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
