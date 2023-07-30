import { signIn } from 'next-auth/react';
import React from 'react'
import { BsGithub,BsGoogle } from 'react-icons/bs';



export default function Signup() {
  return (
    <div className='min-h-screen flex justify-center items-center text-4xl'>
        <BsGoogle onClick={()=>signIn("google",{callbackUrl:"http://localhost:3000/"})}></BsGoogle>
        <BsGithub onClick={()=>signIn("github",{callbackUrl:"http://localhost:3000/"})}></BsGithub>
    </div>
  )
}
