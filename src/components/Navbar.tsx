import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-800">TOTAL<span className="text-green-500">CTRL</span></span>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Learn More</a>
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Login</button>
        <button className="px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
