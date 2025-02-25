import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
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

  return (
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
          <h3 className="text-lg font-semibold mt-2 relative z-10">Location</h3>
          <p className="text-gray-400 mt-1 relative z-10">Dhaka Bangladesh</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
