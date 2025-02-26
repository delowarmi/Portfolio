import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope ,FaFacebook} from "react-icons/fa";
import profilePic from "/src/assets/profile.png"; 
import { MdDownloadForOffline } from "react-icons/md";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

let skills = ["HTML", "CSS",'JS', "Bootstrap", "Tailwind", "React.js", "Next.js"];
const Home = () => {
  let project = [
    {
      id: 1,
      title: "Orebi e-Commerce",
      description: "A full-featured e-commerce platform with payment gateway.",
      image: "/Orebi.png",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio showcasing skills and projects.",
      image: "/portfolio.png",
    },
    {
      id: 3,
      title: "Figma",
      description: "A fully responsive Figma platform with rich text editor.",
      image: "/figma4.png",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex items-center justify-center flex-col">
        <section className="flex flex-col md:flex-row-reverse items-center justify-between w-full max-w-6xl">
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center"
            whileHover={{
              rotate: [0, 2, -2, 2, 0],
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-1 animate-pulse">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full rounded-full border-4 border-gray-900"
              />
            </div>
          </motion.div>

          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <motion.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hi, I'm <span className="text-blue-400">Md Delowar Hosen MI</span>
            </motion.h1>
            <p className="text-lg text-gray-400 mt-2">
              Web Designer | React Developer | Freelancer
            </p>

            <section className="mt-6">
              <div className="flex justify-center md:justify-start items-center gap-x-10">
                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/delowarmi"
                    className="text-[40px] text-blue-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-delowar-hossen-mi-54a462324/"
                    className="text-[40px] text-blue-400"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/md.delowarhossenmi"
                    className="text-[40px] text-blue-400"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="mailto:md48735002@gmail.com"
                    className="text-[40px] text-blue-400"
                  >
                    <FaEnvelope />
                  </a>

                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg shadow-lg relative">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-40"></div>
                  <span className="text-white text-lg font-semibold relative z-10">
                    Download CV
                  </span>
                  <a
                    href="/cv.pdf"
                    download="Md-Delowar-CV.pdf"
                    className="p-2 bg-blue-600 text-white text-[30px] rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500 hover:scale-110 flex items-center justify-center relative z-10"
                  >
                    <MdDownloadForOffline />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 text-lg font-semibold rounded-lg text-white bg-gray-800 border border-transparent 
          shadow-md hover:shadow-blue-500 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 5px #007bff",
                    "0 0 15px #ff00ff",
                    "0 0 5px #007bff",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

<section className="mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-white">Projects</h2>
      <div className="max-w-[1320px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.map((project) => (
          <div
            key={project.id}
            className="relative p-6 bg-gray-800 rounded-lg border-4 border-gray-600 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(255,0,0,0.5), rgba(0,255,0,0.5), rgba(0,0,255,0.5), rgba(255,255,0,0.5), rgba(255,0,255,0.5), rgba(255,0,0,0.5))",
                mixBlendMode: "soft-light",
                opacity: 0.8,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <div className="relative z-10 text-white">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
      </div>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
    </>
  );
};
export default Home;