import Image from "next/image";
import logo from '../../../public/techworld-logo.png';

export default function Footer() {
  return (
    <div className="min-h-[400px] flex bg-black">
        <Image src={logo} alt="logo" width={400} height={400}></Image>
        <div className="text-white p-4">
            <p>Footer</p>
        </div>
    </div>
  )
}
