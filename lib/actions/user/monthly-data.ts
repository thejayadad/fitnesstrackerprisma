'use server';

import { prisma } from '@/lib/prisma';

export async function fetchMonthlyData(userEmail: string, year: string, month: string) {
  const startDate = new Date(Number(year), Number(month) - 1, 1); // First day of the month
  const endDate = new Date(Number(year), Number(month), 0); // Last day of the month

  return await prisma.food.findMany({
    where: {
      userEmail,
      entryDate: {
        gte: startDate.toISOString().split('T')[0],
        lte: endDate.toISOString().split('T')[0],
      },
    },
    orderBy: { entryDate: 'asc' },
  });
}
