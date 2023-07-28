import { Inter } from 'next/font/google'
const _ = require('lodash');
import RootLayout from '@/components/Layouts/RootLayout'
import FeaturedProduct from '@/components/FeaturedProduct/FeaturedProduct';
import { BsCloudFog } from 'react-icons/bs';




const inter = Inter({ subsets: ['latin'] })

export default function Home({randomProducts}) {
  
  console.log(randomProducts)
  return (
    <main className=''>
      
      <FeaturedProduct randomProducts={randomProducts}></FeaturedProduct>
      
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/products');
  const data = await res.json();
  console.log(data)
  const randomProducts = _.sampleSize(data, 6);
  // console.log(data)
  return {
      props:{
         randomProducts
      }
  }
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

