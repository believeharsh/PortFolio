import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ProjectTile = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="common-project-div">
          <div className="flex justify-between items-center border-b-[1.3px] border-white mb-1 py-1 pb-[8px]">
            <button className="rounded-xl px-4 py-1 dark:bg-slate-900 text-white text-xl dark:hover:bg-slate-700 dark:active:bg-blue-600 border-white border-[0.7px] ml-1 ">
              {props.ProjectName}
            </button>
            <div className="flex justify-center items-center">
            <a
              href={props.LiveLink}
              className="dark:bg-slate-900 dark:hover:bg-slate-700 dark:active:bg-blue-600 text-white text-xl p-2 rounded-full mr-1 "
              target="_blank"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href={props.CodeLink}
              className="dark:bg-slate-900 dark:hover:bg-slate-700 dark:active:bg-blue-600 text-white text-xl p-2 rounded-full mr-1 "
              target="_blank"
            >
              <FaGithub/>
            </a>
            </div>
          
          </div>
          <div className="min-w-[300px] h-[170px] mx-auto mb-2 mt-2">
            <img
              src={`${props.ProjectImg}`}
              className="rounded-xl max-w-full max-h-full  object-cover"
              alt=""
            />
          </div>

          <div className="text-white text-xl font-mono limit-text">
            {props.ProjectDes}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectTile;
