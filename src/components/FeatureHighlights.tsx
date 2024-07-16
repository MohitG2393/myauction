// components/FeatureHighlights.tsx

import React from 'react';

const FeatureHighlights: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: '/icons/icon1.svg',
      title: 'Advanced Auction System',
      description:
        'Utilize our advanced auction system to streamline your procurement process and maximize efficiency.',
    },
    {
      id: 2,
      icon: '/icons/icon2.svg',
      title: 'Secure Transactions',
      description:
        'Ensure secure transactions with built-in encryption and protection mechanisms for buyer and seller peace of mind.',
    },
    {
      id: 3,
      icon: '/icons/icon3.svg',
      title: 'Real-Time Bidding',
      description:
        'Experience real-time bidding with instant notifications and updates to stay ahead in competitive auctions.',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-lg p-6 flex items-start">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12 mr-4" />
              <div>
                <p className="text-lg font-semibold mb-2">{feature.title}</p>
                <p className="text-gray-800">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
