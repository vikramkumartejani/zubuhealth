import Image from "next/image";

const OurPricing: React.FC = () => {
  return (
    <div className="bg-white_200">
    <div className="max-w-[1240px] w-full m-auto py-20 px-6">
      <h3 className="font-medium text-3xl md:text-5xl sm:text-left text-center">Our 
      <span className="ml-4 relative w-full border-2 border-green_300 py-1 px-6 rounded-md bg-white_600">
          <span className="h-full rounded absolute bg-green_300 top-0 left-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
          Pricing
          <span className="h-full rounded absolute bg-green_300 top-0 right-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
        </span>
      </h3>
      <div className="flex lg:flex-nowrap flex-wrap lg:justify-start justify-center items-center gap-6 mt-12">
        <div className="w-[308px] min-h-[326px]	flex items-center justify-center flex-col gap-8 bg-white rounded-xl text-center px-8">
          <div className="flex border border-green_100 rounded-xl px-4 py-1 gap-2 items-center justify-center">
            <Image src="/assets/basic-plan.svg" loading='lazy' alt='Basix-Plan' height={15} width={15}/>
            <h3 className="text-green_200 text-base font-normal">Basic Plan</h3>
          </div>
          <h3 className="text-black_100 text-5xl">$Price</h3>
          <h4 className="text-white_300 text-base font-normal">Ideal for small teams</h4>
          <button className="border border-green_100 text-green font-medium text-lg rounded-3xl py-1.5 px-6 hover:bg-green hover:text-white uppercase">select</button>
        </div>
        <div className="w-[308px] min-h-[326px] flex items-center justify-center flex-col gap-8 bg-white rounded-xl text-center px-8">
          <div className="flex border border-green_100 rounded-xl px-4 py-1 gap-2 items-center justify-center">
            <Image src="/assets/pro-plan.svg" loading='lazy' alt='Pro-Plan' height={15} width={15}/>
            <h3 className="text-green_200 text-base font-normal">Pro Plan</h3>
          </div>
          <h3 className="text-black_100 text-5xl">$Price</h3>
          <h4 className="text-white_300 text-base font-normal">Advanced features for growing businesses</h4>
          <button className="border border-green_100 text-green font-medium text-lg rounded-3xl py-1.5 px-6 hover:bg-green hover:text-white uppercase">select</button>
        </div>
        <div className="w-[308px] min-h-[326px] flex items-center justify-center flex-col gap-8 bg-white rounded-xl text-center px-8">
          <div className="flex border border-green_100 rounded-xl px-4 py-1 gap-2 items-center justify-center">
            <Image src="/assets/enterprise-plan.svg" loading='lazy' alt='Enterprise-Plan' height={15} width={15}/>
            <h3 className="text-green_200 text-base font-normal">Enterprise Plan</h3>
          </div>
          <h3 className="text-black_100 text-5xl">$Price</h3>
          <h4 className="text-white_300 text-base font-normal">Custom solutions for large organizations</h4>
          <button className="border border-green_100 text-green font-medium text-lg rounded-3xl py-1.5 px-6 hover:bg-green hover:text-white uppercase">select</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurPricing;
