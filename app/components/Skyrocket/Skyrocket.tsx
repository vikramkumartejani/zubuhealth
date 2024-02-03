import React from "react";
import Image from "next/image";

const Skyrocket: React.FC = () => {
  return (
    <div className="md:px-20 px-6 bg-white">
      <div className="max-w-[1240px] bg-dark_green mx-auto rounded-3xl flex items-center justify-between">
        <div className="md:pl-16 md:pr-0 p-6 md:max-w-[550px] w-full flex-col flex justify-center md:justify-start md:items-start items-center">
          <h2 className="lg:text-5xl md:text-start text-center md:text-4xl text-3xl leading-[50px] text-white font-medium">
            Ready to Skyrocket Your Sales?
          </h2>
          <button className="bg-green_300 text-white_500 mt-8 font-normal text-base rounded-3xl py-3 px-6 uppercase">
            SIGN UP TODAY! sign up today!
          </button>
        </div>
        <div className="overflow-hidden md:block hidden">
          <Image
            src="/assets/sky.svg"
            alt="Image"
            width={620}
            height={450}
            loading='lazy' 
            className="h-[300px] "
          />
        </div>
      </div>
     </div>
  );
};

export default Skyrocket;
