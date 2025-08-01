import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories, fetchMealsByCategory, fetchMealById } from '../services/mealApi';
import { FaHeart, FaCocktail } from 'react-icons/fa';
import { useSearchParams, useNavigate } from 'react-router-dom';

const MealDetails = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const type = searchParams.get('type');

  const navigate = useNavigate();

  const toggleFavorite = (meal) => {
    const stored = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
    const exists = stored.some((m) => m.idMeal === meal.idMeal);

    let updatedFavorites;
    if (exists) {
      updatedFavorites = stored.filter((m) => m.idMeal !== meal.idMeal);
    } else {
      updatedFavorites = [...stored, meal];
    }

    localStorage.setItem('favoriteMeals', JSON.stringify(updatedFavorites));

    // Update local UI state
    setMeals((prev) =>
      prev.map((m) =>
        m.idMeal === meal.idMeal ? { ...m, _favorited: !exists } : m
      )
    );
  };

  const getMeals = useCallback(async () => {
    setLoading(true);
    try {
      let results = [];

      if (query && type) {
        // search logic
        if (type === 'name') {
          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
          const data = await res.json();
          results = data.meals || [];
        } else if (type === 'category') {
          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`);
          const data = await res.json();
          const mealList = data.meals?.slice(0, 12) || [];
          results = await Promise.all(mealList.map(m => fetchMealById(m.idMeal)));
        } else if (type === 'ingredient') {
          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
          const data = await res.json();
          const mealList = data.meals?.slice(0, 12) || [];
          results = await Promise.all(mealList.map(m => fetchMealById(m.idMeal)));
        }
      } else {
        // random meals
        const categories = await fetchCategories();
        let allMeals = [];

        for (const category of categories) {
          const mealsInCategory = await fetchMealsByCategory(category);
          const randomMeals = mealsInCategory
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

          allMeals = allMeals.concat(randomMeals);
          if (allMeals.length >= 25) break;
        }

        const limited = allMeals.slice(0, 12);
        results = await Promise.all(limited.map(meal => fetchMealById(meal.idMeal)));
      }

      // Mark favorites
      const storedFavorites = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
      results = results.map((meal) => ({
        ...meal,
        _favorited: storedFavorites.some((f) => f.idMeal === meal.idMeal),
      }));

      setMeals(results);
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false);
    }
  }, [query, type]);

  useEffect(() => {
    getMeals();
  }, [getMeals]);

  if (loading) {
    return (
      <div className="p-10 text-center text-lg font-semibold text-orange-500">
        Loading meals...
      </div>
    );
  }

  return (
    <div className="p-6 md:px-20 bg-gray-50 min-h-screen">
      {query && (
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-300 shadow"
          >
            ← Back
          </button>
        </div>
      )}

      <h2 className="text-3xl font-bold mb-8 text-center text-orange-600">
        Ocean of Meals
      </h2>

      {meals.length === 0 ? (
        <div className="text-center text-gray-500 mt-10 text-lg">No meals found.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal) => (
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
                    <Link
                      to={`/meal/${meal.idMeal}`}
                      className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition"
                    >
                      <FaCocktail />
                      View Recipe
                    </Link>
                                  <button
                    onClick={() => toggleFavorite(meal)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition ${
                      meal._favorited
                        ? 'bg-pink-100 text-red-500'
                        : 'bg-gray-200 text-gray-700 hover:bg-pink-100 hover:text-red-500'
                    }`}
                  >
                    <FaHeart />
                    {meal._favorited ? 'Unfavorite' : 'Favorite'}
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

export default MealDetails;
