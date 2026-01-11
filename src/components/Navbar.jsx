import React, { useState } from "react";
// Removed NavLink import since we aren't using a Router
import Logo from "../assets/Brandon.svg";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Services", path: "#services" },
    { name: "About", path: "#about" },
    { name: "News", path: "#news" },
    { name: "Career", path: "#career" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="flex h-full justify-between sticky top-0 bg-background2 items-center md:px-12 px-6 py-4 font-inter z-50 shadow-sm">
      {/* FIXED: Changed NavLink to a regular anchor tag */}
      <a href="#">
        <img src={Logo} alt="Brandon Logo" />
      </a>

      <button
        onClick={toggleButton}
        className="md:hidden text-2xl text-[#05255F] z-50"
      >
        {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
      </button>

      <ul
        className={`fixed md:static top-0 left-0 h-screen md:h-auto w-full md:w-auto  
          flex flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-8 
          transition-transform duration-300 ease-in-out z-40 bg-background2
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
          md:flex`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg md:text-sm text-[#05255F] hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}

        <div className="flex flex-col space-y-4 md:hidden w-full px-12">
          <button className="text-[#05255F] border border-[#05255F] py-2 px-4 rounded">
            Login
          </button>
          <button className="bg-[#05255F] text-white py-2 px-4 rounded">
            Trial
          </button>
        </div>
      </ul>

      <div className="hidden md:flex items-center space-x-4 text-sm">
        <button className="text-[#05255F] hover:opacity-80 transition">
          Login
        </button>
        <button className="bg-[#05255F] text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
          Start a free trial
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
