import { GoProjectSymlink } from "react-icons/go";


function SideMenu({sidebar}) {
  return (
    <>
   
     <div className={`h-full fixed z-13 bg-black dark:bg-white w-[226px] top-[53px] left-[44px]  ${sidebar ? 'translate-x[0%]' : 'translate-x-[-100%] duration-[0.2s] ease-linear '}`}>

     </div>
    </>
  )
}

export default SideMenu
