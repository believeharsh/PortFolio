import { GoProjectSymlink } from "react-icons/go";
// import pictures from '../Components/Pictures/Profile.png'



function SideMenu({sidebar}) {
  return (
    <>
   
     <div className={`h-full fixed z-13 backdrop-blur-lg bg-black dark:bg-slate-900/30  backdrop-3xl w-[226px] top-[53px] left-[44px]  ${sidebar ? 'translate-x[0%]' : 'translate-x-[-100%] duration-[0.2s] ease-linear '}`}>
        <div className="flex flex-col  items-center justify-center space-y-3 mt-8 p-1">
          <div>
            <img src="" className="rounded-full " alt="" />
          </div>
          <div className="dark:text-black text-black font-mono text-xl text-center">
            <p>Learning Frontend Development | Coding keen | Self Development content | React | JS | Learner🚀</p>
          </div>
          <div className="flex flex-col justify-center item-center space-y-2">
            <div className="flex space-x-1 space-y-2 bg-blue-700 px-11 py-1 rounded-xl ">
              <img src="https://placehold.jp/30x30.png" className="rounded-full" alt="" 
            
              />
              <p className="text-thin text-xl text-black">LinkedIn</p>
            
            </div>
            <div className="flex space-x-1 space-y-2 bg-blue-700 px-11 py-1 rounded-xl ">
              <img src="https://placehold.jp/30x30.png" className="rounded-full" alt="" 
            
              />
              <p className="text-thin text-xl text-black">github</p>
            
            </div>
            <div className="flex space-x-1 space-y-2 bg-blue-700 px-11 py-1 rounded-xl ">
              <img src="https://placehold.jp/30x30.png" className="rounded-full" alt="" 
            
              />
              <p className="text-thin text-xl text-black">Instagram</p>
            
            </div>
            <div className="flex space-x-1 space-y-2 bg-blue-700 px-11 py-1 rounded-xl ">
              <img src="https://placehold.jp/30x30.png" className="rounded-full" alt="" 
            
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
