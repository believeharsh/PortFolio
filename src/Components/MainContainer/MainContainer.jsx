import { Outlet } from "react-router-dom";
import Mainleft from "../Mainleft/Mainleft";
import MainRight from "../MainRight/MainRight";
import SideMenu from "../SideMenu";


export default function MainContainer() {
 
  return (
    <>


      <div className="w-[100vw]  mx-auto fixed h-[100vh] overflow-auto bg-slate-900 ">

        <div className="flex ">
          <div className=" h-[100vh] fixed z-13 ">
            <SideMenu className="h-[100vh] w-14 " />
          </div>

          <div className="bg-slate-800   left-0 h-[100vh]  w-[44px] fixed z-10">
            <Mainleft />
          </div>
          <div className="bg-slate-700 rounded-xl w-[calc(100%-49px-49px)]  relative mx-auto top-[62px] px-2 py-2 mb-1">
            <div className="">

              <Outlet />

            </div>
          </div>

          <div className="bg-slate-800  right-0 fixed z-10 w-[44px] h-[100vh] ">
            <MainRight />
          </div>
        </div>

      </div>
    </>
  );
}
