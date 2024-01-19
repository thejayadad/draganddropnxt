'use client'
import React from 'react'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';


const LoginPage = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const authHandler = async () => {
        try {
          await signIn('github', { redirect: false });
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        if (session) router.push('/dashboard');
      }, [router, session]);

  return (
    <div> LoginPage

        <button onClick={authHandler}>
            Login
        </button>
    </div>
  )
}

export default LoginPage