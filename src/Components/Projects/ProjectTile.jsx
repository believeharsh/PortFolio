import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectTile = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                      bg-white dark:bg-slate-900 text-black dark:text-white 
                      rounded-lg shadow-lg overflow-hidden 
                      transition-transform transform hover:scale-95 dark:border dark:border-white 
                      hover:shadow-xl duration-300 ease-in-out p-4">

        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-2 mb-2">
          <button className="text-lg sm:text-xl font-semibold dark:text-white text-black">
            {props.ProjectName}
          </button>
          <div className="flex space-x-2">
            {props.LiveLink && (
              <a
                href={props.LiveLink}
                className="bg-gray-800 hover:bg-gray-700 text-white text-lg p-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {props.CodeLink && (
              <a
                href={props.CodeLink}
                className="bg-gray-800 hover:bg-gray-700 text-white text-lg p-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 mx-auto mb-3">
          <img
            src={props.ProjectImg}
            className="rounded-lg w-full h-full object-cover"
            alt="Project"
          />
        </div>

        {/* Description Section */}
        <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-mono px-2 pb-2 line-clamp-2">
          {props.ProjectDes}
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
