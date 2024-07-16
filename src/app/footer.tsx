import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Trading Kart. All rights reserved.</p>
        </div>
        <div className="flex space-x-8 text-sm">
          <a href="#" className="hover:text-gray-400 transition-all">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-all">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 transition-all">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Ensure default export
