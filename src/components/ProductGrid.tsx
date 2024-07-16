import React from 'react';
import { Item } from '@/db/schema';
import { getImageUrl } from '@/util/file';
import Image from 'next/image';

interface ProductGridProps {
  topItems: Item[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ topItems = [] }) => {
  return (
    <section className="my-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Top Items Available</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={getImageUrl(item.fileKey)}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700">{item.name}</p>
              <button className="bg-primaryColor text-white px-4 py-2 mt-2 rounded-md shadow-md hover:bg-opacity-90 transition-colors duration-300">
                View Item
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
