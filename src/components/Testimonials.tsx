// components/Testimonials.tsx

import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      company: 'Tech Solutions Inc.',
      avatar: '/avatars/avatar1.jpg',
      comment:
        'My Trading Kart helped us find the exact parts we needed for our projects. The auction system is efficient and easy to use.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'BuildIt Construction',
      avatar: '/avatars/avatar2.jpg',
      comment:
        'As a supplier, My Trading Kart has increased our visibility and allowed us to connect with new clients through their auction platform.',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      company: 'ElectroTech Industries',
      avatar: '/avatars/avatar3.jpg',
      comment:
        'The auction feature on My Trading Kart has streamlined our procurement process, saving us both time and money.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-800">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
