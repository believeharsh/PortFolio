// import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
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
      <header className="shadow fixed z-50 top-0 dark:bg-slate-900 pt-[2.5px] pb-[10px] bg-white w-[100%]">
        <nav className=" px-3 py-1 ">
          <div className="flex flex-warp justify-between items-center mx-auto pb-3 max-w-screen-2xl border-b-[1.5px] border-black dark:border-white">
            <div className="">
              <div className="flex justify-center items-center ">
                <div className="pr-[15px]">
                  <IoMenu className=" text-4xl text-black dark:text-white  hover:bg-slate-700 hover:rounded-xl  " />
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    className="text-black dark:text-white text-2xl font-serif mx-2 hover:bg-slate-700 px-1 py-1   hover:rounded-sm "
                    to="/"
                  >
                    <FaHome />
                  </Link>
                  <div className="text-black mx-1 text-lg dark:text-white ">Harsh Dahiya </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className=" text-black dark:text-white text-lg  flex justify-between items-center ">
                <div className="flex justify-center items-center">
                  <Link to="/Projects">
                    <li className="   border-black dark:border-white border-[1px] rounded-xl pr-2 pl-2 mx-2  list-none">
                      <p className="text-black dark:text-white text-lg ">
                        Projects
                      </p>
                    </li>
                  </Link>

                  <Link to="/about">
                    <li className=" border-black dark:border-white border-[1px] rounded-xl pr-2 pl-2 mx-2 list-none">
                      <p className="text-black dark:text-white text-lg ">
                        About
                      </p>
                    </li>
                  </Link>
                </div>
                <div className="">
                  <li className="mx-1 pr-5 list-none " onClick={ToggleTheme}>
                    {Theme === "dark" ? (
                      <MdDarkMode className="text-lg  text-black dark:text-white w-[23px] h-[25px]" />
                    ) : (
                      <CiLight className="text-lg  text-black dark:text-white w-[27px] h-[28px] " />
                    )}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <div className="max-w-screen-2xl border-b-[1px] dark:border-white border-black  "></div> */}
      </header>
    </>
  );
}

export default Navigation;
