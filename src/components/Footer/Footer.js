import Image from "next/image";
import logo from "../../../public/techworld-logo.png";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  return (
    <div className="min-h-[400px] bg-black">
      <div className="md:flex md:justify-evenly items-center">
      <Image src={logo} alt="logo" width={400} height={400}></Image>
      <div className="text-white w-1/2 md:p-4">
        
        <div className=" grid items-center pl-10">
          <div className="">
            <div className="">
              <p className="text-lg md:text-2xl font-bold mb-4 ">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <input
                  className="md:w-2/3 shadow-md pl-4 border"
                  type="email"
                  placeholder="Your Email"
                ></input>
                <button className="md:w-1/3 font-semibold border py-4 px-2 bg-[#FC0254] text-white">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex justify-evenly text-4xl mt-8">
              <BsFacebook></BsFacebook>
              <BsInstagram></BsInstagram>
              <BsPinterest></BsPinterest>
              <BsTwitter></BsTwitter>
              <BsYoutube></BsYoutube>
            </div>
          </div>
        </div>
      </div>
      </div>
      <p className="text-center md:text-right text-gray-400 py-4 pr-2">Copyright ©2023 All rights reserved | This template is made with  by Ismile Arefin</p>
    </div>
  );
}
