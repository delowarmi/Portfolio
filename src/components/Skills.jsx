import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd, SiAdobeillustrator, SiAdobepremierepro } from "react-icons/si";

const skills = [
    { name: "Figma", icon: <FaFigma size={40} />, percentage: 100 },
    { name: "Adobe XD", icon: <SiAdobexd size={40} />, percentage: 90 },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={40} />, percentage: 85 },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={40} />, percentage: 80 },
    { name: "Adobe Premiere", icon: <SiAdobepremierepro size={40} />, percentage: 80 },
];

const Skills = () => {
    return (
        <div className="bg-gray-900 py-10">
            <div className="container max-w-[1120px] mx-auto px-4 text-center border py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-40 h-40"> {/* সাইজ বড় করা */}
                                <CircularProgressbar
                                    value={skill.percentage}
                                    text={""}
                                    strokeWidth={28} // বর্ডার আরও মোটা করা হলো
                                    styles={buildStyles({
                                        pathColor: "#FF6600", // প্রগ্রেস লাইনের রঙ
                                        trailColor: "#222", // ব্যাকগ্রাউন্ড বর্ডার আরও ডার্ক করা হয়েছে
                                        strokeLinecap: "round",
                                    })}
                                />
                                <div className="absolute inset-1 flex items-center justify-center bg-black text-white rounded-full ">
                                    {skill.icon}
                                </div>
                            </div>
                            <p className="text-orange-500 font-bold text-lg mt-2">{skill.percentage}%</p>
                            <p className="text-gray-300 text-sm">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
