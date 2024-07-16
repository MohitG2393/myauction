// components/Banner.tsx

import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white py-4 mt-20"> {/* Added mt-20 for margin top */}
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-lg font-semibold">
          Explore our latest auctions and find great deals!
        </p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
          View Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
