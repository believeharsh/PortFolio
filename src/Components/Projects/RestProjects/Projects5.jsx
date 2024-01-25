import { FaExternalLinkAlt } from "react-icons/fa";

function Projects5() {
  return (
    <>
    <div className="flex  flex-wrap justify-center items-center">
            <div className="dark:bg-slate-900/60 bg-slate-200  shadow-sm dark:shadow-slate-100 rounded-2xl px-2 py-2 border-[1px] flex flex-col max-w-[280px]  mx-1 my-1 dark:hover:bg-slate-900/90">
              <div className="flex justify-between items-center border-b-[1.3px] border-white mb-1 py-1 pb-[8px]">
                <button className="rounded-xl px-4 py-1 dark:bg-slate-900 text-white text-xl dark:hover:bg-slate-700 dark:active:bg-blue-600  border-white border-[0.7px] ml-1 ">Project</button>
                <a href="" className="dark:bg-slate-900 dark:hover:bg-slate-700 dark:active:bg-blue-600 text-white text-xl p-2  rounded-full mr-1 ">
                 <FaExternalLinkAlt/>
                </a>
              </div>
              <div className="max-w-[290px] h-[80px] mx-auto mb-1 mt-1">
                <img src="src\Assets\Pictures\LinkedinBanner.png" className="rounded-xl" alt="" />
              </div>
              <div className="text-white text-xl font-mono border-white border-b-[1.3px] mb-1">Microsys.In </div>
              <div className="text-white text-xl font-mono overflow-hidden ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, rerum!
              </div>

            </div>
          
          </div>
</>
  )
}

export default Projects5
