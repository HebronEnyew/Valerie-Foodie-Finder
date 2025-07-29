import React from 'react'
import SearchBar from '../components/SearchBar'
import Image from '../components/images/delicious-pizza-studio.jpg'
import PopularMeals from '../components/PopularMeals'
import TrainingPartners from '../components/TrainingPartners'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
  <div className='flex flex-col my-0 mx-auto bg-black' >
   <SearchBar  />
    <div className='flex max-sm:flex-col  bg-black my-3 mx-auto '>
      <div className='flex flex-col items-start mx-auto md:mt-[75px] pt-20 max-sm:pt-0 max-sm:w-[100%] max-sm:px-2 text-teal-50 w-[30%] '>
        <h1 className='md:text-6xl text-2xl mb-2 font-bold'>Best Food Reciepie Finder</h1>
        <p className='m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero maxime placeat cupiditate pariatur! Totam possimus nam laboriosam libero voluptas similique modi quasi odio nobis sequi.</p>
        <div className='flex gap-5'>
          <button className='py-3 px-4 mt-2 bg-orange-500 text-white border-0 rounded-3xl hover:pointer'><a href='/random-meal'>Random Meal</a></button>
          <button className='py-3 px-4 mt-2 bg-white text-orange-500 border-0 rounded-3xl'><a href="/PopularMeals">Popular Meals</a></button>
        </div>
        
      </div>
      <div>
        <img src={Image} alt=""  className=' max-sm:w-[400px] max-sm:h-[350px] w-[850px] h-[650px] mx-auto md:mt-[-10px] '/>
      </div>
    </div>
   </div>
    <div className='mx-auto flex flex-col items-center '>
      <h1 className='md:text-5xl text-2xl my-6 font-bold text-orange-700'>Featured Today</h1>
      <PopularMeals />
      </div>
      <TrainingPartners />
      <Footer />
    
  
  </div>
  )
}

export default Home