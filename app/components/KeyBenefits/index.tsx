import React from "react";
import Image from "next/image";

const KeyBenefits: React.FC = () => {
  return (
    <div className="bg-dark_green md:px-32 py-20 px-6 flex items-center gap-8 justify-between lg:flex-row flex-col">
      <div>
        <h3 className="md:text-5xl text-3xl text-white font-medium mb-14">Key 
        <span className="ml-4 relative w-full border-2 border-green_300 py-1 px-6 rounded-md bg-green_500">
          <span className="h-full rounded absolute bg-green_300 top-0 left-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
          features
          <span className="h-full rounded absolute bg-green_300 top-0 right-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
        </span>
        </h3>
        <ul className="text-white text-xl font-normal leading-10 grid sm:grid-cols-2 grid-cols-1 gap-6">
          <li className="flex gap-3 place-items-baseline">
            <Image src="/assets/right-logo.svg" alt="logo" loading='lazy' width={21} height={15}/>Enhanced Agent Efficiency
          </li>
          <li className="flex gap-3 place-items-baseline">
            <Image src="/assets/right-logo.svg" alt="logo" loading='lazy' width={21} height={15}/>Real-time Data Insights
          </li>
          <li className="flex gap-3 place-items-baseline">
            <Image src="/assets/right-logo.svg" alt="logo" loading='lazy' width={21} height={15}/>Higher Conversion Rates
          </li>
          <li className="flex gap-3 place-items-baseline">
            <Image src="/assets/right-logo.svg" alt="logo" loading='lazy' width={21} height={15}/>Reduced Operational Costs
          </li>
          <li className="flex gap-3 place-items-baseline">
            <Image src="/assets/right-logo.svg" alt="logo" loading='lazy' width={21} height={15}/>Personalized Customer Interactions
          </li>
        </ul>
      </div>
      <div className="bg-white_400 rounded-3xl">
        <Image
          src="/assets/key-benefit.svg"
          alt="Image"
          width={408}
          height={300}
          loading='lazy' 
         />
      </div>
    </div>
  );
};

export default KeyBenefits;
