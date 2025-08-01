import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import MealDetails from './pages/MealDetail'; 
import MealPage from './pages/MealPage';
import RandomMeal from './components/RandomMeal';
import PopularMeals from './components/PopularMeals';
import Favorites from './components/Favorites';
import About from './pages/About';
  

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-details" element={<MealDetails />} />
          <Route path="/meal/:id" element={<MealPage />} />
          <Route path='/random-meal' element={<RandomMeal />} />
          <Route path='/PopularMeals' element={<PopularMeals />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
