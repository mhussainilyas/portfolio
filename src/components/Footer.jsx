import React from "react";
import {
  FaWhatsapp,
  FaTiktok,
  FaFacebookF,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa";
import { MdOutlineMail, MdLocalPhone } from "react-icons/md";

function Footer() {
  const socialIcons = [
    { icon: <FaWhatsapp />, link: "tel:03020133320" },
    { icon: <FaGithub />, link: "https://github.com/mhussainilyas" },
    {
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@dream_coder_07?_r=1&_t=ZS-975R2rZR0gi",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/17emymJ6Bn/",
    },
  ];

  return (
    <footer className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 max-sm:py-10 py-16 bg-[#010117] border-y border-white/10">
      <div className="flex flex-col items-center">
        <a
          href="#"
          className="text-lg sm:text-xl font-medium text-orange-400 uppercase"
        >
          Dev<span className="text-white">Ambassador</span>
        </a>

        <div className="mt-8 flex items-center max-sm:gap-7 gap-14">
          <a href="#" className="text-sm sm:text-lg hover:text-orange-400">
            Home
          </a>
          <a
            href="#about-section"
            className="text-sm sm:text-lg hover:text-orange-400"
          >
            About
          </a>
          <a
            href="#project-section"
            className="text-sm sm:text-lg hover:text-orange-400"
          >
            Projects
          </a>
          <a href="#" className="text-sm sm:text-lg hover:text-orange-400">
            Contact
          </a>
        </div>

        <div className="flex items-center max-sm:gap-4 gap-8 mt-8">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="w-10 aspect-square border border-white/10 flex justify-center items-center rounded-full hover:bg-orange-400 cursor-pointer hover:text-black"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="mt-8 flex max-sm:flex-col items-center gap-8">
          <div className="flex items-center gap-2 hover:text-orange-400">
            <MdOutlineMail />
            <a href="mailto:hussainbscs2024@gmail.com">
              hussainbscs2024@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-400">
            <MdLocalPhone />
            <a href="tel:03020133320">+92 302 0133320</a>
          </div>
        </div>

        <div className="w-md h-[1px] my-8 bg-white/10"></div>

        <div className="flex items-center gap-2 max-sm:text-sm">
          <FaRegCopyright />
          <span>2026 - DevAmbassador. all rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
