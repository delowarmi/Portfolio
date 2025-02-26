import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const languageSkills = [
    { name: "Bangla", percentage: 100 },
    { name: "English", percentage: 80 },
    { name: "Hindi", percentage: 60 },
];

const techSkills = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 100 },
    { name: "JavaScript", percentage: 75 },
    { name: "React", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "Bootstrap", percentage: 90 },
    { name: "Tailwind", percentage: 95 },
];

const TechnologySkills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("skills-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setIsVisible(true);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="skills-section" className="bg-gray-900 py-10 ">
            <div className="container max-w-[1120px] mx-auto px-4 text-center border py-10">
                <h2 className="text-2xl font-bold text-white mb-6">Language Skills</h2>
                <div className="space-y-4">
                    {languageSkills.map((skill, index) => (
                        <div key={index} className="text-left flex gap-x-2">
                            <p className="text-white font-semibold w-[60px]">{skill.name}</p>
                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden mt-2">
                                <motion.div
                                    className="h-full bg-orange-500 "
                                    initial={{ width: 0 }}
                                    animate={isVisible ? { width: `${skill.percentage}%` } : {}}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                            <p className="text-orange-400 text-sm mt-1 w-[40px]">{skill.percentage}%</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-white mt-10 mb-6">Technology Skills</h2>
                <div className="space-y-4">
                    {techSkills.map((skill, index) => (
                        <div key={index} className="text-left flex gap-x-2">
                            <p className="text-white font-semibold w-[80px]">{skill.name}</p>
                            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden mt-2">
                                <motion.div
                                    className="h-full bg-blue-500"
                                    initial={{ width: 0 }}
                                    animate={isVisible ? { width: `${skill.percentage}%` } : {}}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                            <p className="text-blue-400 text-sm mt-1 w-[40px]">{skill.percentage}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



export default TechnologySkills;
