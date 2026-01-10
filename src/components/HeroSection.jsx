import React from "react";
import HeroImage from "../assets/photo.svg";
import { FaCircleCheck } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <header className="flex flex-col font-lora bg-background2">
      <div className="flex flex-col justify-between md:flex-row md:items-center ">
        <div className=" p-12 ">
          <h1 className="font-medium text-4xl  md:text-5xl lg:text-6xl max-w-100">
            Simplify operations for your business{" "}
          </h1>
          <p className="text-[#05255F] text-sm font-light pt-8 md:pt-12 max-w-125 py-8">
            Power your business with an all-in-one SaaS solution designed for
            efficiency, security and scalability.{" "}
          </p>
          <button className="bg-tahiti text-midnight px-4 py-2 text-sm">
            Start a free trial
          </button>
        </div>
        <div className="pr-12">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-full object-contain"
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center bg-[#D1EDF5] h-15">
        <div className=" flex-row items-center flex space-x-10">
          <div className="flex items-center space-x-2">
            <FaCircleCheck /> <span>100% satisfaction</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCircleCheck /> <span>trusted by 100k+ clients</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
