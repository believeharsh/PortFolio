// import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";


function Navigation({click }) {
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
      <header id="MYID" className="shadow fixed z-50 top-0  dark:bg-slate-900/80 pt-[2.5px] pb-[10px] bg-gray-100 bg-opacity-75  w-[100%] dark:backdrop-blur-xl backdrop-blur-3xl ">
        <nav className=" px-3 py-1 ">
          <div className="flex flex-warp justify-between items-center mx-auto pb-3  border-b-[1.5px] border-black dark:border-white">
            <div className="">
              <div className="flex justify-center items-center space-x-4">
                <div className="dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-sm ml-3" id="menuButton ">
                
                  <IoMenu className=" text-4xl text-black dark:text-white " onClick={click} />
                 
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    className="text-black dark:text-white text-2xl font-serif mx-2  px-1 py-1 dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl   "
                    to="/"
                  >
                    <FaHome id="ToggleSideMenu" />
                  </Link>
                  <div className="text-black mx-1 text-lg dark:text-white dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl ">Harsh Dahiya </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className=" text-black dark:text-white text-lg  flex justify-between items-center ">
                <div className="flex justify-center items-center space-x-4">
                  <Link to="/Projects">
                    <li className="   border-black dark:border-white border-[1px] dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl pr-2 pl-2   list-none">
                      <p className="text-black dark:text-white text-lg ">
                        Projects
                      </p>
                    </li>
                  </Link>

                  <Link to="/about">
                    <li className=" border-black dark:border-white border-[1px] dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl pr-2 pl-2  list-none">
                      <p className="text-black dark:text-white text-lg ">
                        Experience
                      </p>
                    </li>
                  </Link>
                </div>
                <div className="dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl ml-4 mr-4">
                  <li className=" list-none " onClick={ToggleTheme}>
                    {Theme === "dark" ? (
                      <MdDarkMode className="text-lg  text-black dark:text-white w-[23px] h-[25px]" />
                    ) : (
                      <CiLight className="text-lg  text-black dark:text-white w-[27px] h-[2r8px] " />
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
