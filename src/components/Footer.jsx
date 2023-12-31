import React from "react";

const Footer = () => {
  return (
    <footer className="bg-color60 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-700">
          &copy; {new Date().getFullYear()} AnimX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
