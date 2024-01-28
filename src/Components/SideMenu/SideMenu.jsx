import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";



function SideMenu(props) {
  return (
    <>
   
     <div className={`h-full fixed z-[11] backdrop-blur-2xl bg-slate-900/30  dark:bg-slate-900/30  backdrop-3xl w-[226px] top-[53px] left-[44px]  ${props.sidebar ? 'translate-x[0%]' : 'translate-x-[-100%] duration-[0.2s] ease-linear '}`} ref={props.RefSideMenu}>
        <div className="flex flex-col  items-center justify-center space-y-3 mt-8 sm:mt-12 p-1">
          <div className="">
            <img src="/assets/CurrentProfile.jpeg"  className="rounded-full xl:h-[100px] xl:w-[100px] md:h-[80px] md:w-[80px] sm:w-[50px] sm:h-[50px] w-[50px] h-[50px]  " alt="" />
          </div>
          <div className="dark:text-white text-white font-mono xl:text-xl text-center  md:text-[12px] sm:text-[8px]">
            <p>Learning Frontend Development | Coding keen | Self Development content | React | JS | Learner🚀</p>
          </div>
          <div className="flex flex-col justify-center item-center space-y-2">
            <div className="flex space-x-1 dark:text-white text-black dark:bg-slate-800 shadow-sm dark:shadow-white shadow-black  px-6 w-[180px] py-1 rounded-xl items-center pl-[55px] md:pl-[42px] sm:pl-[55px]">
              <IoLogoLinkedin  className="xl:text-2xl md:text-xl" alt="" 
            
              />
              <p className=" md:text-sm xl:text-2xl sm:text-[10px] ">LinkedIn</p>
            
            </div>
            <div className="flex space-x-1 dark:text-white text-black dark:bg-slate-800 shadow-sm dark:shadow-white shadow-black  px-6 w-[180px] py-1 rounded-xl items-center pl-[55px] md:pl-[42px] ">
              <IoLogoGithub  className="xl:text-2xl md:text-xl" alt="" 
            
              />
              <p className=" md:text-sm xl:text-2xl sm:text-[10px] ">github</p>
            
            </div>
            <div className="flex space-x-1 dark:text-white text-black dark:bg-slate-800 shadow-sm dark:shadow-white shadow-black  px-6 w-[180px] py-1 rounded-xl items-center pl-[55px] md:pl-[42px]">
              <IoLogoInstagram  className="xl:text-2xl md:text-xl" alt="" 
            
              />
              <p className=" md:text-sm xl:text-2xl sm:text-[10px] text-center ">Instagram</p>
            
            </div>
            <div className="flex space-x-1 dark:text-white text-black dark:bg-slate-800 shadow-sm dark:shadow-white shadow-black  px-6 w-[180px] py-1 rounded-xl items-center pl-[55px] md:pl-[42px]">
              <IoLogoYoutube className="xl:text-2xl md:text-xl" alt="" 
            
              />
              <p className=" md:text-sm xl:text-2xl sm:text-[10px]">YouTube</p>
            
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
