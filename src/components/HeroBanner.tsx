// HeroBanner.tsx
import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className="hero-banner bg-gray-100 py-20 text-center">
      <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">Discover Our Latest Products</h2>
      <p className="text-lg text-gray-700 mb-6">Quality parts for all your needs</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all">
        Shop Now
      </button>
    </div>
  );
};

export default HeroBanner;
