'use server';

import { prisma } from "@/lib/prisma";

export async function updateFoodEntry(id: string, data: Partial<{ name: string; protein: number; carbs: number; fats: number; category: string }>) {
  return await prisma.food.update({
    where: { id },
    data,
  });
}
