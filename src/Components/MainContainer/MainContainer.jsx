import { Outlet } from "react-router-dom";
import Mainleft from "../Mainleft/Mainleft";
import MainRight from "../MainRight/MainRight";
import SideMenu from "../SideMenu";


export default function MainContainer() {

  return (
    <>


      <div className=" overflow-auto  bg-white dark:bg-slate-900 h-full relative  ">

        <div className="flex ">
          <div className=" h-full fixed z-13 dark:bg-white w-[226px] top-[53px] left-[44px] ">
            <SideMenu className="h-[100vh] w-14 " />
          </div>

          <div className=" bg-blue-200  dark:bg-slate-900 left-0 h-[1750px]  w-[44px] fixed z-10">
            <Mainleft />
          </div>
          <div className=" bg-gray-100  dark:bg-gradient-to-r from-gray-800 via-slate-9j00 to-gray-800 rounded-xl w-[calc(100%-49px-49px)]  mx-auto mt-[62px] px-2 py-2 mb-1 border-[1.5px] dark:border-white border-black ">
            <div className="">

              <Outlet />

            </div>
          </div>

          <div className=" bg-blue-200 dark:bg-slate-900  right-0 fixed z-10 w-[44px] h-[1750px] ">
            <MainRight />
          </div>
        </div>

      </div>
    </>
  );
}
