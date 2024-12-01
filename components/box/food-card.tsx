import React from 'react';
import { GiSteak, GiOilDrum } from 'react-icons/gi';
import { FaBreadSlice, } from 'react-icons/fa';

interface FoodCardProps {
  protein: number;
  carbs: number;
  fats: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ protein, carbs, fats }) => {
  const totalCalories = protein * 4 + carbs * 4 + fats * 9; // Calculate total calories

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 space-y-4">
      {/* Header */}
      <div className="flex flex-col items-start">
        <h2 className="font-semibold text-gray-800 text-lg">Food Overview</h2>
        <p className="text-[12px] text-gray-500">
          Total Calories Consumed and Nutrition Breakdown
        </p>
      </div>

      {/* Total Calories */}
      <div className="text-center bg-gray-50 rounded-md py-4 shadow-sm">
        <h3 className="text-xl font-bold text-red-500">{totalCalories} kcal</h3>
        <p className="text-gray-500 text-sm">Total Calories Consumed</p>
      </div>

      {/* Nutrition Breakdown */}
      <div className="grid grid-cols-3 gap-4">
        {/* Protein */}
        <div className="flex flex-col items-center space-y-2">
          <GiSteak className="text-red-500 h-8 w-8" />
          <p className="font-medium text-gray-800">Protein</p>
          <span className="text-gray-600 text-sm">{protein} g</span>
        </div>

        {/* Carbs */}
        <div className="flex flex-col items-center space-y-2">
          <FaBreadSlice className="text-yellow-300 h-8 w-8" />
          <p className="font-medium text-gray-800">Carbs</p>
          <span className="text-gray-600 text-sm">{carbs} g</span>
        </div>

        {/* Fats */}
        <div className="flex flex-col items-center space-y-2">
          <GiOilDrum className="text-yellow-500 h-8 w-8" />
          <p className="font-medium text-gray-800">Fats</p>
          <span className="text-gray-600 text-sm">{fats} g</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
