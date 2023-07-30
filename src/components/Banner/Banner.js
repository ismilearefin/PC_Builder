import React from "react";
import CarouselComponent from "./CarouselComponent";
import new04 from "../../../public/new04.PNG";
import new05 from "../../../public/new05.PNG";
import Image from "next/image";

export default function Banner() {
  return (
    <div className=" md:flex gap-4 p-4">
      <div className="md:w-3/4">
        <CarouselComponent></CarouselComponent>
      </div>
      <div className="">
        <div className="md:min-h-[300px] flex items-center border shadow-lg my-2 md:my-0">
          <Image src={new04} alt="new04" width={400} height={400}></Image>
        </div>
        <div className="md:min-h-[300px] flex items-center border mt-2 shadow-lg">
          <Image src={new05} alt="new04" width={400} height={400}></Image>
          1
        </div>
      </div>
    </div>
  );
}
