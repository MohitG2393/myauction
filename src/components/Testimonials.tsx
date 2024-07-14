// Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials bg-gray-100 py-12">
      <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial Cards */}
        <div className="testimonial-card bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-700 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-gray-500">Company Name</p>
        </div>
        {/* Repeat for other testimonials */}
      </div>
    </section>
  );
};

export default Testimonials;
