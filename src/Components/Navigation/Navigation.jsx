// import React from 'react'
import { MdDarkMode, MdLight } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navigation({ click }) {
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
      <header id="MYID" className="navbar-header" >
        <nav className=" px-3 py-1 ">
          <div className="navbar-parent-div">
            <div className="">
              <div className="flex justify-center items-center space-x-4">
                <div
                  className="nav-btn-style p-1"
                  id="menuButton "
                >
                  <IoMenu
                    className=" text-4xl text-black dark:text-white "
                    onClick={click}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Link
                    className="nav-btn-style text-2xl font-serif mx-2 rounded-full p-2 "
                    to="/"
                  >
                    <FaHome className="" />
                  </Link>
                  <div className="nav-btn-style mx-1 text-2xl rounded-xl px-3 py-1">
                    Harsh Dahiya{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className=" text-black dark:text-white text-lg  flex justify-between items-center ">
                <div className="flex justify-center items-center space-x-4 ml-3 sm:ml-0">
                  <Link to="/Projects">
                    <li className="nav-btn-style rounded-xl px-2 py-1 list-none ">
                      <p className="text-black dark:text-white text-xl ">
                        Projects
                      </p>
                    </li>
                  </Link>

                  <Link to="/experience">
                    <li className=" nav-btn-style rounded-xl px-2 py-1 list-none">
                      <p className="text-black dark:text-white text-xl ">
                        Experience
                      </p>
                    </li>
                  </Link>
                </div>
                <div className="nav-btn-style rounded-full ml-4 mr-4">
                  <li className=" list-none p-2 " onClick={ToggleTheme}>
                    {Theme === "dark" ? (
                      <MdDarkMode className="Theme-Btn" />
                    ) : (
                      <MdLightMode className="Theme-Btn" />
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
