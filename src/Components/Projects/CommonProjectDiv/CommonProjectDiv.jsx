import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

function CommonProjectDiv(props) {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="common-project-div">
          <div className="flex justify-between items-center border-b-[1.3px] border-white mb-1 py-1 pb-[8px]">
            <button className="rounded-xl px-4 py-1 dark:bg-slate-900 text-white text-xl dark:hover:bg-slate-700 dark:active:bg-blue-600 border-white border-[0.7px] ml-1 ">
              {props.ProjectName}
            </button>
            <a
              href={props.LiveLink}
              className="dark:bg-slate-900 dark:hover:bg-slate-700 dark:active:bg-blue-600 text-white text-xl p-2 rounded-full mr-1 "
              target='_blank'
            >
              <FaExternalLinkAlt />
            </a>
          </div>
          <div className="max-w-[260px] h-[80px] mx-auto mb-1 mt-1">
            <img
              src={`${props.ProjectImg}`}
              className="rounded-xl max-w-full max-h-full  object-cover"
              alt=""
            />
          </div>
          <div className="text-white text-xl font-mono overflow-hidden text-ellipsis whitespace-nowrap" >
            {props.ProjectDes}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonProjectDiv;