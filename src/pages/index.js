import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import DropdownButton from '@/components/navbar/DropdownButton'
import Footer from '@/components/Footer/Footer'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <Navbar></Navbar>
      <h1>Hello</h1>
      <Footer></Footer>
    </main>
  )
}
