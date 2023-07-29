import RootLayout from "@/components/Layouts/RootLayout";
import logo from '../../public/techworld-logo.png';
import Image from "next/image";
import PcBuilder from "@/components/pcBuilder/PcBuilder";
import { BsCpu,BsMotherboard,BsFillDiagram3Fill } from 'react-icons/bs';
import { GiPowerGenerator } from 'react-icons/gi';
import { MdStorage,MdMonitor } from 'react-icons/md';
import { useSelector } from "react-redux";

export default function PCBuilder() {
    const selectedProduct = useSelector(state => state.product.selectedProduct)


    const category = [
        {
            name:'CPU',
            icon:<BsCpu></BsCpu>
        },
        {
            name: 'Mother Board',
            icon:<BsMotherboard></BsMotherboard>
        },
        {
            name: 'RAM',
            icon:<BsFillDiagram3Fill></BsFillDiagram3Fill>
        },
        {
            name: 'Power supply Unit',
            icon:<GiPowerGenerator></GiPowerGenerator>
        },
        {
            name: 'Storage Device',
            icon:<MdStorage></MdStorage>
        },
        {
            name: 'Monitor',
            icon:<MdMonitor></MdMonitor>
        }
    ]



  return (
    <div className="md:w-2/3 mx-auto my-12">
        <div className=" md:flex md:justify-between items-center min-h-[100px] bg-black text-white px-2 md:px-6">
            <div className="flex justify-center"><Image className="" src={logo} alt="logo" width={100}></Image></div>
            <p className="md:text-2xl text-gray-300 pb-4 md:pb-0">
            PC Builder - Build Your Own Computer - <span className="text-[#53f4fa]">Tech World</span>
            </p>
        </div>
        <div className="min-h-screen">
            {
                category.map(product =><PcBuilder key={product.name} selectedProduct={selectedProduct} product={product}></PcBuilder>)
            }
            
        </div>
    </div>
  )
}

PCBuilder.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };