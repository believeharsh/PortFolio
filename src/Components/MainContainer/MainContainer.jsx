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

  const sidebarRef = useRef();

  const ToggleSideBar = (event) => {
    event.preventDefault();
    setSidebar(!sidebar);
    setCenterBlur(!CenterBlur);
  };

  const ToggleConnect = (event) => {
    event.preventDefault();
    setConnectMenu(!ConnectMenu);
  };
 
  return (
    <>
      <Navigation click={ToggleSideBar} />
      <div className="bg-white dark:bg-slate-900 h-full relative">
        <div className="flex">
          <div>
            <SideMenu sidebar={sidebar} RefSideMenu={sidebarRef} />
          </div>
          <div>
            <Connect Connectmenu={ConnectMenu} />
          </div>

          <div className="MainLeft-Container">
            <Mainleft ToggleConnect={ToggleConnect} />
          </div>

          <div
            className={`MainCenter-Container ${
              CenterBlur ? "blur-sm z-[10] overflow-hidden" : ""
            }`}
          >
            <div>
              <Outlet />
            </div>
          </div>

          <div className="MainRight-Container">
            <MainRight />
          </div>
        </div>
      </div>
    </>
  );
}