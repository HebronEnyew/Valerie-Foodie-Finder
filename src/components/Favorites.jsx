// src/pages/Favorites.jsx
import React, { useEffect, useState } from 'react';
import { FaCocktail, FaHeartBroken } from 'react-icons/fa';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
    setFavorites(stored);
  }, []);

  const removeFromFavorites = (idMeal) => {
    const updated = favorites.filter(meal => meal.idMeal !== idMeal);
    setFavorites(updated);
    localStorage.setItem('favoriteMeals', JSON.stringify(updated));
  };

  return (
    <div className="p-6 md:px-20 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-orange-600">
        Your Favorite Meals
      </h2>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center text-center mt-20">
          <FaHeartBroken className="text-6xl text-gray-300 mb-4" />
          <p className="text-lg text-gray-500 font-medium">
            You haven't added any meals to your favorites yet.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition duration-300"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {meal.strMeal}
                </h3>
                <p className="text-sm text-gray-500">
                  Category: <span className="font-semibold">{meal.strCategory}</span>
                </p>

                <div className="flex gap-3 mt-4">
                  <a
                    href={`/meal/${meal.idMeal}`}
                    className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition"
                  >
                    <FaCocktail />
                    View Recipe
                  </a>
                  <button
                    onClick={() => removeFromFavorites(meal.idMeal)}
                    className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm hover:bg-red-200 transition"
                  >
                    <FaHeartBroken />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
