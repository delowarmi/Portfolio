import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container max-w-[1120px] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 text-center lg:text-left">
          
          {/* About Section */}
          <div className="lg:ml-2">
            <h3 className="text-lg font-bold text-white ">About Us</h3>
            <p className="mt-2 text-sm">
              We provide high-quality web solutions with modern technologies.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:ml-28 text-center">
            <h3 className="text-lg font-bold text-white ">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-orange-400">Home</a></li>
              <li><a href="about" className="hover:text-orange-400">About</a></li>
              <li><a href="service" className="hover:text-orange-400">Services</a></li>
              <li><a href="portfolio" className="hover:text-orange-400">Portfolio</a></li>
              <li><a href="contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:ml-44">
            <h3 className="text-lg font-bold text-white">Follow Us</h3>
            <div className="flex justify-center lg:justify-start mt-2 space-x-4">
              <a href="https://www.facebook.com/md.delowarhossenmi" className="text-xl hover:text-orange-400"><FaFacebook /></a>
              <a href="#" className="text-xl hover:text-orange-400"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/md-delowar-hossen-mi-54a462324/" className="text-xl hover:text-orange-400"><FaLinkedin /></a>
              <a href="https://github.com/delowarmi" className="text-xl hover:text-orange-400"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
