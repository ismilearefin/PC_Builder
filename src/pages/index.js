import { Inter } from "next/font/google";
const _ = require("lodash");
import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import FeaturedCategory from "@/components/FeaturedCategory/FeaturedCategory";
import Banner from "@/components/Banner/Banner";
import InfoSection from "@/components/InfoSection.js/InfoSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ randomProducts }) {
  
  return (
    <main>
      <Banner></Banner>
      <FeaturedProduct randomProducts={randomProducts}></FeaturedProduct>
      <FeaturedCategory></FeaturedCategory>
      <InfoSection></InfoSection>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-backend-g8wx.onrender.com/products");
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
