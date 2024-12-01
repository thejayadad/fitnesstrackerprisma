'use client'
import React, { useEffect, useState } from 'react';
import { fetchUserStats } from '@/lib/actions/user/user-stats';
import StatCard from './stat-card';
import MainStatOverview from './main-stat-overview';
import FoodCard from './food-card';

const StatsOverview: React.FC<{ userEmail: string }> = ({ userEmail }) => {
  const [stats, setStats] = useState<{
    userSettings: { goalCalories?: number; fitnessGoal?: string } | null;
    foodTotals: { protein: number; carbs: number; fats: number };
    exerciseCalories: number;
  }>({
    userSettings: null,
    foodTotals: { protein: 0, carbs: 0, fats: 0 },
    exerciseCalories: 0,
  });

  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000); // Adjust for local timezone
    return localDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const date = new Date(selectedDate);
        console.log('Fetching stats for:', selectedDate);
        const fetchedStats = await fetchUserStats(userEmail, date);
        console.log('Fetched stats:', fetchedStats);
        setStats(fetchedStats);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchData();
  }, [selectedDate, userEmail]);

  return (
    <div className="space-y-6 w-full">
      {/* Date Picker */}
      <div className="w-full flex items-center justify-between">
        <h1 className="font-extrabold text-xl text-gray-700">Overview</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="input input-bordered w-full md:w-auto"
          />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      <MainStatOverview
        goal={stats.userSettings?.goalCalories || 0}
        protein={stats.foodTotals.protein}
        carbs={stats.foodTotals.carbs}
        fats={stats.foodTotals.fats}
        exercise={stats.exerciseCalories}
      />

      <FoodCard 
        protein={stats.foodTotals.protein} 
        carbs={stats.foodTotals.carbs} 
        fats={stats.foodTotals.fats} 
      />


        <StatCard
          title="Exercise Calories Burned"
          value={`${stats.exerciseCalories} kcal`}
          description="Calories burned during exercises"
        />
      </div>
    </div>
  );
};

export default StatsOverview;
