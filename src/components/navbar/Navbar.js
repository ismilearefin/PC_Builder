import Image from 'next/image';
import logo from '../../../public/techworld-logo.png';
import Link from 'next/link';
import DropdownButton from './DropdownButton';
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {

  const { data: session } = useSession()

  

  return (
    <div className="border bg-black pb-4">
        <div className='flex justify-center'>
        <Link href={'/'}><Image src={logo} alt='logo' width={120} height={120}></Image></Link>
        </div>
        <nav className='text-gray-300 flex justify-center gap-x-6 text-md'>
            <Link href={'/'} className='hover:text-[#5CE1E6]'>Home</Link>
            <p>|</p>
            <Link href={'/pcBuilder'} className='hover:text-[#5CE1E6]'>Pc Builder</Link>
            <p>|</p>
            <DropdownButton></DropdownButton>
            <p>|</p>
            { session?.user ?
            <button onClick={()=>signOut()} className='hover:text-[#5CE1E6]'>Sign Out</button>
            :
              <Link href={'/signup'} className='hover:text-[#5CE1E6]'>Sign In</Link>
            }
        </nav>
    </div>
  )
}
