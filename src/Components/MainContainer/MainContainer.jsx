// import MainCenter from "./Components/Main-Center/Main-Center"
import MainCenter from "../MainCenter/MainCenter";
import Mainleft from "../Mainleft/Mainleft";
import MainRight from "../MainRight/MainRight";
import SideMenu from "../SideMenu";
// import Navigation from "../Navigation/Navigation";
import { useState } from "react";

export default function MainContainer() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <>
      {/*    

    <div className="w-full h-[100vh] max-w-screen-2xl bg-gray-400 mx-auto fixed">
   
      <div className="flex relative "> */}
      {/* <div className={`${ isSideMenuOpen ? 'hidden' : 'visible'} absolute left-0`}> */}
      {/* <div className= " h-[100vh] absolute z-13 ">
         <SideMenu className="h-[100vh] w-14 "/>
        </div>
        <div className="bg-slate-800   left-0 h-[100vh]  w-[45px] fixed z-10">
          <Mainleft/>
        </div>
        <div className=" h-[100vh] w-[100%] pt-[4rem] mx-auto fixed  overflow-auto"><MainCenter/></div>
        <div className="bg-slate-800   right-0 stikcy z-10 w-[45px] h-[100vh] ">
          <MainRight/>
        </div> */}
      {/* <Navigation toggleSideMenu={toggleSideMenu}/> */}
      {/* </div> */}
      {/*      
    </div> */}

      <div className="w-full h-[100vh]  bg-gray-400 mx-auto  ">
        <div className="">
          <div className="flex relative ">

            <div className=" h-[100vh] fixed z-13 ">
              <SideMenu className="h-[100vh] w-14 " />
            </div>

            <div className="bg-slate-200   left-0 h-[100vh]  w-[44px] fixed z-10">
              <Mainleft />
            </div>

            <div className=" bg-slate-800 h-[100vh] w-[100%] pt-[4rem] mx-auto fixed  flex justify-center items-center">
              <div className="bg-slate-600 h-[95%] w-[95%]  rounded-xl  ">
                {/* <MainCenter/> */}
              </div>
            </div>

            <div className="bg-slate-200   right-0 fixed z-10 w-[45px] h-[100vh] ">
              <MainRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
