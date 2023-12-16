// import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { DiReact } from "react-icons/di";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [Theme, setTheme] = useState("dark");

  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [Theme]);

  const ToggleTheme = () => {
    setTheme(Theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="shadow sticky z-50 top-0 dark:bg-slate-900 pt-[2.5px] pb-[10px] bg-white">
        <nav className="pr-[10px] pl-[10px]">
          <div className="flex flex-warp justify-between items-center border-b-[1.7px] dark:border-white w-[92vw] m-auto ">
            <div className="">
              <ul className=" text-black dark:text-white text-lg font-serif flex justify-between items-center py-1 ">
                <li className="pr-[15px]">
                  <IoMenu className=" text-3xl" />
                </li>
                <div className="flex justify-center items-center">
                  <span className="text-2xl ">
                    <DiReact />
                  </span>
                  <li className="mx-1 text-2xl font- "> Developer</li>
                </div>
              </ul>
            <Link className="text-white text-2xl font-serif" to="/" >
              Home
            </Link>
            </div>

            <div className="">
            
              <ul className=" text-black dark:text-white text-lg font-serif flex justify-between items-center ">
              <li className="   border-black dark:border-white border-[1px] rounded-xl pr-2 pl-2 mr-2">
                <ul className="text-black dark:text-white text-lg font-serif ">Projects</ul>
              </li>
                <li className="mx-1 pr-5 " onClick={ToggleTheme}>
                  {Theme === "dark" ? (
                    <MdDarkMode className="text-lg  text-black dark:text-white w-[23px] h-[25px]" />
                  ) : (
                    <CiLight className="text-lg  text-black dark:text-white w-[27px] h-[28px] " />
                  )}
                </li>
                <Link to="/about">
                <p className="text-white text-2xl p-2">About</p>

                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
