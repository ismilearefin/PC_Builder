import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";

export default function DetailsPage({ product }) {
  const {
    averageRating,
    brand,
    category,
    description,
    image,
    individualRating,
    model,
    price,
    productName,
    reviews,
    status,
  } = product;
  return <div className="md:flex m-4 md:m-16 gap-y-2 md:gap-x-4">
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
            <li>Category: {category}</li>
            <li>Brand: {brand}</li>
            <li>{status}</li>
            <li>Model: {model}</li>
            <li>Total Reviews: {reviews}</li>
            <li>Avg Rating: {averageRating}</li>
            <li>Your Rating: {individualRating}</li>
        </div>
    </div>
  </div>;
}

DetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
