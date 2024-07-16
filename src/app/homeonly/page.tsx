import React from 'react';
import TopProducts from '@/components/TopProducts';
import Testimonials from '@/components/Testimonials';
import HeroBanner from '@/components/HeroBanner';
import FeatureHighlights from '@/components/FeatureHighlights';
import ProductGrid from '@/components/ProductGrid';
import CallToAction from '@/components/CallToAction';
import { pageTitleStyles, containerStyles } from '@/app/styles';
import { Item } from '@/db/schema'; // Import Item type

const HomeOnly: React.FC = () => {
  // Example: Fetch top items from your database
  const topItems: Item[] = []; // Replace with actual fetched data

  return (
    <div>
      <header className="hero-banner bg-gray-900 text-white py-12">
        <h1 className={`${pageTitleStyles} text-center`}>Welcome to My Trading Kart</h1>
      </header>
      <main className={`${containerStyles} py-8`}>
        <HeroBanner />
        <TopProducts />
        <FeatureHighlights />
        <ProductGrid topItems={topItems} /> {/* Pass topItems as a prop */}
        <Testimonials />
        <CallToAction />
      </main>
    </div>
  );
};

export default HomeOnly;
