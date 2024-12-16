import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Connect = ({ Connectmenu, connectRef }) => {
  return (
    <div
      ref={connectRef}
      className={`fixed border-[4px] border-gray-300 dark:border-gray-700 rounded-2xl z-[11] backdrop-blur-lg bg-white dark:bg-gray-900 text-black dark:text-white shadow-xl bottom-[55px] left-[44px] w-[250px] sm:w-[280px] md:w-[300px] duration-[0.4s] ease-in-out ${
        Connectmenu ? "translate-x-[4%] sm:translate-x-[10%]" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col p-4">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-xl font-semibold px-4 py-2 rounded-t-xl shadow-md text-center">
          Created by Harsh Dahiya
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col mt-3 space-y-4 text-xl font-medium text-center">
          <div className="flex justify-center items-center space-x-2">
            <FaPhone className="text-blue-600 dark:text-blue-400" />
            <p className="text-gray-700 dark:text-gray-300">8349774340</p>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <MdEmail className="text-blue-600 dark:text-blue-400" />
            <p className="text-gray-700 dark:text-gray-300">believeharsh@gmail.com</p>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex justify-center space-x-4 mt-6">
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/believeharsh11/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-button"
            >
              <IoLogoLinkedin />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://github.com/believeharsh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-button"
            >
              <IoLogoGithub />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/bontinue_/ "
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-button"
            >
              <IoLogoInstagram />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.youtube.com/@Bontinue"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-button"
            >
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
