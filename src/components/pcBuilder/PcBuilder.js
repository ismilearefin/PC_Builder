import Link from 'next/link';
import { GiPowerGenerator } from 'react-icons/gi';

export default function PcBuilder() {
  return (
    <div className="border min-h-[150px] px-2 md:px-0">
        <div className='flex gap-x-6 justify-evenly items-center min-h-[150px]'>
        <GiPowerGenerator className='text-8xl'></GiPowerGenerator>
        <div className='w-2/3'>
        <p className='text-lg md:text-2xl'>Power Supply Unit <span className='bg-gray-400 text-sm text-white px-2 md:px-4 md:py-2 md:rounded-lg'>Required</span></p>
            {/* <div className='mt-4 min-h-50px border bg-gray-200 text-gray-200'>...</div>  */}
        </div>
        <Link href={'/'} className='border px-4 md:px-8 md:text-2xl py-2 hover:text-[#53f4fa] hover:bg-black transition delay-150 duration-300'>Select</Link>
        </div>
    </div>
  )
}
