import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

function Connect(props) {
  return (
    <>
      <div
        className={`fixed border-[4px] border-blue-700  rounded-2xl z-[11] backdrop-blur-2xl bg-white text-black  backdrop-3xl  bottom-[55px] left-[44px] w-[250px]  sm:w-[280px] md:w-[300px]  ${
          props.Connectmenu
            ? "translate-x-[4%] sm:translate-x-[10%]"
            : "translate-x-[-100%] duration-[0.4s] ease-in-out "
        }  `}
      >
        <div className="">
          <div className="flex flex-col ">
            <div className="mx-auto bg-blue-800 px-[15px] pb-[5px] text-2xl rounded-b-xl text-white  ">
              Created by Harsh Dahiya
            </div>
            <div className="flex flex-col mx-auto mt-1 text-xl">
              <div className="flex justify-center items-center text-xl mt-1">
                <p className="mr-1">
                  <FaPhone />
                </p>
                <p>8349774340</p>
              </div>
              <div className="flex justify-center items-center text-xl mt-1">
                <p className="mr-1">
                  <MdEmail />
                </p>
                <p>believeharsh@gmail.com</p>
              </div>
              <div></div>
            </div>
            <div className="flex mx-auto text-[25px] mt-4 ">
              <div className="mr-4  rounded-full border-[1px] border-cyan-400 hover:bg-slate-400 p-2 ">
                <a href="https://www.linkedin.com/in/believeharsh11/" target="_blank" ><IoLogoLinkedin /></a>
               
              </div>
              <div className="mr-4 rounded-full border-[1px] border-cyan-400 hover:bg-slate-400 p-2">
                <a href="https://github.com/believeharsh" target="_blank" ><IoLogoGithub /></a>
              </div>
              <div className="mr-4 rounded-full border-[1px] border-cyan-400 hover:bg-slate-400 p-2">
                <a href="https://www.instagram.com/bontinue_/  " target="_blank" > <IoLogoInstagram /></a>

               
              </div>
              <div className="mr-4 rounded-full border-[1px] border-cyan-400 hover:bg-slate-400 p-2">
                <a href="https://www.youtube.com/@Bontinue" target="_blank" ><IoLogoYoutube /></a>

        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
