import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";

function SideMenu(props) {
  console.log(props.RefSideMenu)
  return (
    <>
      <div
        className={`h-full fixed z-[11] backdrop-blur-2xl bg-slate-900/30 dark:bg-slate-900/30 md:w-[226px] w-[270px] top-[53px] left-[44px] transform ${
          props.sidebar
            ? "translate-x[0%]"
            : "translate-x-[-100%] duration-[0.2s] ease-linear "
        }`}
        ref={props.RefSideMenu}
      >
        <div className="flex flex-col items-center justify-center space-y-3 md:mt-8 mt-[70px] p-1">
          <div className="">
            <img
              src="/assets/CurrentProfile.jpeg"
              className="rounded-full xl:h-[100px] xl:w-[100px] md:h-[80px] md:w-[80px] sm:w-[50px] sm:h-[50px] w-[50px] h-[50px]"
              alt=""
            />
          </div>
          <div className="dark:text-white text-white font-mono xl:text-xl text-center md:text-[12px] sm:text-[8px]">
            <p>
              Learning Frontend Development | Coding keen | Self Development
              content | React | JS | Learner🚀
            </p>
          </div>
          <div className="flex flex-col justify-center item-center space-y-2">
            <div className="sidemenu-btn">
              <a
                href="https://www.linkedin.com/in/believeharsh11/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin className="xl:text-2xl md:text-xl" />
              </a>
              <p className="md:text-sm xl:text-2xl sm:text-[10px]">LinkedIn</p>
            </div>
            <div className="sidemenu-btn">
              <a href="https://github.com/believeharsh" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub className="xl:text-2xl md:text-xl" />
              </a>
              <p className="md:text-sm xl:text-2xl sm:text-[10px]">Github</p>
            </div>
            <div className="sidemenu-btn">
              <a href="https://www.instagram.com/bontinue_/" target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram className="xl:text-2xl md:text-xl" />
              </a>
              <p className="md:text-sm xl:text-2xl sm:text-[10px] text-center">Instagram</p>
            </div>
            <div className="sidemenu-btn">
              <a href="https://www.youtube.com/@Bontinue" target="_blank" rel="noopener noreferrer">
                <IoLogoYoutube className="xl:text-2xl md:text-xl" />
              </a>
              <p className="md:text-sm xl:text-2xl sm:text-[10px]">YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;