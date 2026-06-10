import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

function Header() {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // 100px threshold
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isSticky ? "sticky top-0 bg-[#010117]" : "relative"} w-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 py-5 border-b border-b-white/10  z-10`}
    >
      <div className="flex justify-between items-center">
        {/* === Logo === */}
        <a
          href="#"
          className="text-lg sm:text-xl font-medium text-orange-400 uppercase"
        >
          Dev<span className="text-white">Ambassador</span>
        </a>

        {/* === Header Text === */}
        <div className="max-sm:hidden border border-white/10 py-2 px-4 rounded-full">
          <p className="text-white/80">🔥 Ultimate MERN Stack Developer</p>
        </div>

        {/* === Nav Links === */}
        <div className="">
          <div
            className="flex items-center gap-2 max-sm:border-none border border-white/10 py-2 px-3 rounded-md cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <IoClose className="text-xl" />
            ) : (
              <RiMenu3Line className="text-xl" />
            )}
            <span className="max-sm:hidden">Menu</span>
          </div>
          <div
            className={`bg-orange-400 absolute max-sm:top-[76px] top-[82px] w-full left-0 flex justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 text-black font-medium uppercase transition-all overflow-hidden ${menu ? "h-auto py-4" : "h-0 py-0"}`}
          >
            <a
              onClick={() => setMenu(false)}
              href="#"
              className="text-sm sm:text-lg"
            >
              Home
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#about-section"
              className="text-sm sm:text-lg"
            >
              About
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#project-section"
              className="text-sm sm:text-lg"
            >
              Projects
            </a>
            <a
              onClick={() => setMenu(false)}
              href="#"
              className="text-sm sm:text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
