import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isScrolled ? 0 : -20, opacity: isScrolled ? 1 : 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg py-0" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1320px] mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="text-white text-xl sm:text-2xl font-bold">
          <div className="flex items-center justify-center h-16 sm:h-20">
            <svg
              width="250"
              height="50"
              viewBox="0 0 250 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="10"
                y="30"
                fontFamily="Arial, sans-serif"
                fontSize="18"
                fontWeight="bold"
                fill="url(#gradient)"
              >
                Md Delowar
              </text>
              <text
                x="115"
                y="30"
                fontFamily="Arial, sans-serif"
                fontSize="18"
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-4 sm:space-x-6">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/service" label="Service" />
            <NavItem to="/portfolio" label="Portfolio" />
            <NavItem to="/contact" label="Contact" />
          </ul>
        </div>

        {/* Hire Me Button */}
        <div className="hidden lg:block">
          <Link to="mailto:md48735002@gmail.com">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-5 rounded-lg transition-all duration-300">
              Hire Me
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="block lg:hidden text-white">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-gray-800 transition-all duration-300 ${
          isOpen ? "h-auto opacity-100 py-4" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-3 sm:space-y-4">
          <NavItem to="/" label="Home" onClick={toggleNavbar} />
          <NavItem to="/about" label="About" onClick={toggleNavbar} />
          <NavItem to="/service" label="Service" onClick={toggleNavbar} />
          <NavItem to="/portfolio" label="Portfolio" onClick={toggleNavbar} />
          <NavItem to="/contact" label="Contact" onClick={toggleNavbar} />

          {/* Mobile Hire Me Button */}
          <div className="lg:hidden">
            <Link to="mailto:md48735002@gmail.com">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                Hire Me
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ to, label, onClick }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className="text-white text-base sm:text-lg font-medium hover:text-blue-400 transition duration-300"
      >
        {label}
      </Link>
    </li>
  );
};

export default Navbar;
