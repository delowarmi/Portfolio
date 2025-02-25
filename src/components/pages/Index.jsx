import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "/src/assets/profile.png"; 
import aboutPic from "/src/assets/bg-removebg-preview.png"; 
import { FaCode, FaMobileAlt } from "react-icons/fa";
import { FaPhone, FaMapMarkerAlt,FaFigma} from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import emailjs from "emailjs-com";
import { FcTemplate } from "react-icons/fc";
import { MdOutlineWeb } from "react-icons/md";
import { DiWordpress } from "react-icons/di";


const skills = ["HTML", "CSS",'JS', "Bootstrap", "Tailwind", "React.js", "Next.js"];
const services = [
  {
    title: "Web Development",
    description:
      "I build responsive and high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.",
    icon: <FaCode />,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Figma to HTML Design",
    description: "I build responsive and high-performance HTML Design using modern technologies like React, Next.js, and Tailwind CSS.",
    icon: <FaFigma  />,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications using React Native with a focus on performance and smooth UX.",
    icon: <FaMobileAlt />,
    color: "from-pink-500 to-red-500",
  },
  {
      title: "Web  Design",
      description: "I build responsive and high-performance Web Design using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: <MdOutlineWeb/>,
      color: "from-pink-500 to-red-500",
    },
    {
      title: "Web Template Design",
      description: "I build responsive and high-performance Template Design using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: <FcTemplate/>,
      color: "from-pink-500 to-red-500",
    },
    {
      title: "Wordpress (CMS) Custom Design",
      description: "I build responsive and high-performance Template Design using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: <DiWordpress/>,
      color: "from-pink-500 to-red-500",
    },
];

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
    link: "https://weather-app-flax-three-51.vercel.app/",
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

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjmdr39",
        "template_3kb1kns",
        e.target,
        "a10Lc5HS-7_DppvNa",
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSuccess("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(" Error:", error);
          setSuccess(" Failed to send message. Try again!");
        },
      );
  };

  const project = [
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

      <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex items-center justify-center">
        <div className="w-full max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-1 animate-pulse">
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
              Hi, I'm <span className="text-blue-400">Md Delowar Hosen MI</span>
              , a passionate Web Designer and React Developer. I love building
              interactive and visually appealing websites.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Skills</h2>
            <div className="flex justify-start gap-4 flex-wrap mt-4">
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
          </div>
        </div>
      </div>

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
   
              <motion.div className="absolute inset-0 border-[3px] rounded-xl border-gray-600" />

 
              <motion.div
                className="absolute inset-0 rounded-xl blur-xl opacity-60"
                style={{
                  background: "conic-gradient(from 0deg, rgba(255,0,0,0.5), rgba(0,255,0,0.5), rgba(0,0,255,0.5), rgba(255,255,0,0.5), rgba(255,0,255,0.5), rgba(255,0,0,0.5))",
                  maskImage: "radial-gradient(circle, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 70%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              ></motion.div>

        
              <motion.div
                className="absolute inset-0 rounded-xl border-[3px]"
                animate={{
                  borderColor: ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ff0000"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg"
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

      <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Me
        </motion.h1>
        <p className="text-lg text-gray-400 mt-2 text-center">
          Feel free to reach out for collaborations or inquiries.
        </p>
        <div className="w-full max-w-3xl mt-10 p-6 bg-gray-800 rounded-xl">
          <form className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label className="block text-gray-400">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                placeholder="Your message..."
                rows="4"
                required
              ></textarea>
            </div>
            <motion.button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
              whileHover={{ scale: 1.05 }}
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
          {success && (
            <p className="mt-3 text-center text-green-400">{success}</p>
          )}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="p-6 rounded-xl bg-gray-800 border border-gray-600 flex flex-col items-center text-center relative"
            whileHover={{ scale: 1.05 }}
          >
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
            <FaPhone className="text-3xl text-blue-400 relative z-10" />
            <h3 className="text-lg font-semibold mt-2 relative z-10">Phone</h3>
            <p className="text-gray-400 mt-1 relative z-10">+8801869244004</p>
          </motion.div>

          <motion.div
            className="p-6 rounded-xl bg-gray-800 border border-gray-600 flex flex-col items-center text-center relative"
            whileHover={{ scale: 1.05 }}
          >
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
            <FaEnvelope className="text-3xl text-blue-400 relative z-10" />
            <h3 className="text-lg font-semibold mt-2 relative z-10">Email</h3>
            <p className="text-gray-400 mt-1 relative z-10">
              md48735002@gmail.com
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-xl bg-gray-800 border border-gray-600 flex flex-col items-center text-center relative"
            whileHover={{ scale: 1.05 }}
          >
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
            <FaMapMarkerAlt className="text-3xl text-blue-400 relative z-10" />
            <h3 className="text-lg font-semibold mt-2 relative z-10">
              Location
            </h3>
            <p className="text-gray-400 mt-1 relative z-10">Dhaka Bangladesh</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;