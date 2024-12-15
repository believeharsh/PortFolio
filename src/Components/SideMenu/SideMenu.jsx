import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";

function SideMenu({ sidebar, RefSideMenu }) {
  return (
    <>
      {sidebar && ( // Render the menu only when `sidebar` is true
        <div
          ref={RefSideMenu}
          className={`h-full fixed z-[11] backdrop-blur-2xl bg-slate-900/30 dark:bg-slate-900/30 md:w-[226px] w-[270px] top-[53px] left-[44px] transform ${
            sidebar
              ? "translate-x-[0%]"
              : "translate-x-[-100%] duration-[0.2s] ease-linear"
          }`}
        >
          {/* Content of the side menu */}
          <div className="flex flex-col items-center justify-center space-y-3 md:mt-8 mt-[70px] p-1">
            <img
              src="/assets/CurrentProfile.jpeg"
              className="rounded-full xl:h-[100px] xl:w-[100px] md:h-[80px] md:w-[80px] sm:w-[50px] sm:h-[50px] w-[50px] h-[50px]"
              alt="Profile"
            />
            <p className="dark:text-white text-white font-mono xl:text-xl text-center md:text-[12px] sm:text-[8px]">
              Learning Frontend Development | Coding keen | Self Development
              content | React | JS | Learner🚀
            </p>
            <div className="flex flex-col justify-center item-center space-y-2">
              <div className="sidemenu-btn">
                <a
                  href="https://www.linkedin.com/in/believeharsh11/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin className="xl:text-2xl md:text-xl" />
                </a>
                <p className="md:text-sm xl:text-2xl sm:text-[10px]">
                  LinkedIn
                </p>
              </div>
              <div className="sidemenu-btn">
                <a
                  href="https://github.com/believeharsh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub className="xl:text-2xl md:text-xl" />
                </a>
                <p className="md:text-sm xl:text-2xl sm:text-[10px]">Github</p>
              </div>
              <div className="sidemenu-btn">
                <a
                  href="https://www.instagram.com/bontinue_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram className="xl:text-2xl md:text-xl" />
                </a>
                <p className="md:text-sm xl:text-2xl sm:text-[10px]">
                  Instagram
                </p>
              </div>
              <div className="sidemenu-btn">
                <a
                  href="https://www.youtube.com/@Bontinue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube className="xl:text-2xl md:text-xl" />
                </a>
                <p className="md:text-sm xl:text-2xl sm:text-[10px]">YouTube</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SideMenu;
