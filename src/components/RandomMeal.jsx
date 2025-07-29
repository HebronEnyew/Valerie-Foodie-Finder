import React, { useEffect, useState } from 'react';
import { fetchRandomMeal } from '../services/mealApi';

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomMeal = async () => {
    setLoading(true);
    try {
      const result = await fetchRandomMeal();
      setMeal(result);
    } catch (error) {
      console.error('Error fetching random meal:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomMeal();
  }, []);

  if (loading) return <div className="p-6 text-orange-500">Loading...</div>;

  if (!meal) return <div className="p-6">No meal found.</div>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 mb-4">
        {meal.strInstructions?.substring(0, 200)}...
      </p>

      <div className="flex justify-center gap-4 mt-4">
        <a
          href={`/meal/${meal.idMeal}`}
          className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition"
        >
          View Recipe
        </a>
        <button
          onClick={getRandomMeal}
          className="bg-gray-100 text-orange-500 border border-orange-300 px-4 py-2 rounded-full text-sm hover:bg-orange-100 transition"
        >
          Generate Random
        </button>
      </div>
    </div>
  );
};

export default RandomMeal;
