import ThemeToggle from '@/components/Buttons/ThemeToggle'
import WorkoutAccordion from '@/components/Workouts/WorkoutsAccordin'
import { getWorkouts } from '@/lib/data'
import getServerUser from '@/lib/getServerUser'
import React from 'react'
import {Input} from "@nextui-org/react";
import { addWorkout } from '@/lib/action'
import {Button} from "@nextui-org/react";


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
    <div className='flex justify-center items-center mt-12 md:mt-24'>


        <form
        className='flex'
        action={addWorkout}
        >
      <Input 
      name='name'
      type="text" label="Name..." />        
        <Button 
        type='submit'
        color="primary" variant="bordered">
        Create Workout
      </Button>
        </form>
    </div>
    <div className='flex flex-col'>
    {workouts.length === 0 ? (
          <p>No workouts created. Start by adding some workouts!</p>
        ) : (
          <WorkoutAccordion workouts={workouts} />
        )}
    </div>
   </section>
  )
}

export default DashboardPage