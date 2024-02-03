import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

 
const Footer: React.FC = () => {
  return (
    <div className="bg-dark_green md:px-20 px-4 py-20 w-full m-auto text-center">
      <ul className="flex flex-wrap items-center gap-8 justify-center">
        <li className="text-xl text-white_100 cursor-pointer">About Us</li>
        <li className="text-xl text-white_100 cursor-pointer">Contact</li>
        <li className="text-xl text-white_100 cursor-pointer">FAQ</li>
        <li className="text-xl text-white_100 cursor-pointer">
          Terms of Service
        </li>
        <li className="text-xl text-white_100 cursor-pointer">
          Privacy Policy
        </li>
      </ul>
      <div className="max-w-56 w-full m-auto my-8">
        <Image
          src="/assets/Logo.svg"
          alt="Logo"
          width={100}
          height={100}
          loading='lazy' 
          className="w-full"
        />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <FaFacebook className="text-white_100 h-7 w-7 cursor-pointer" />
        <AiFillTwitterCircle className="text-white_100 h-7 w-7 cursor-pointer" />
        <FaLinkedin  className="text-white_100 h-7 w-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
