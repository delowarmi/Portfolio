import React from "react";
import { motion } from "framer-motion";
import aboutPic from "/src/assets/bg-removebg-preview.png"; 

const skills = ["HTML", "CSS",'JavaScript', "Bootstrap", "Tailwind", "React.js", "Next.js"];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex items-center justify-center">
      <div className="w-full max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-1 animate-pulse">
            <img
              src={aboutPic}
              alt="Profile"
              className="w-full h-full rounded-full border-4 border-gray-900"
            />
          </div>
        </motion.div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Me
          </motion.h1>
          <p className="text-lg text-gray-400 mt-2">
            Hi, I'm <span className="text-blue-400 font-medium">Md Delowar Hosen MI</span>,I have completed a Diploma in Computer Science and Engineering (CSE). I am passionate about web design and development, with experience in React, Firebase, and modern UI/UX principles. I enjoy creating interactive and user-friendly websites while continuously learning new technologies. I have worked on various projects, including authentication systems, payment gateway integrations, and e-commerce functionalities using Redux. My goal is to enhance my skills and build innovative digital solutions. I am always eager to explore new challenges and improve my expertise in web development. a passionate Web Designer and React Developer. I love building interactive and visually appealing websites.
          </p>
     
          <h2 className="text-2xl font-semibold mt-6">Skills</h2>
          <div className="flex justify-start gap-4 flex-wrap mt-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 text-lg font-semibold rounded-lg text-white bg-gray-800 border border-transparent 
                shadow-md hover:shadow-blue-500 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                animate={{ boxShadow: ["0 0 5px #007bff", "0 0 15px #ff00ff", "0 0 5px #007bff"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
