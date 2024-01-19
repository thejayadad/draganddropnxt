import ThemeToggle from '@/components/Buttons/ThemeToggle'
import { getWorkouts } from '@/lib/data'
import getServerUser from '@/lib/getServerUser'
import React from 'react'

const DashboardPage = async () => {
    const user  = await getServerUser()
    const userEmail = user.email
    const workouts = await getWorkouts()
  return (
   <section className=''>
    <div className='flex justify-between'>
            <h1>Welcome, {userEmail}</h1>
            <ThemeToggle />
    </div>
    <div className='flex justify-between bg-orange-200 mt-12 md:mt-24'>


        <div>CreatePost</div>
    </div>
    <div className='flex flex-col'>

    </div>
   </section>
  )
}

export default DashboardPage