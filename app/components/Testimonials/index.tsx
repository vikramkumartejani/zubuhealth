"use client"
import React, { useState }  from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => { 
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Zubu Health CRM transformed our sales process! 1",
      author: "John Doe",
      role: "Insurance Agency Manager",
    },
    {
      quote: "Zubu Health CRM transformed our sales process! 2",
      author: "John Doe",
      role: "Insurance Agency Manager",
    },
    {
      quote: "Zubu Health CRM transformed our sales process! 3",
      author: "John Doe",
      role: "Insurance Agency Manager",
    },
   ];

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };
  return (
    <div className="py-20 max-w-[1240px] m-auto">
      <h2 className="md:text-5xl text-3xl text-black_100 font-medium text-center tracking-[-2px]">
        Our 
        <span className="ml-4 relative w-full border-2 border-green_300 py-1 px-6 rounded-md bg-white_600">
          <span className="h-full rounded absolute bg-green_300 top-0 left-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
          testimonials
          <span className="h-full rounded absolute bg-green_300 top-0 right-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
        </span>
      </h2>
      <div className="flex gap-6 flex-col items-center md:flex-row mt-10 px-6">
        <div className="bg-white_600 h-[306px] flex justify-center items-center rounded-2xl">
          <Image
            src="/assets/testimonials.svg"
            alt="Image"
            width={373}
            height={273}
            className='w-[373px] h-full'
          />
        </div>
        <div className="">
      <div className="flex gap-4">
      <Image src='/assets/profile.png' alt='Profile' width={48} height={48} />
        <div className="flex gap-1">
            <Image src='/assets/colon.svg' alt='Colon' width={15} height={26} />
            <Image src='/assets/colon.svg' alt='Colon' width={15} height={26} />
        </div>
      </div>
      <h2 className="mt-6 sm:text-3xl text-2xl font-normal tracking-[-1px] text-black_100">
        {testimonials[activeSlide].quote}
      </h2>
      <h3 className="text-green_300 mt-4 font-semibold text-2xl ">
        {testimonials[activeSlide].author}
      </h3>
      <div className="mt-2 flex items-center justify-between w-full">
        <h3 className="sm:text-xl text-base font-normal text-white_300">
          {testimonials[activeSlide].role}
        </h3>
         <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${
                index === activeSlide
                  ? 'bg-dark_green_100'
                  : 'bg-white_300'
              } sm:min-w-[60px] min-w-[30px] w-full h-[5px] rounded-xl cursor-pointer`}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>


      </div>
    </div>
  );
};

export default Testimonials;
