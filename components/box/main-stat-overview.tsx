import React from 'react';
import { FiTarget, FiActivity, FiCheckCircle } from 'react-icons/fi';

interface Props {
  goal: number;
  protein: number;
  carbs: number;
  fats: number;
  exercise: number;
}

const MainStatOverview: React.FC<Props> = ({
  goal,
  protein,
  carbs,
  fats,
  exercise,
}) => {
  // Calculate total food calories
  const foodCalories = protein * 4 + carbs * 4 + fats * 9;

  // Calculate remaining calories
  const remaining = goal - (foodCalories - exercise);

  return (
    <div className="bg-white shadow-md rounded-lg p-2 border border-gray-200 space-y-4">
      {/* Header */}
      <div className="flex flex-col items-start">
        <h2 className="font-semibold text-gray-800 text-lg">Calorie Overview</h2>
        <p className="text-sm text-gray-500">
          Remaining = Goal - (Food - Exercise)
        </p>
      </div>

      {/* Remaining Calories */}
      <div className="text-center bg-gray-50 rounded-md py-4 shadow-sm">
        <h3 className="text-xl font-bold text-green-600">
          {remaining > 0 ? remaining : 0} kcal
        </h3>
        <p className="text-gray-500 text-sm">Calories Remaining</p>
      </div>

      {/* Stat Details */}
      <div className="grid grid-cols-3 gap-4">
        {/* Goal */}
        <div className="flex flex-col items-center space-y-2">
          <FiTarget className="text-blue-500 h-8 w-8" />
          <p className="font-medium text-gray-800">Goal</p>
          <span className="text-gray-600 text-sm">{goal} cal</span>
        </div>

        {/* Food */}
        <div className="flex flex-col items-center space-y-2">
          <FiCheckCircle className="text-red-500 h-8 w-8" />
          <p className="font-medium text-gray-800">Food</p>
          <span className="text-gray-600 text-sm">{foodCalories} cal</span>
        </div>

        {/* Exercise */}
        <div className="flex flex-col items-center space-y-2">
          <FiActivity className="text-green-500 h-8 w-8" />
          <p className="font-medium text-gray-800">Exercise</p>
          <span className="text-gray-600 text-sm">{exercise} cal</span>
        </div>
      </div>
    </div>
  );
};

export default MainStatOverview;
