import { Inter } from "next/font/google";
const _ = require("lodash");
import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import FeaturedCategory from "@/components/FeaturedCategory/FeaturedCategory";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ randomProducts }) {
  
  return (
    <main>
      <FeaturedProduct randomProducts={randomProducts}></FeaturedProduct>
      <FeaturedCategory></FeaturedCategory>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const randomProducts = _.sampleSize(data, 6); //pick 6 random products from data array

  return {
    props: {
      randomProducts,
    },
  };
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
