import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductStoryline from '@/components/ProductStoryline';
import FinalImpact from '@/components/FinalImpact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll-triggered animations for story sections
    const storyElements = document.querySelectorAll('.story-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    storyElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header>
        <Navigation />
      </header>
      <main className="relative">
        <Hero />
        <ProductStoryline />
        <FinalImpact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
