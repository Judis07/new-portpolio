"use client";

import scrollTo from "@/utils/scrollTo";

const Button = () => {
  return (
    <button
      onClick={() => scrollTo("work-section")}
      className="bg-black text-white py-4 px-8 font-bold"
    >
      see my work
    </button>
  );
};

export default Button;
