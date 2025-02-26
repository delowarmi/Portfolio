import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Website Design", "App Mobile Design", "Figma Design", "Other's"];
const projects = [
  { title: "E-Commerce Website", category: "Website Design", image: "/Orebi.png", link: "https://orebi-e-commerce-with-responsive.vercel.app/" },
  { title: "Portfolio Website", category: "Website Design", image: "/portfolio.png", link: "https://portfolio-delowarmis-projects.vercel.app/" },
  { title: "Figma Design-1", category: "Figma Design", image: "/figma4.png", link: "https://delowarmi.github.io/project-03/" },
  { title: "Figma Design-2", category: "Figma Design", image: "/figma3.png", link: "https://delowarmi.github.io/project04/" },
  { title: "Figma Design-3", category: "Figma Design", image: "/figma2.png", link: "https://delowarmi.github.io/tailwind-2/" },
  { title: "Figma Design-4", category: "Figma Design", image: "/figma.png", link: "https://innovet-react-pi.vercel.app/" },
  { title: "Weather APP", category: "App Mobile Design", image: "/app.png", link: "https://weather-app-swart-seven-92.vercel.app/" },
  { title: "Theory", category: "Other's", image: "/theory.png", link: "https://delowarmi.github.io/World/" },
  { title: "House", category: "Other's", image: "/house.png", link: "https://delowarmi.github.io/house-1/" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Portfolio
      </motion.h1>
      <p className="text-lg text-gray-400 mt-2 text-center">Here are some of my recent projects.</p>

      {/* Category Filter Buttons */}
      <div className="flex gap-4 mt-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white transition-all duration-300 ${
              selectedCategory === category ? "bg-orange-600 shadow-lg" : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="max-w-[1320px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 rounded-xl shadow-lg border border-gray-600 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative z-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <a href={project.link} className="inline-block mt-3 text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex mt-8 gap-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? "bg-orange-600" : "bg-gray-700"}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
