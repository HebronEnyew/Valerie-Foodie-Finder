import React, { useEffect, useState } from 'react';
import { fetchMealsByCategory, fetchMealById } from '../services/mealApi';

const popularCategories = ['Beef', 'Chicken', 'Seafood', 'Pasta', 'Dessert'];

const PopularMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPopularMeals = async () => {
      setLoading(true);
      try {
        const randomCategory =
          popularCategories[Math.floor(Math.random() * popularCategories.length)];

        const mealList = await fetchMealsByCategory(randomCategory);

        const randomMeals = mealList
          .sort(() => 0.5 - Math.random())
          .slice(0, 6);

        const detailed = await Promise.all(
          randomMeals.map((m) => fetchMealById(m.idMeal))
        );

        setMeals(detailed);
      } catch (error) {
        console.error('Error fetching popular meals:', error);
      } finally {
        setLoading(false);
      }
    };

    getPopularMeals();
  }, []);

  if (loading) return <div className="p-6 text-orange-500">Loading popular meals...</div>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="bg-white shadow rounded-xl overflow-hidden">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">{meal.strMeal}</h3>
            <p className="text-sm text-gray-600">{meal.strCategory}</p>
            <a
              href={`/meal/${meal.idMeal}`}
              className="inline-block mt-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition"
            >
              View Recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularMeals;
