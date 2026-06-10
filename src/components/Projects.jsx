import React from "react";
import workImg from "../assets/work-img.webp";
import { FaGithub } from "react-icons/fa";
import Button from "../utilities/Button";

function Projects() {
  return (
    <section
      id="project-section"
      className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 py-16 border-t border-white/10"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-shadow-[0_0_1rem_rgba(255,255,255,0.3)]">
          My Work
        </h2>

        <div className="w-30 sm:w-42 bg-linear-to-r from-orange-400/5 via-orange-400 to-orange-400/5 h-1 rounded-full mt-10 max-lg:mb-16 mb-20"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center max-sm:gap-16 gap-20">
          <div className="flex flex-col items-center max-sm:order-2">
            <h2 className="text-7xl lg:text-9xl">
              <FaGithub />
            </h2>
            <h3 className="text-4xl lg:text-5xl font-normal mt-8">Github Profile</h3>
            <p className="my-6 max-w-96 text-center leading-7 text-white/60">
              Want to see what I've built? Visit my GitHub profile and explore
              my projects! 🚀
            </p>
            <Button link="https://github.com/mhussainilyas" icon={<FaGithub />}>
              Github Link
            </Button>
          </div>
          <div className="relative">
            <img src={workImg} alt="work image" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
