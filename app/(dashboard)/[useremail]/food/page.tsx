import { auth } from '@/auth'
import Box from '@/components/box/box'
import FoodTable from '@/components/food/food-table'
import { redirect } from 'next/navigation'
import React from 'react'
const UserFoodPage = async () => {
  const session = await auth()
  const userEmail = session?.user?.email
  if(!userEmail){
    redirect('/')
  }
  return (
    <Box>
      <FoodTable userEmail={userEmail} />
    </Box>
  )
}

export default UserFoodPage