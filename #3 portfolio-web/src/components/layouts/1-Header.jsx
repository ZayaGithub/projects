import { useState, useEffect } from "react";

export const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      console.log("hello");
    }
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="dark:bg-black">
      <div className="m-auto container sm:px-[80px] sm:py-[16px]">
        <div className="sm:px-[32px] sm:flex w-320 items-center justify-between">
          <div className="pl-8 font-bold text-[28px] flex justify-between items-center">
            {"<SS/>"}
            <img className="items-end sm:hidden cursor-pointer" src="menu.png" alt="" />
          </div>
          <ul className="sm:flex gap-6 items-center text-[16px] pr-8 hidden">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Work</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">Contact</li>
            <img
              onClick={() => setDarkMode((prevState) => !prevState)}
              src="/sun.png"
              alt=""
              className="p-1.5 ml-6 cursor-pointer dark:hidden"
            />
            <img
              onClick={() => setDarkMode((prevState) => !prevState)}
              src="moon.png"
              alt=""
              className="p-1.5 ml-6 cursor-pointer sm:hidden dark:block"
            />
            <button className="dark:bg-white dark:text-black bg-black text-white py-1.5 px-4 rounded-xl w-[136px] text-[16px]">
              Download CV
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
