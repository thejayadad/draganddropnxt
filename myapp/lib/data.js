'use server'
import prisma from "@/lib/prisma"
import getServerUser from "./getServerUser"

export const getWorkouts = async() => {
    const user = await getServerUser()
    const userId = user.email;
    console.log("userID " + userId)
    try {
        const workouts = await prisma.workout.findMany({})
        return workouts
    } catch (error) {
        throw new Error("Failed to fetch posts! " + error);

    }
}