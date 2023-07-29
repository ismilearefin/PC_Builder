import FeaturedProductCard from "@/components/FeaturedCategory/FeaturedProductCard";
import ProductCard from "@/components/FeaturedProduct/ProductCard";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

export default function CategoryWiseProduct({ category, data }) {
  return (
    <div className="my-12">
      <h1 className="text-center text-3xl font-semibold capitalize mb-12">Our all <span>{category}s</span></h1>
      <div className="grid md:grid-cols-3 gap-8 mx-12">
        {data.map((product) => (
          <FeaturedProductCard product={product} key={product._id}></FeaturedProductCard>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { category } = context.query; // Access the 'category' query parameter
  const res = await fetch(
    `http://localhost:5000/products?category=${category}`
  );
  const data = await res.json();
  return {
    props: {
      category,
      data,
    },
  };
}

CategoryWiseProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
