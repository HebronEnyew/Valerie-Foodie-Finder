import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="px-5 my-6 text-gray-700 mx-4 md:mx-20">
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-orange-500 font-bold text-2xl md:text-3xl">
          Valerie
        </h1>

        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="hidden md:flex gap-10 font-bold">
          <a href="/" className="hover:text-orange-400">Home</a>
          <a href="/meal-details" className="hover:text-orange-400">Meal Details</a>
          <a href="/favorites" className="hover:text-orange-400">Favorites</a>
        </div>

        <div className="hidden md:block">
          <a
            href="/about"
            className="py-2 px-6 bg-orange-500 text-white rounded-3xl hover:bg-white hover:text-orange-500 border hover:border-orange-500"
          >
            About
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 font-bold text-sm">
          <a href="/" className="hover:text-orange-400">Home</a>
          <a href="/meal-details" className="hover:text-orange-400">Meal Details</a>
          <a href="/favorites" className="hover:text-orange-400">Favorites</a>
          <a href="/categories" className="hover:text-orange-400">Categories</a>
          <a
            href="/about"
            className="py-2 px-6 bg-orange-500 text-white rounded-3xl hover:bg-white hover:text-orange-500 border hover:border-orange-500 w-fit"
          >
            About
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
