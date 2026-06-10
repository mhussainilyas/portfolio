import React from "react";
import Button from "../utilities/Button";
import aboutImg from "../assets/about-img.webp";
import { FcBriefcase } from "react-icons/fc";

function About() {
  return (
    <section
      id="about-section"
      className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 py-16 sm:py-24 border-y border-white/10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 lg:gap-30">
        <div className="relative">
          <img
            src={aboutImg}
            alt="about image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-shadow-[0_0_1rem_rgba(255,255,255,0.3)]">
            About Me
          </h2>

          <div className="w-26 sm:w-32 bg-linear-to-r from-orange-400 to-orange-400/5 h-1 rounded-full my-10"></div>

          <p className="text-white/60">
            I'm a passionate MERN Stack Developer with expertise in building
            modern, responsive, and scalable web applications. I specialize in
            MongoDB, Express.js, React.js, and Node.js, transforming ideas into
            efficient digital solutions. My focus is on writing clean,
            maintainable code and creating seamless user experiences that
            deliver real value.
          </p>

          <p className="text-white/60 mt-6 mb-10">
            With a strong understanding of both front-end and back-end
            development, I enjoy solving complex problems, optimizing
            application performance, and continuously learning new technologies
            to stay ahead in the ever-evolving web development landscape.
          </p>

          <Button
            link="http://localhost:5173/#project-section"
            icon={<FcBriefcase />}
          >
            View My Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default About;
