// import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

function Navigation() {


  return (
    <>
      <header className="shadow sticky z-50 top-0 bg-slate-900 pt-[2.5px] pb-[10px]">
        <nav className="pr-[10px] pl-[10px]">
          <div className="flex flex-warp justify-between items-center border-b-[1.7px] border-white ">
            <div className="">
              <ul className="text-white text-lg font-serif flex justify-between items-center py-1 ">
                <li className="pr-[15px]">
                <IoMenu className=" text-3xl" />
                </li>
                <li className="mx-1">Developer</li>
                
              </ul>
            </div>

            <div className="">
              <ul className="text-white text-lg font-serif flex justify-between items-start " >
                <li className="mx-1 pr-5 text-7xl">
                  <MdDarkMode className="text-lg text-white" />
                </li>
               
              </ul>
            </div>
          </div>

        </nav>

      </header>




    </>



  )
}

export default Navigation
