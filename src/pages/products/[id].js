import RootLayout from "@/components/Layouts/RootLayout";
import Loading from "@/components/Loading/Loading";
import Rating from "@/components/Rating/Rating";
import UserRating from "@/components/Rating/UserRating";
import { usePostProductInPcBuilderMutation } from "@/redux/api/apiSlice";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DetailsPage({ product }) {
  const router = useRouter()
  const [postProduct, {isLoading}]=usePostProductInPcBuilderMutation();
  
  
  if(isLoading) {
    return <Loading></Loading>
  }
 
  
  const handleProduct =(product)=>{
    postProduct(product)
    
    alert('Successfully added product')
    router.push('/pcBuilder')
  }

  const {
    averageRating,
    brand,
    category,
    description,
    image,
    model,
    price,
    productName,
    reviews,
    status,
  } = product;
  return( 
  <div className="md:flex m-4 md:m-16 gap-y-2 md:gap-x-4">
    <div className="w-full md:w-1/2">
        <Image src={image} className="w-full md:max-h-[370px]" alt="image" width={500} height={500}></Image>
    </div>
    <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-semibold mt-6 md:mt-0">{productName}</h1>
        <p className="text-xl mt-2">{description}</p>
        <div className="md:flex grid gap-y-4 md:gap-3 mt-4 text-lg">
            <p className="py-2 border md:w-1/3 text-center bg-gray-100 font-semibold rounded">Price: ${price}</p>
            <p className="py-2 border md:w-1/3 text-center bg-gray-100 font-semibold rounded">Brand: {brand}</p>
            <p className="py-2 border md:w-1/3 text-center bg-gray-100 font-semibold rounded">{status}</p>
        </div>
        <div className="mt-4 grid text-lg">
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <p>{status}</p>
            <p>Model: {model}</p>
            <p>Total Reviews: {reviews}</p>
            <div className="flex items-center gap-2">
              <p>Avg rating:</p>
            <Rating value={averageRating}></Rating> 
            <p className="text-gray-400">{averageRating}</p>
            </div>
             <div className="flex gap-x-2"> 
              <p>Your rating:</p>
             <UserRating></UserRating>
             </div>
        </div>
        <div className="w-full grid justify-end">
        <button className="border-4 px-6 font-semibold text-lg text-[#2ea4a8]" onClick={()=>handleProduct(product)}>Add To Builder</button>
        </div>
    </div>
  </div>
  )
}

DetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-backend-g8wx.onrender.com/products");
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://pc-builder-backend-g8wx.onrender.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
