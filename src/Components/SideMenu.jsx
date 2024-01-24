import { GoProjectSymlink } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";



function SideMenu({sidebar}) {
  return (
    <>
   
     <div className={`h-full fixed z-13 backdrop-blur-lg bg-slate-900/30  dark:bg-slate-900/30  backdrop-3xl w-[226px] top-[53px] left-[44px]  ${sidebar ? 'translate-x[0%]' : 'translate-x-[-100%] duration-[0.2s] ease-linear '}`}>
        <div className="flex flex-col  items-center justify-center space-y-3 mt-8 p-1">
          <div>
            <img src="\src\Assets\Pictures\Profile2.png"  className="rounded-full h-[100px] w-[100px] " alt="" />
          </div>
          <div className="dark:text-white text-white font-mono text-xl text-center">
            <p>Learning Frontend Development | Coding keen | Self Development content | React | JS | Learner🚀</p>
          </div>
          <div className="flex flex-col justify-center item-center space-y-2">
            <div className="flex space-x-1 space-y-2 bg-blue-500 px-11 py-1 rounded-xl mx-auto items-center ">
              <IoLogoLinkedin className="text-2xl" alt="" 
            
              />
              <p className="text-thin text-xl text-black">LinkedIn</p>
            
            </div>
            <div className="flex space-x-1 space-y-2 bg-blue-500 px-11 py-1 rounded-xl justify-center mx-auto  items-center ">
              <IoLogoGithub  className="rounded-full" alt="" 
            
              />
              <p className="text-thin text-xl text-black">github</p>
            
            </div>
            <div className="flex space-x-1 space-y-2 bg-blue-500 px-11 py-1 rounded-xl justify-center mx-auto  items-center">
              <IoLogoInstagram  className="rounded-full" alt="" 
            
              />
              <p className="text-thin text-xl text-black">Instagram</p>
            
            </div>
            <div className="flex space-x-1 space-y-2 bg-blue-500 px-11 py-1 rounded-xl mx-auto items-center ">
              <IoLogoYoutube className="rounded-full" alt="" 
            
              />
              <p className="text-thin text-xl text-black">YouTube</p>
            
            </div>
       
          </div>
          <div >

          </div>
          <div>

          </div>
        </div>

     </div>
    </>
  )
}

export default SideMenu
