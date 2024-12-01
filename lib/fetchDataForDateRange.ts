'use server';

import { prisma } from '@/lib/prisma'; // Adjust the path as needed

/**
 * Fetches food and exercise data for the given date range.
 * @param from - Start date (ISO string).
 * @param to - End date (ISO string).
 */
export const fetchDataForDateRange = async (from: string, to: string) => {
  const startDate = new Date(from);
  const endDate = new Date(to);

  const foodData = await prisma.food.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  const exerciseData = await prisma.exercise.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  return { foodData, exerciseData };
};
