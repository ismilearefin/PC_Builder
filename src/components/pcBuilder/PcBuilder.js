import Image from "next/image";
import Link from "next/link";
import { GrCheckboxSelected } from "react-icons/gr";

export default function PcBuilder({ product, selectedProduct }) {
  const Items = selectedProduct.filter(
    (Iproduct) => Iproduct.category === product.name
  );

  return (
    <div className="border min-h-[150px] px-2 md:px-0">
      <div className="flex gap-x-6 justify-evenly items-center min-h-[150px]">
        <p className="text-8xl">
          {Items.length > 0 ? (
            <Image
              src={Items[0]?.image}
              alt="logo"
              width={100}
              height={100}
            ></Image>
          ) : (
            product.icon
          )}
        </p>
        <div className="w-2/3">
          <p className="text-lg md:text-2xl">
            {product.name}{" "}
            <span className="bg-gray-400 text-sm text-white px-2 md:px-4 md:py-0.5 md:rounded">
              Required
            </span>
          </p>

          {Items.length ? (
            <div className="pt-1">
              <div className="flex justify-between">
                <p className="md:text-lg">{Items[0]?.productName}</p>
                <p className="md:border md:py-1 px-2 md:bg-gray-100 rounded-sm font-semibold">
                  ${Items[0]?.price}
                </p>
              </div>
              <div className="flex gap-x-6 justify-between md:justify-normal">
                <p className="text-[#358022] font-semibold">
                  {Items[0]?.status}
                </p>
                <p className="">Rating: {Items[0]?.averageRating}</p>
              </div>
            </div>
          ) : (
            <div className=" mt-4 min-h-50px border bg-gray-200 text-gray-200">
              ...
            </div>
          )}
        </div>
        {!Items.length ? (
          <Link
            href={`/products?category=${product.name}`}
            className="border px-4 md:px-8 md:text-2xl py-2 hover:text-[#53f4fa] hover:bg-black transition delay-150 duration-300"
          >
            Select
          </Link>
        ) : (
          <GrCheckboxSelected className="md:text-2xl text-[#43f9ff]"></GrCheckboxSelected>
        )}
      </div>
    </div>
  );
}
