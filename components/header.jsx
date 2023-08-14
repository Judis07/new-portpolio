"use client";
import scrollTo from "@/utils/scrollTo";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h2 className="font-bold text-2xl">Arvind M.</h2>

      <nav>
        <ul className="flex gap-8 font-bold">
          <li className="cursor-pointer ">
            <span className="relative before:block before:absolute before:top-[17px] before:h-[5px]  before:-inset-1  before:bg-[#A8B4FF] relative inline-block">
              <span
                className="relative"
                onClick={() => scrollTo("work-section")}
              >
                my work
              </span>
            </span>
          </li>
          <li className="cursor-pointer hover:underline">
            <span className="relative before:block before:absolute before:top-[17px] before:h-[5px]  before:-inset-1  before:bg-[#A8B4FF] relative inline-block">
              <span
                className="relative"
                onClick={() => scrollTo("connect-section")}
              >
                get in touch
              </span>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
