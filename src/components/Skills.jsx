import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import { FaReact, FaNodeJs, FaSass, FaGitAlt } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  const skills = [
    { icon: <IoLogoJavascript />, text: "Javascript", color: "text-amber-400" },
    { icon: <SiTypescript />, text: "Typescript", color: "text-blue-500" },
    { icon: <FaReact />, text: "React", color: "text-blue-600" },
    { icon: <RiNextjsLine />, text: "Next.js", color: "text-white" },
    { icon: <FaNodeJs />, text: "Node.js", color: "text-green-600" },
    { icon: <SiExpress />, text: "Express.js", color: "text-white" },
    { icon: <SiMongodb />, text: "MongoDB", color: "text-green-900" },
    { icon: <FaSass />, text: "Sass/Scss", color: "text-pink-500" },
    { icon: <RiTailwindCssFill />, text: "Tailwind", color: "text-blue-400" },
    { icon: <FaGitAlt />, text: "Git", color: "text-orange-600" },
  ];
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 py-16">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-shadow-[0_0_1rem_rgba(255,255,255,0.3)]">
          My Experties
        </h2>

        <div className="w-30 sm:w-42 bg-linear-to-r from-orange-400/5 via-orange-400 to-orange-400/5 h-1 rounded-full mt-10 max-lg:mb-16 mb-20"></div>

        <div className="flex flex-wrap justify-center gap-10 sm:gap-16 lg:gap-20 max-w-4xl">
          {skills.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <span className={`text-6xl lg:text-7xl ${item.color}`}>
                {item.icon}
              </span>
              <span className="max-sm:text-sm text-white/80">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
