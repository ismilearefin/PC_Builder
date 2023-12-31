import Image from "next/image";
import Link from "next/link";
import Rating from "../Rating/Rating";

export default function ProductCard({ product }) {
  // console.log(product)
  const { _id,image, productName, category, price, status, averageRating } =
    product;
  return (
    <div className="shadow-md hover:shadow-2xl p-2 transition delay-100 duration-300">
      <Link href={`/products/${_id}`}>
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
          <Rating value={averageRating}></Rating>
        </div>
      </div>
      </Link>
    </div>
  );
}
