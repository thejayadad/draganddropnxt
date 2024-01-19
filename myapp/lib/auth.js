import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from "next-auth/providers/google";


import prisma from "./prisma"
export const authOptions = {
    providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
      strategy: 'jwt',
    },
    adapter: PrismaAdapter(prisma),
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      session: async ({ session, token }) => {
        const userEmail = token.email;
        const user = await prisma.user.findUnique({
          where: { email: userEmail },
        });
        return {
          ...session,
          user: {
            ...session.user,
            id: user?.id,
          },
        };
      },
    },
  };