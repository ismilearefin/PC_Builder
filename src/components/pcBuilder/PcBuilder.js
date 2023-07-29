import Link from 'next/link';


export default function PcBuilder({product}) {
    // console.log(product)
  return (
    <div className="border min-h-[150px] px-2 md:px-0">
        <div className='flex gap-x-6 justify-evenly items-center min-h-[150px]'>
        <p className='text-8xl'>{product.icon}</p>
        <div className='w-2/3'>
        <p className='text-lg md:text-2xl'>{product.name} <span className='bg-gray-400 text-sm text-white px-2 md:px-4 md:py-2 md:rounded-lg'>Required</span></p>
            <div className='mt-4 min-h-50px border bg-gray-200 text-gray-200'>...</div> 
            {/* <div></div> */}
        </div>
        <Link href={`/products?category=${product.name}`} className='border px-4 md:px-8 md:text-2xl py-2 hover:text-[#53f4fa] hover:bg-black transition delay-150 duration-300'>Select</Link>
        </div>
    </div>
  )
}
