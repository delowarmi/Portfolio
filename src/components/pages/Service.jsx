import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "I build responsive and high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.",
    icon: <FaCode />,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "UI/UX Design",
    description: "Creating stunning, user-friendly, and interactive UI designs with Figma, Adobe XD, and modern CSS frameworks.",
    icon: <FaPaintBrush />,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Mobile App Development",
    description: "Building cross-platform mobile applications using React Native with a focus on performance and smooth UX.",
    icon: <FaMobileAlt />,
    color: "from-pink-500 to-red-500",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-[1320px] mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Services
        </motion.h1>
        <p className="text-lg text-gray-400 mt-2 text-center">
          Here are the services I provide to help grow your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl bg-gray-800 border border-gray-600 flex flex-col items-center text-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 border-[3px] rounded-xl border-gray-600"
              />
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
              <div className={`relative z-10 text-5xl p-4 rounded-full bg-gradient-to-r ${service.color} text-white`}>
                {service.icon}
              </div>
              <h3 className="relative z-10 text-xl font-semibold mt-4">{service.title}</h3>
              <p className="relative z-10 text-gray-400 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
