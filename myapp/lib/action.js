'use server'
import prisma from "@/lib/prisma"
import getServerUser from "./getServerUser"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export const addWorkout = async(formData) => {
    const user = await getServerUser()
    const userId = user.email;
    console.log("userID " + userId)
    const { name,  } =
    Object.fromEntries(formData);
    try {
        await prisma.post.create({
            data: {
             name,
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