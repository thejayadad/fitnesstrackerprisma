'use server';

import { prisma } from "@/lib/prisma";

export async function deleteFoodEntry(id: string) {
  return await prisma.food.delete({
    where: { id },
  });
}
