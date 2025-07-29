import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealById } from '../services/mealApi';

const MealPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMeal = async () => {
      try {
        const data = await fetchMealById(id);
        setMeal(data);
      } catch (error) {
        console.error('Error fetching meal:', error);
      } finally {
        setLoading(false);
      }
    };

    getMeal();
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  if (!meal) return <div className="p-10 text-center">Meal not found.</div>;

  return (
    <div className="p-6 md:px-20 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-orange-600">{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full max-w-xl mb-4" />
      <p className="text-gray-600 mb-2">
        <strong>Category:</strong> {meal.strCategory}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Instructions:</strong> {meal.strInstructions}
      </p>
      {meal.strYoutube && (
        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
};

export default MealPage;
