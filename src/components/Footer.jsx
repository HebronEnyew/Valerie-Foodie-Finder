import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-orange-500 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h1 className="text-2xl font-bold">VALERIE </h1>
          <p className="text-sm mt-2">Crafting flavor, culture & inspiration.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-black transition">Home</a></li>
            <li><a href="/meal-detals" className="hover:text-black transition">Meal Detail</a></li>
            <li><a href="/favorites" className="hover:text-black transition">Favorite</a></li>
            <li><a href="/about" className="hover:text-black transition">About</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex justify-center sm:justify-start gap-4 text-xl">
            <a href="/"><FaFacebookF className="hover:text-black transition" /></a>
            <a href="/"><FaTwitter className="hover:text-black transition" /></a>
            <a href="/"><FaInstagram className="hover:text-black transition" /></a>
            <a href="/"><FaYoutube className="hover:text-black transition" /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-orange-500 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} VALERIE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
