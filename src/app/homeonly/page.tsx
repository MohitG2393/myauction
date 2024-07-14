import React from 'react';
import TopProducts from '@/components/TopProducts';
import Testimonials from '@/components/Testimonials';
import HeroBanner from '@/components/HeroBanner';
import FeatureHighlights from '@/components/FeatureHighlights';

const HomeOnly: React.FC = () => {
  return (
    <div>
      <header className="hero-banner">
        <h1 className="text-center text-5xl font-bold">Welcome to My Trading Kart</h1>
      </header>
      <main className="container mx-auto p-4">
        <HeroBanner />
        <TopProducts />
        <FeatureHighlights />
        <Testimonials />
      </main>
    </div>
  );
};

export default HomeOnly;
