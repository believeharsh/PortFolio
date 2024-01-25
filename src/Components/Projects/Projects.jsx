// import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

import LatestProjectsHeader from "./LatestProjects/LatestProjectsHeader";
import LatestProject2 from "./LatestProjects/LatestProject2";
import LatestProject3 from "./LatestProjects/LatestProject3";
import LatestProject1 from "./LatestProjects/LatestProject1";
import RestProjectsHeader from "./RestProjects/RestProjectsHeader";
import Projects4 from "./RestProjects/Projects4";
import Projects5 from "./RestProjects/Projects5";
import Projects6 from "./RestProjects/Projects6";
import Projects7 from "./RestProjects/Projects7";
import Projects8 from "./RestProjects/Projects8";

function Projects() {
  return (
    <>
    

      <div className="">
        <div className="">

          <div className="flex flex-col mb-6">
             <LatestProjectsHeader/>
             <div className="flex justify-center items-center px-3 py-2 flex-wrap ">
              <LatestProject1/>
             <LatestProject2/>
           <LatestProject3/>
             </div>
          </div>
          <div className="flex flex-col mb-6">
              <RestProjectsHeader/>
              <div className="flex justify-center items-center px-3 py-2 flex-wrap ">
               <Projects4/>
               <Projects5/>
               <Projects6/>
               <Projects7/>
               <Projects8/>

              </div>
          </div>

        </div>
      </div>



    </>
  )
}

export default Projects;
