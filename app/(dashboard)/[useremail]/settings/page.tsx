import { auth } from '@/auth';
import { prisma } from '@/lib/prisma'; // Adjust the path as needed
import { updateSettings } from '@/lib/actions/settings/update-settings';
import { redirect } from 'next/navigation';
import React from 'react';

const UserSettingsPage = async () => {
  const session = await auth();
  const userEmail = session?.user?.email;

  if (!userEmail) {
    redirect('/');
  }

  // Fetch user settings
  const userSettings = await prisma.settings.findUnique({
    where: { userEmail },
  });

  if (!userSettings) {
    redirect('/'); // Redirect if settings are missing
  }

  return (
    <div className="max-w-screen-lg mx-auto pb-10 -mt-12 lg:-mt-24  ">
      <div className="w-full bg-white h-full p-4 border shadow-sm rounded-md">
        <div className="flex flex-col w-full">
          <form action={updateSettings} className="flex flex-col space-y-6">
           <input hidden name='userEmail' id='userEmail' defaultValue={userEmail} />
            <div className="flex flex-col space-y-2">
              <label htmlFor="goalCalories">Calorie Goal</label>
              <input
                name="goalCalories"
                id="goalCalories"
                type="number"
                placeholder="Calorie Goal"
                defaultValue={userSettings?.goalCalories || 0 }
                className="border rounded-md p-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="fitnessGoal">Fitness Goal</label>
              <input
                name="fitnessGoal"
                id="fitnessGoal"
                type="text"
                placeholder="What's your fitness goal?"
                defaultValue={userSettings?.fitnessGoal || 'Update your fitness goal today'}
                className="border rounded-md p-2"
              />
            </div>
            <button type="submit" className="bg-primary text-white py-2 rounded-md">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
