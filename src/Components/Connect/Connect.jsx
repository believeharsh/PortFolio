import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Connect(props) {
  return (
    <>
      <div
        className={`fixed border-[2px] border-blue-700  rounded-2xl z-[11] backdrop-blur-2xl bg-slate-900/30  dark:bg-slate-900/30  backdrop-3xl w-[226px] bottom-[55px] left-[44px]  ${
          props.Connectmenu
            ? "translate-x-[15%]"
            : "translate-x-[-100%] duration-[0.4s] ease-in-out "
        }  `}
      >
        <div className="">
          <div className="flex flex-col text-white ">
            <div className="text-center text-2xl  ">
              Created by Harsh Dahiya{" "}
            </div>
            <div className="flex flex-col mx-auto mt-1 text-xl">
              <div className="flex">
                <p className="mr-1">
                  <FaPhone />
                </p>
                <p>8349774340</p>
              </div>
              <div className="flex">
                <p className="mr-1">
                  <MdEmail />
                </p>
                <p>believeharsh@gmail.com</p>
              </div>
              <div></div>
            </div>
            <div className="flex mx-auto text-2xl mt-2">
              <div className="mr-2">
                <IoLogoLinkedin />
              </div>
              <div className="mr-2">
                <IoLogoGithub />
              </div>
              <div className="mr-2">
                <IoLogoInstagram />
              </div>
              <div className="mr-2">
                <IoLogoYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
