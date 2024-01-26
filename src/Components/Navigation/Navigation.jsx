// import React from 'react'
import { MdDarkMode, MdLight } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function Navigation({click }) {
  const [Theme, setTheme] = useState("dark");

  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [Theme]);

  const ToggleTheme = (event) => {
    event.preventDefault();
    setTheme(Theme === "dark" ? "light" : "dark");


  };


  

  return (
    <>
      <header id="MYID" className="shadow fixed z-50 top-0  dark:bg-slate-900/80 pt-[2.5px] pb-[10px] bg-white bg-opacity-75  w-[100%] dark:backdrop-blur-sm backdrop-blur-3xl ">
        <nav className=" px-3 py-1 ">
          <div className="flex flex-warp justify-between items-center mx-auto pb-2  border-b-[1.5px] border-black dark:border-white">
            <div className="">
              <div className="flex justify-center items-center space-x-4">
                <div className="dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-full ml-3 hover:bg-gray-300 active:bg-blue-700 p-1" id="menuButton ">
                
                  <IoMenu className=" text-4xl text-black dark:text-white " onClick={click} />
                 
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    className="text-black dark:text-white text-2xl font-serif mx-2  dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-full hover:bg-gray-300 active:bg-blue-700 p-2 "
                    to="/"
                  >
                    <FaHome id="ToggleSideMenu " className="" />
                  </Link>
                  <div className="text-black mx-1 text-2xl dark:text-white dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl hover:bg-gray-300  px-3 py-2">Harsh Dahiya </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className=" text-black dark:text-white text-lg  flex justify-between items-center ">
                <div className="flex justify-center items-center space-x-4">
                  <Link to="/Projects">
                    <li className=" dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl px-2 py-1   list-none hover:bg-gray-300 active:bg-blue-700">
                      <p className="text-black dark:text-white text-xl ">
                        Projects
                      </p>
                    </li>
                  </Link>

                  <Link to="/about">
                    <li className=" dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl px-2 py-1  list-none hover:bg-gray-300 active:bg-blue-700">
                      <p className="text-black dark:text-white text-xl ">
                        Experience
                      </p>
                    </li>
                  </Link>
                </div>
                <div className="dark:active:bg-blue-800 dark:hover:bg-slate-800 hover:bg-gray-300 active:bg-blue-700 rounded-full   ml-4 mr-4">
                  <li className=" list-none p-2 " onClick={ToggleTheme}>
                    {Theme === "dark" ? (
                      <MdDarkMode className="  text-black dark:text-white  text-3xl" />
                    ) : (
                      <MdLightMode className="  text-black dark:text-white  text-3xl " />
                    )}

                  </li>

                </div>
              </div>
            </div>
          </div>
        </nav>
     
      </header>

    </>
  );
}

export default Navigation;
