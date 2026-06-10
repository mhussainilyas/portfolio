import React from "react";

function Button({ children, link, icon }) {
  return (
    <a
      href={link}
      id="btn"
      className="bg-orange-400 text-lg font-semibold transition-all duration-400 text-white hover:text-black rounded-full cursor-pointer flex items-center justify-start gap-3 pr-6 w-fit"
    >
      <span className="w-12 aspect-square flex items-center justify-center bg-white rounded-full text-black text-xl">
        {icon}
      </span>
      <span>{children}</span>
    </a>
  );
}

export default Button;
