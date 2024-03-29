import { Outlet } from "react-router-dom";
import Mainleft from "../Mainleft/Mainleft";
import MainRight from "../MainRight/MainRight";
import SideMenu from "../SideMenu/SideMenu";
import { useState, useEffect, useRef } from "react";
import Navigation from "../Navigation/Navigation";
import Connect from "../Connect/Connect";

export default function MainContainer() {
  const [sidebar, setSidebar] = useState(false);
  const [CenterBlur, setCenterBlur] = useState(false);
  const [ConnectMenu, setConnectMenu] = useState(false);

  const RefSideMenu = useRef();

  const ToggleSideBar = (event) => {
    event.preventDefault();
    setSidebar(!sidebar);
    setCenterBlur(!CenterBlur);
  };

  const ToggleConnect = (event) => {
    event.preventDefault();
    setConnectMenu(!ConnectMenu);
  };

  useEffect(() => {
    const CloseSideBar = (e) => {
      if (!RefSideMenu.current.contains(e.target)) {
        setSidebar(false);
        console.log("hello");
      }
    };
    document.addEventListener("click", CloseSideBar);
    return document.removeEventListener("click", CloseSideBar);
  });

  return (
    <>
      <Navigation click={ToggleSideBar} />

      <div className={` bg-white dark:bg-slate-900 h-full relative  `}>
        <div className="flex ">
          <div className="">
            <SideMenu sidebar={sidebar} RefSideMenu={RefSideMenu} />
          </div>
          <div className="">
            <Connect Connectmenu={ConnectMenu} />
          </div>

          <div className=" bg-white  dark:bg-slate-900 left-0 h-[1750px]  w-[44px] fixed z-[11] dark:shadow-sm dark:shadow-slate-100 ">
            <Mainleft ToggleConnect={ToggleConnect} />
          </div>
          <div
            className={`  bg-white  dark:bg-gradient-to-r from-gray-800 via-slate-900 to-gray-800 rounded-xl w-[calc(100%-49px-49px)] mt-[90px] sm:mt-[55px] mx-auto  px-2 py-2 mb-1 border-[1.5px] dark:border-white  ${
              CenterBlur ? "blur-sm z-[10] overflow-hidden" : ""
            }`}
          >
            <div className="">
              <Outlet />
            </div>
          </div>

          <div className=" bg-white  dark:bg-slate-900  right-0 fixed z-10 w-[44px] h-[1750px]  shadow-sm dark:shadow-slate-100 ">
            <MainRight />
          </div>
        </div>
      </div>
    </>
  );
}
