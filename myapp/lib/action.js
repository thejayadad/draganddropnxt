'use server'
import prisma from "@/lib/prisma"
import getServerUser from "./getServerUser"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import slugify from 'slugify';

export const addWorkout = async(formData) => {
    const user = await getServerUser()
    const userId = user.email;
    console.log("userID " + userId)
    const { name,  } =
    Object.fromEntries(formData);

    try {
        await prisma.workout.create({
            data: {
             name,
             slug: slugify(name),
              userId: userId, 
            },
          });
          revalidatePath("/dashboard")
    } catch (error) {
        throw new Error("Failed To Create Workout " + error)

    }
    revalidatePath("/dashboard")
    redirect(`/dashboard`)
}