import React from "react";
import { motion } from "framer-motion";
const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce website built with React, Firebase, and Tailwind CSS.",
    image: "/Orebi.png",
    link: "https://orebi-e-commerce-with-responsive.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio showcasing my skills and projects.",
    image: "/portfolio.png",
    link: "https://portfolio-bagv6xcie-delowarmis-projects.vercel.app/",
  },
  {
    title: "Figma Design-1",
    description: "A sleek Figma Design showcasing my skills and projects.",
    image: "/figma4.png",
    link: "https://delowarmi.github.io/project-03/",
  },
  {
    title: "Figma Design-2",
    description: "A sleek Figma Design showcasing my skills and projects.",
    image: "/figma2.png",
    link: "https://delowarmi.github.io/tailwind-2/#",
  },
  {
    title: "Figma Design-3",
    description: "A sleek Figma Design showcasing my skills and projects.",
    image: "/figma3.png",
    link: "https://delowarmi.github.io/project04/",
  },
  {
    title: "Figma Design-4",
    description: "A sleek Figma Design showcasing my skills and projects.",
    image: "/figma.png",
    link: "https://innovet-react-pi.vercel.app/",
  },
  {
    title: "Weather APP",
    description: "A sleek Figma Design showcasing my skills and projects.",
    image: "/app.png",
    link: "https://weather-app-swart-seven-92.vercel.app/",
  },
  {
    title: "Theory",
    description: "A sleek Figma Design showcasing my skills and projects.",
    image: "/theory.png",
    link: "https://delowarmi.github.io/World/",
  },
  {
    title: "House",
    description: "A sleek Figma Design showcasing my skills and projects.",
    image: "/house.png",
    link: "https://delowarmi.github.io/house-1/",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Portfolio
      </motion.h1>
      <p className="text-lg text-gray-400 mt-2 text-center">
        Here are some of my recent projects.
      </p>
      <div className="max-w-[1320px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 rounded-xl shadow-lg border border-gray-600 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            {/* Border Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: 
                  "conic-gradient(from 0deg at 50% 50%, rgba(0,255,255,0.3), rgba(255,0,255,0.3), rgba(255,255,0,0.3))",
                filter: "blur(20px)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Moving Border Dot Effect */}
            <motion.div
              className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
              animate={{
                x: ["0%", "100%", "100%", "0%", "0%"],
                y: ["0%", "0%", "100%", "100%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Main Content */}
            <div className="relative z-10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full rounded-lg h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-block mt-3 text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
