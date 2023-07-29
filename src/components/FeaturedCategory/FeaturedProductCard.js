import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToPcBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";
import { useRouter } from "next/router";
import { usePostProductInPcBuilderMutation } from "@/redux/api/apiSlice";


export default function FeaturedProductCard({ product }) {
    const router = useRouter()
    const [postProduct, options]=usePostProductInPcBuilderMutation();
  

  
  
  const handleProduct =(product)=>{
    postProduct(product)
    alert('Successfully added product')
    router.push('/pcBuilder')
  }
 
  const { _id,image, productName, category, price, status, averageRating } =
    product;
  return (
    <div className="shadow-md hover:shadow-2xl p-2 transition delay-100 duration-300">
      <div>
        <Image
          className="w-full"
          src={image}
          alt="product Image"
          width={250}
          height={200}
        ></Image>
      </div>
        <p className="text-xl font-semibold pl-2 py-2">{productName}</p>
      <div>
        <div className="text-lg pl-2 grid gap-y-1">
          <p className="shadow-sm bg-gray-100  font-semibold">{category}</p>
          <p>${price}</p>
          <p>{status }</p>
          <p>Rating: {averageRating}</p>
        </div>
      </div>
      <div className="flex justify-between p-2 gap-2">
      <Link className="border hover:border-[#32f5fc] w-1/2 text-center" href={`/products/${_id}`}>
        Details
      </Link>
      <button className="w-1/2 border hover:border-[#32f5fc]" onClick={()=>handleProduct(product)}>Select</button>
      </div>
    </div>
  );
}

