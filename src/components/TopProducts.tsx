// components/TopProducts.tsx
import React from 'react';

const TopProducts: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: '$100' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: '$200' },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="mt-2 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;
