import React from "react";
import Button from "../utilities/Button";
import { IoLinkSharp } from "react-icons/io5";

function Hero() {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 py-16 max-lg:min-h-auto min-h-[calc(100vh_-_83px)] flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <p className="text-sm text-white/80">@frontendzone</p>

        <h4 className="text-xl sm:text-2xl mt-4">
          <span className="text-orange-400">MERN</span> Stack Developer
        </h4>

        <h1 className="text-5xl sm:text-6xl max-sm:leading-18 font-bold mt-6 mb-10 text-shadow-[0_0_1rem_rgba(255,255,255,0.3)]">
          Hye! 👋🏻 I'm Hussain
        </h1>

        <div className="w-54 bg-linear-to-r from-orange-400/5 via-orange-400 to-orange-400/5 h-1 rounded-full mb-10 mx-auto"></div>

        <Button
          link={"http://localhost:5173/#contact-section"}
          icon={<IoLinkSharp />}
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
}

export default Hero;
