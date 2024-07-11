import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 mt-auto">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} My Trading Kart. All rights reserved.
      </div>
    </footer>
  );
};
