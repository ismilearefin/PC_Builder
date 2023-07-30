import React from 'react';
import { Carousel } from 'antd';
import newOne from '../../../public/images/new01.PNG';
import newTwo from '../../../public/images/new02.PNG';
import newThree from '../../../public/images/new03.PNG';
import Image from 'next/image';
// const contentStyle = {
//   margin: 0,
 
// };
const CarouselComponent = () => {
  
  return (
    <Carousel autoplay>
      <div>
        <Image className='mx-auto ' src={newOne} alt='new01' width={1250} height={400} ></Image>
  
      </div>
      <div>
        <Image className='mx-auto' src={newTwo} alt='new01' width={1250} height={400}></Image>
        
          
      </div>
      <div>
        <Image className='mx-auto' src={newThree} alt='new01' width={1250} height={400}></Image>
      
      </div>
    </Carousel>
  );
};
export default CarouselComponent;