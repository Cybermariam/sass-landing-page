import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 bg-white border-t  border-gray-100  font-lora">
      <div className="flex md:flex-row border-t border-gray-100 flex-col text-sm md:justify-between py-10 px-6 gap-6 text-gray-600 bg-white container">
        <p>© Copyright 2025. All Rights Reserved</p>
        <div className="md:space-x-8 flex  md:flex-row flex-col items-center gap-4 md:gap-8 ">
          <a href="#" className="hover:text-midnight transition-colors">
            Support
          </a>
          <a href="#" className="hover:text-midnight transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-midnight transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
