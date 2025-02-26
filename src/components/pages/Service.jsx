import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaFigma } from "react-icons/fa";
import { FcTemplate } from "react-icons/fc";
import { MdOutlineWeb } from "react-icons/md";
import { DiWordpress } from "react-icons/di";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[10px] top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-3xl text-white" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-[10px] top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-3xl text-white" />
  </div>
);


const services = [
  {
    title: "Web Development",
    description: "I build responsive and high-performance websites using modern technologies like React, Next.js, and Tailwind CSS.",
    icon: <FaCode />,
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Figma to HTML Design",
    description: "I build responsive and high-performance HTML Design using modern technologies like React, Next.js, and Tailwind CSS.",
    icon: <FaFigma />,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Mobile App Development",
    description: "Building cross-platform mobile applications using React Native with a focus on performance and smooth UX.",
    icon: <FaMobileAlt />,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Web Design",
    description: "I build responsive and high-performance Web Design using modern technologies like React, Next.js, and Tailwind CSS.",
    icon: <MdOutlineWeb />,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Web Template Design",
    description: "I build responsive and high-performance Template Design using modern technologies like React, Next.js, and Tailwind CSS.",
    icon: <FcTemplate />,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Wordpress (CMS) Custom Design",
    description: "I build responsive and high-performance Template Design using modern technologies like React, Next.js, and Tailwind CSS.",
    icon: <DiWordpress />,
    color: "from-pink-500 to-red-500",
  },
];

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6  py-20 flex flex-col items-center">
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
        <Slider {...settings} className="mt-28">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className=" relative p-8 rounded-xl bg-gray-800 border border-gray-600 flex flex-col items-center text-center overflow-hidden"
              whileHover={{ scale: 1.05, rotateX: -0, translateY: -10 }}
            >
              <motion.div className=" absolute inset-0 border-[3px] rounded-xl border-gray-600" />
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
              <div className={`relative z-10 flex items-center justify-center w-24 h-24 text-5xl left-[50%] -translate-x-1/2 rounded-full bg-gradient-to-r ${service.color} text-white`}>
                {service.icon}
              </div>
              <h3 className="relative z-10 text-xl font-semibold mt-4">{service.title}</h3>
              <p className="relative z-10 text-gray-400 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Service;
