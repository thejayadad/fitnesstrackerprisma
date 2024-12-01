import { auth } from '@/auth';
import Box from '@/components/box/box';
import StatsOverview from '@/components/box/stats-overview';
import OverviewBar from '@/components/stats/overview-bar';
import { initializeUserSettings } from '@/lib/user-settings';
import { redirect } from 'next/navigation';

const UserPage = async () => {
  const session = await auth();
  const userEmail = session?.user?.email;

  if (!session || !userEmail) {
    redirect('/');
    return null;
  }

  // Initialize user settings
  await initializeUserSettings(userEmail);

  return (
    <Box>
       <StatsOverview userEmail={userEmail} />
      <div>
        Monthly Filter
      </div>
    </Box>
  )
};

export default UserPage;
