'use server';

import { prisma } from '@/lib/prisma';

interface FoodTotals {
  protein: number;
  carbs: number;
  fats: number;
}

interface FoodEntry {
  protein: number;
  carbs: number;
  fats: number;
}

interface ExerciseEntry {
  caloriesBurned: number;
}

export async function fetchUserStats(userEmail: string, date: Date) {
  // Format the date as YYYY-MM-DD for string-based comparison
  const formattedDate = date.toISOString().split('T')[0];
  console.log('Fetching data for entryDate:', formattedDate); // Debugging

  // Fetch user settings
  const userSettings = await prisma.settings.findUnique({
    where: { userEmail },
  });

  // Log formatted date and query for food data
  console.log('Checking formatted date for food query:', formattedDate);

  // Fetch food data for the selected `entryDate`
  const foodData: FoodEntry[] = await prisma.food.findMany({
    where: {
      userEmail,
      entryDate: {
        contains: formattedDate, // Use partial match to debug
      },
    },
  });

  console.log('Food data query result:', foodData); // Debugging

  // Fetch exercise data for the selected `entryDate`
  const exerciseData: ExerciseEntry[] = await prisma.exercise.findMany({
    where: {
      userEmail,
      entryDate: formattedDate, // Compare as a string
    },
  });

  console.log('Exercise data query result:', exerciseData); // Debugging

  // Calculate food totals
  const foodTotals = foodData.reduce<FoodTotals>(
    (totals, item) => ({
      protein: totals.protein + item.protein,
      carbs: totals.carbs + item.carbs,
      fats: totals.fats + item.fats,
    }),
    { protein: 0, carbs: 0, fats: 0 }
  );

  // Calculate exercise calories
  const exerciseCalories = exerciseData.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  console.log('Calculated food totals:', foodTotals); // Debugging
  console.log('Calculated exercise calories:', exerciseCalories); // Debugging

  return {
    userSettings,
    foodTotals,
    exerciseCalories,
  };
}
