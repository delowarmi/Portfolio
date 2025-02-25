import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce website built with React, Firebase, and Tailwind CSS.",
    image: "https://source.unsplash.com/400x300/?ecommerce,website",
    link: "https://orebi-e-commerce-with-responsive.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio showcasing my skills and projects.",
    image: "https://source.unsplash.com/400x300/?portfolio,website",
    link: "#",
  },
  {
    title: "Dashboard UI",
    description: "An interactive admin dashboard with charts and analytics.",
    image: "https://source.unsplash.com/400x300/?dashboard,ui",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex flex-col items-center">
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
            className="p-4 bg-gray-800 rounded-xl shadow-lg border border-transparent relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div className="absolute inset-0 border-2 rounded-xl border-gray-600" />
            <motion.div
              className="absolute inset-0 rounded-xl"
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(255,0,0,0.3), rgba(255,0,0,0))",
                  "linear-gradient(90deg, rgba(0,255,0,0.3), rgba(0,255,0,0))",
                  "linear-gradient(180deg, rgba(0,0,255,0.3), rgba(0,0,255,0))",
                  "linear-gradient(270deg, rgba(255,0,255,0.3), rgba(255,0,255,0))",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="relative z-10">
              <img src={project.image} alt={project.title} className="w-full rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a href={project.link} className="inline-block mt-3 text-blue-400 hover:underline">
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
