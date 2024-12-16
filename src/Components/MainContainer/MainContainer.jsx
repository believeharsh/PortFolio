import { useState, useRef } from "react";
import Navigation from "../Navigation/Navigation";
import useOutsideClick from "../../Hooks/UseOutSide-Click";
import SideMenu from "../SideMenu/SideMenu";
import Mainleft from "../Mainleft/Mainleft";
import MainRight from "../MainRight/MainRight";
import { Outlet } from "react-router-dom";

export default function MainContainer() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef();

  useOutsideClick(sidebarRef, () => {
    if (sidebar) {
      setSidebar(false);
    }
  });

  const ToggleSideBar = (event) => {
    event.stopPropagation() ;
    setSidebar((prevState) => !prevState);
  };

  console.log(sidebar);
  return (
    <>
      <Navigation click={ToggleSideBar} />
      <div className="bg-white dark:bg-slate-900 h-full relative">
        <div className="flex">
          <SideMenu sidebar={sidebar} RefSideMenu={sidebarRef} />
          <div className="MainLeft-Container">
            <Mainleft />
          </div>
          <div
            className={`MainCenter-Container ${
              sidebar ? "blur-sm z-[10] overflow-hidden" : ""
            }`}
          >
            <Outlet />
          </div>
          <div className="MainRight-Container">
            <MainRight />
          </div>
        </div>
      </div>
    </>
  );
}
