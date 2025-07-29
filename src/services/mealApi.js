import axios from 'axios'

const API = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
})


export const fetchPopularMeals = async (category = 'Chicken', limit = 3) => {
  try {
    const { data } = await API.get('filter.php', {
      params: { c: category },
    })
    return data.meals?.slice(0, limit) || []
  } catch (error) {
    console.error('Error fetching popular meals:', error)
    return []
  }
}



export const searchMeals = async (query) => {
  if (!query) return []
  try {
    const response = await API.get(`search.php`, {
      params: { s: query },
    })
    return response.data.meals || []
  } catch (error) {
    console.error('❌ Failed to search meals:', error)
    return []
  }
}


export const fetchMealById = async (id) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals ? data.meals[0] : null;
};



export const searchByIngredient = async (ingredient) => {
  if (!ingredient) return []
  try {
    const response = await API.get(`filter.php`, {
      params: { i: ingredient },
    })
    return response.data.meals || []
  } catch (error) {
    console.error("❌ Failed to search by ingredient:", error)
    return []
  }
}


export const fetchCategories = async () => {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const data = await res.json();
  return data.meals.map((c) => c.strCategory);
};

export const fetchMealsByCategory = async (category) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals || [];
};

export const fetchRandomMeal = async () => {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await res.json();
  return data.meals ? data.meals[0] : null;
};