// FeatureHighlights.tsx
import React from 'react';

const FeatureHighlights: React.FC = () => {
  return (
    <section className="feature-highlights my-12">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">Feature Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Highlight Cards */}
        <div className="highlight-card bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature Name</h3>
          <p className="text-gray-700 mb-4">Brief description of the feature.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all">
            Learn More
          </button>
        </div>
        {/* Repeat for other features */}
      </div>
    </section>
  );
};

export default FeatureHighlights;
