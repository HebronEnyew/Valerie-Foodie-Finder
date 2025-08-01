import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMealById } from '../services/mealApi';


const MealPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
    <div>
      <button
         onClick={()=> navigate(-1)}
         className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-300 shadow"
      > ← Back
      </button>
    <div className="p-6 md:px-20 flex-row md:flex gap-5 border-dashed border-amber-500 shadow-2xl bg-white min-h-screen" >
      <div className='w-[40%] '>
        <h2 className="text-3xl font-bold mb-4 text-orange-600">{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full max-w-md mb-4 h-auto" />
      </div>
      <div className='w-[60%] mt-10'>
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
    </div>
    </div>
  );
};

export default MealPage;
