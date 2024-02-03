"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const OurFeatures = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };
   
  const faqItems = [
    {
      image: "/assets/slider1.svg",
      question: "Inbound and Outbound Dialing",
      answer: "Automate routine tasks, focus on closing more deals.",
    },
    {
      image: "/assets/slider6.svg",
      question: "Advanced Automations",
      answer: "Automate routine tasks, focus on closing more deals.",
    },
    {
      image: "/assets/slider5.svg",
      question: "SMS and Email Integration",
      answer: "Automate routine tasks, focus on closing more deals.",
    },
    {
      image: "/assets/slider4.svg",
      question: "Reporting and Analytics",
      answer: "Automate routine tasks, focus on closing more deals.",
    },
    {
      image: "/assets/slider3.svg",
      question: "Easy to Use Interface",
      answer: "Automate routine tasks, focus on closing more deals.",
    },
    {
      image: "/assets/slider2.svg",
      question: "Seamless Integrations",
      answer: "Automate routine tasks, focus on closing more deals.",
    },
  ];

  return (
    <div className="py-20 px-6 max-w-[1240px] mx-auto">
      <h2 className="text-center md:text-5xl text-3xl tracking-[-1px] font-medium mb-16">
        Our
        <span className="ml-4 relative w-full border-2 border-green_300 py-1 px-6 rounded-md bg-white_600">
          <span className="h-full rounded absolute bg-green_300 top-0 left-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
          features
          <span className="h-full rounded absolute bg-green_300 top-0 right-0 min-w-3 flex justify-center items-center">
            <span className="bg-white min-w-[3px] h-10"></span>
          </span>
        </span>
      </h2>
      <div className="flex justify-between items-center flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="flex-1 bg-white_900 p-10">
          <div className="flex justify-center items-center ">
            <Image src='/assets/our-features.svg' alt='Image' loading='lazy' width={520} height={270} className='shadow-md' />
          </div>
        </div>
        {/* Accordion */}
        <div className="flex-1 flex flex-col gap-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`flex gap-4 justify-between border border-white_700 rounded-xl sm:p-6 p-4 ${
              openAccordionIndex === index ? '' : 'bg-white'
            }`}
          >
            <div>
              <div className="flex gap-4" onClick={() => toggleAccordion(index)}>
                <Image src={item.image} alt="image" loading='lazy' width={22} height={22} />
                <h3 className="md:text-xl text-base">{item.question}</h3>
              </div>
              {openAccordionIndex === index && (
                <p className="pl-9 mt-3 text-white_800 md:text-lg text-base">
                  {item.answer}
                </p>
              )}
            </div>
               <button onClick={() => toggleAccordion(index)}>
                {openAccordionIndex === index ? <FaMinus className='mb-16'/> : <FaPlus />}
              </button>
           </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default OurFeatures;
