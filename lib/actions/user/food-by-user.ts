'use server'

import { prisma } from '@/lib/prisma';

export async function fetchFoodByUser(userEmail: string) {
  return await prisma.food.findMany({
    where: { userEmail },
    orderBy: { createdAt: 'desc' }, // Default sort by created date
  });
}
