import RootLayout from "@/components/Layouts/RootLayout";
import logo from "../../public/techworld-logo.png";
import Image from "next/image";
import PcBuilder from "@/components/pcBuilder/PcBuilder";
import { useGetPcBuilderProductsQuery } from "@/redux/api/apiSlice";
import { category } from "../../utils/category";
import { toArray } from "lodash";

export default function PCBuilder() {
  const { data, isLoading } = useGetPcBuilderProductsQuery();
  if (isLoading) {
    <p>Loading...</p>;
  }
  const totalCost = data?.data?.map(item=>item.price).reduce((acc, item)=>acc + item,0) 

  return (
    <div className="md:w-2/3 mx-auto my-12">
      <div className=" md:flex md:justify-between items-center min-h-[100px] bg-black text-white px-2 md:px-6">
        <div className="flex justify-center">
          <Image className="" src={logo} alt="logo" width={100}></Image>
        </div>
        <p className="md:text-2xl text-gray-300 pb-4 md:pb-0">
          PC Builder - Build Your Own Computer -{" "}
          <span className="text-[#53f4fa]">Tech World</span>
        </p>
      </div>
      <div className="min-h-screen">
        {data?.data &&
          category.map((product) => (
            <PcBuilder
              key={product.name}
              selectedProduct={data.data}
              product={product}
            ></PcBuilder>
          ))}
        <div>
          <div className="bg-gray-100 min-h-[100px] my-4 p-4 flex justify-between items-center">
            <p className="text-2xl">Total Cost: <span className="font-semibold">${totalCost}</span></p>
            { data?.data?.length < 6 ?
            <button className="px-4 border-4 py-2 text-xl disabled:opacity-30" disabled>Complete Build</button>
            :
            <button className="px-4 border-4 py-2 text-xl hover:border-black">Complete Build</button>
        }
          </div>
          
        </div>
      </div>
    </div>
  );
}

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
