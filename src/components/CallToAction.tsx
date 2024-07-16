import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Explore Our B2B Marketplace</h2>
        <p className="text-lg text-gray-700 mb-8">
          Discover top mechanical, electrical, and construction parts. Join our community of suppliers and buyers.
        </p>
        <button className="bg-primaryColor text-white px-6 py-3 rounded-md shadow-md hover:bg-opacity-90 transition-colors duration-300">
          Start Bidding Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
