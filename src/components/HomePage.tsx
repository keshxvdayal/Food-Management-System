import React from 'react';
import mainimg from "../assets/home.webp"

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
            Simple and fast <br /> inventory count app
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Perfect for your restaurant or hotel, our app slashes the time you spend on inventory counts by 50% and cuts your food waste by 35% in just one month.
          </p>
          <button className="bg-green-500 text-white px-8 py-5 rounded-lg hover:bg-green-600">
            Start your FREE 30-day trial today
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 relative">
          <img
            src={mainimg} // Replace with the actual image URL
            alt="App preview"
            className="rounded-lg "
          />
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
