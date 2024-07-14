import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} My Trading Kart. All rights reserved.</p>
        <div className="flex space-x-4 items-right">
          <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-all">Terms of Service</a>
          <a href="#" className="hover:text-white transition-all">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Ensure default export
