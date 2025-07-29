import React from 'react';
import { FaSearch, FaHeart, FaRandom } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-orange-50 py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
          About VALERIE
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Discover delicious meals from around the world. Fast, smart, and beautifully served — VALERIE is your modern food discovery companion.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
          What VALERIE Offers
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <FaSearch className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
            <p className="text-gray-600">
              Search meals by name, ingredient, or category with precision and speed.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <FaHeart className="text-3xl text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Save Favorites</h3>
            <p className="text-gray-600">
              Keep your favorite meals just a click away — stored safely in your browser.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <FaRandom className="text-3xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Feeling Lucky?</h3>
            <p className="text-gray-600">
              Discover random meals and get inspired — explore new tastes with a tap.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
          VALERIE was built with one mission in mind — to make discovering, saving, and enjoying meals simple and delightful. Whether you're cooking at home or just curious about global flavors, VALERIE brings culinary inspiration straight to your screen.
        </p>
      </section>

      {/* Footer Call to Action */}
      <section className="bg-orange-100 py-12 px-6 md:px-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to explore?</h3>
        <a
          href="/"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition"
        >
          Go to Home
        </a>
      </section>
    </div>
  );
};

export default About;
