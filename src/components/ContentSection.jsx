import React from "react";
import Photo from "../assets/photo-2.svg";
import { IoMdCheckmark } from "react-icons/io";

const ContentSection = () => {
  return (
    <main
      className="bg-background2  p-15 flex flex-col md:flex-row font-lora md:items-center
    gap-15 justify-between"
    >
      <div>
        <img
          src={Photo}
          className="w-full object-contain"
          alt="A picture of a man on laptop"
        />
      </div>
      <div className="pr-12">
        <h2 className="text-3xl md:max-w-70 pt-3">
          Unlock the full potential instantly
        </h2>
        <p className="text-[#05255F] text-sm font-light max-w-100 pt-4 pb-10">
          Gain a competitive edge with a smart, AI-driven SaaS platform that
          helps you manage operations, streamline workflows, and enhance team
          collaboration.
        </p>
        <div className="border-t  pt-10"></div>
        <div className="flex items-center gap-2 pb-3">
          {" "}
          <IoMdCheckmark />
          <span className="text-sm">
            Optimize processes and boost efficiency
          </span>
        </div>
        <div className="flex items-center gap-2 pb-3">
          {" "}
          <IoMdCheckmark />
          <span className="text-sm">
            Automate repetitive tasks with AI-driven insights
          </span>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <IoMdCheckmark />
          <span className="text-sm">
            Securely store and manage business-critical data
          </span>
        </div>
      </div>
    </main>
  );
};

export default ContentSection;
