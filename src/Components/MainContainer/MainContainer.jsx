import { useState, useRef } from "react";
import Navigation from "../Navigation/Navigation";
import useOutsideClick from "../../Hooks/UseOutSide-Click";
import SideMenu from "../SideMenu/SideMenu";
import Mainleft from "../Mainleft/Mainleft";
import MainRight from "../MainRight/MainRight";
import { Outlet } from "react-router-dom";
import Connect from "../Connect/Connect";
import Footer from "../Footer/Footer";
import ResumeModal from "../Resume-Modal/ResumeModal";


const MainContainer = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef();
  const connectRef = useRef();
  const [ConnectMenu, setConnectMenu] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useOutsideClick(sidebarRef, () => {
    if (sidebar) {
      setSidebar(false);
    }
  });
  useOutsideClick(connectRef, () => {
    if (ConnectMenu) setConnectMenu(false);
  });

  const ToggleSideBar = (event) => {
    event.stopPropagation();
    setSidebar((prevState) => !prevState);
  };
  const ToggleConnect = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setConnectMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="">
        <Navigation click={ToggleSideBar} />
        <div className="bg-white dark:bg-slate-900 h-full relative">
          <div className="flex">
            <SideMenu sidebar={sidebar} RefSideMenu={sidebarRef} />
            <div>
              <Connect Connectmenu={ConnectMenu} connectRef={connectRef} />
            </div>
            <div className="MainLeft-Container">
              <Mainleft ToggleConnect={ToggleConnect} />
            </div>
            <div
              className={`MainCenter-Container ${sidebar
                  ? "blur-sm z-[10] overflow-hidden pointer-events-none"
                  : ""
                }`}
            >
              <Outlet context={{ openResume: () => setShowResume(true) }}/>
              <Footer />
            </div>
            <div className="MainRight-Container">
              <MainRight />
            </div>
          </div>

          {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
