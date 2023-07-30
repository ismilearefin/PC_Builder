import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import { BsGithub,BsGoogle } from 'react-icons/bs';



export default function Signup() {
  return (
    <div className='min-h-screen flex justify-center items-center '>
        <div className='md:w-2/6 border min-h-[350px] grid items-center px-2 bg-gray-100 shadow-inner'>
        <div className='grid justify-center items-center'>
        <div className=' min-h-[250px] border grid p-2 bg-white shadow-2xl'>
            <p className='font-semibold text-center text-2xl'>We have one Click authentication System for You!</p>
        <BsGoogle className='py-1 border-2 border-black w-full text-white bg-[#3cba54] text-5xl hover:text-[#3cba54] hover:bg-white transition delay-150 duration-300' onClick={()=>signIn("google",{callbackUrl:"http://localhost:3000/"})}></BsGoogle>
        <BsGithub className='py-1 border w-full border-black text-5xl hover:bg-black hover:text-white transition delay-150 duration-300' onClick={()=>signIn("github",{callbackUrl:"http://localhost:3000/"})}></BsGithub>
        </div>
        </div>
        <Link href={'/'} className='text-right hover:text-red-600'>Go Back</Link>
        </div>
    </div>
  )
}
