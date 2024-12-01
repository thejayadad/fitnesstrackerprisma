'use server';

import { z } from 'zod';
import { prisma } from '@/lib/prisma'; // Adjust the path as needed
import { redirect } from 'next/navigation';

// Zod schema for settings validation
const settingsSchema = z.object({
  userEmail: z.string().email(),
  goalCalories: z.number().min(0, 'Calories must be 0 or more'),
  fitnessGoal: z.string().min(1, 'Fitness goal cannot be empty'),
});

export const updateSettings = async (formData: FormData) => {
  // Extract and validate data using Zod
  const data = {
    userEmail: formData.get('userEmail') as string,
    goalCalories: parseFloat(formData.get('goalCalories') as string),
    fitnessGoal: formData.get('fitnessGoal') as string,
  };

  const parsedData = settingsSchema.safeParse(data);

  if (!parsedData.success) {
    // Handle validation errors
    throw new Error(parsedData.error.errors.map((e) => e.message).join(', '));
  }

  const { userEmail, goalCalories, fitnessGoal } = parsedData.data;

  // Update settings in the database
  await prisma.settings.upsert({
    where: { userEmail },
    update: {
      goalCalories,
      fitnessGoal,
    },
    create: {
      userEmail,
      goalCalories,
      fitnessGoal,
    },
  });

  // Redirect to the user page after successful update
  redirect(`/${userEmail}`);
};
