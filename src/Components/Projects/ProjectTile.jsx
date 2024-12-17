import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ProjectTile = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="common-project-div w-full sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[600px] mx-4 mb-6 rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="flex justify-between items-center border-b-[1.3px] border-white mb-1 py-2 px-4">
            <button className="rounded-xl px-4 py-2 bg-blue-500 text-white text-xl hover:bg-blue-600 transition duration-300">
              {props.ProjectName}
            </button>
            <div className="flex justify-center items-center space-x-2">
              <a
                href={props.LiveLink}
                className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href={props.CodeLink}
                className="bg-gray-800 hover:bg-gray-700 text-white text-xl p-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="min-w-full h-[200px] mx-auto mb-2 mt-2">
            <img
              src={props.ProjectImg}
              className="rounded-xl w-full h-full object-cover"
              alt="Project"
            />
          </div>

          {/* Description Section */}
          <div className="text-black dark:text-white text-lg font-mono px-4 pb-4">
            {props.ProjectDes}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTile;




