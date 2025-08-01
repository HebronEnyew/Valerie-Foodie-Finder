import React from 'react';
import {
  FaUtensils,
  FaHatCowboy,
  FaSchool,
  FaUserGraduate,
  FaFireAlt,
} from 'react-icons/fa';
import { ChefHat } from 'lucide-react';

const TrainingPartners = () => {
  const partners = [
    { name: 'Culinary Institute of America', icon: <FaUtensils /> },
    { name: 'Le Cordon Bleu', icon: <FaHatCowboy /> },
    { name: 'Institute of Culinary Education', icon: <FaSchool /> },
    { name: 'Escoffier School of Culinary Arts', icon: <FaUserGraduate /> },
    { name: 'Gordon Ramsay Academy', icon: <FaFireAlt /> },
  ];

  return (
    <div className="bg-black text-orange-400 py-12 px-4 sm:px-10 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8">
          Trusted by Top Culinary Schools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-white"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2">
                {partner.icon}
              </div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-center px-2">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPartners;
