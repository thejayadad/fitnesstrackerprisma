'use server'
import { prisma } from '@/lib/prisma'; // Update this path to match your project structure

/**
 * Initializes settings for a user after login.
 * @param userEmail - The email of the user logging in.
 */
export async function initializeUserSettings(userEmail: string) {
  if (!userEmail) {
    throw new Error('User email is required');
  }

  // Check if settings already exist for the user
  const existingSettings = await prisma.settings.findUnique({
    where: { userEmail },
  });

  if (!existingSettings) {
    // Create default settings for the user
    await prisma.settings.create({
      data: {
        userEmail,
        goalCalories: 0,
        fitnessGoal: 'Update your fitness goal today',
      },
    });
  }
}
