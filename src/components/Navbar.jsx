import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-4 px-6 z-40">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
     
        <Link to="/" className="text-white text-2xl font-bold">
          <div className="flex items-center justify-center h-20">
            <svg
              width="350"
              height="60"
              viewBox="0 0 350 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="10"
                y="40"
                fontFamily="Arial, sans-serif"
                fontSize="24"
                fontWeight="bold"
                fill="url(#gradient)"
              >
                Md Delowar
              </text>
              <text
                x="150"
                y="40"
                fontFamily="Arial, sans-serif"
                fontSize="24"
                fontWeight="bold"
                fill="#00D8FF"
              >
                Hosen MI
              </text>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4CAF50" />
                  <stop offset="100%" stopColor="#00D8FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>

        
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/service" label="Service" />
            <NavItem to="/portfolio" label="portfolio" />
            <NavItem to="/contact" label="Contact" />
          </ul>
        </div>

     
        <div className="hidden md:block">
          <Link to="mailto:md48735002@gmail.com">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300">
              Hire Me
            </button>
          </Link>
        </div>

     
        <button onClick={toggleNavbar} className="md:hidden text-white">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute z-50 top-16 left-0 w-full bg-gray-800 transition-all duration-300 ${
          isOpen ? "h-auto opacity-100 py-4" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <NavItem to="/" label="Home" onClick={toggleNavbar} />
          <NavItem to="/about" label="About" onClick={toggleNavbar} />
          <NavItem to="/service" label="Service" onClick={toggleNavbar} />
          <NavItem to="/portfolio" label="portfolio" onClick={toggleNavbar} />
          <NavItem to="/contact" label="Contact" onClick={toggleNavbar} />
        <Link to="mailto:md48735002@gmail.com">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300">
              Hire Me
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};


const NavItem = ({ to, label, onClick }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className="text-white text-lg font-medium hover:text-blue-400 transition duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

export default Navbar;
