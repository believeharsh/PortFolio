import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";

const SideMenu = ({ sidebar, RefSideMenu }) => {
  return (
    <div
      ref={RefSideMenu}
      className={`h-full fixed z-[11] backdrop-blur-lg bg-gradient-to-b from-[#111] via-[#222] to-[#111] dark:bg-slate-900/30 md:w-[240px] w-[280px] top-[50px] left-[44px] transform duration-[0.3s] ease-in-out ${
        sidebar ? "translate-x-0" : "-translate-x-full"
      } shadow-2xl`}
    >
      {/* Side Menu Content */}
      <div className="flex flex-col items-center justify-center space-y-6 md:mt-10 mt-[70px] p-4">
        {/* Profile Image */}
        <img
          src="/assets/CurrentProfile.jpeg"
          className="rounded-full shadow-lg border-4 border-gray-700 xl:h-[120px] xl:w-[120px] md:h-[100px] md:w-[100px] sm:w-[70px] sm:h-[70px]"
          alt="Profile"
        />
        {/* Profile Tagline */}
        <p className="dark:text-gray-200 text-gray-300 font-mono xl:text-lg text-center md:text-[14px] sm:text-[10px]">
          Learning Frontend Development | Coding Enthusiast | Self-Improvement 
          Content | React | JavaScript | 🚀
        </p>
        {/* Social Links */}
        <div className="flex flex-col items-center space-y-4 w-full">
          <SocialLink
            icon={<IoLogoLinkedin />}
            label="LinkedIn"
            url="https://www.linkedin.com/in/believeharsh11/"
          />
          <SocialLink
            icon={<IoLogoGithub />}
            label="Github"
            url="https://github.com/believeharsh"
          />
          <SocialLink
            icon={<IoLogoInstagram />}
            label="Instagram"
            url="https://www.instagram.com/bontinue_/"
          />
          <SocialLink
            icon={<IoLogoYoutube />}
            label="YouTube"
            url="https://www.youtube.com/@Bontinue"
          />
        </div>
      </div>
    </div>
  );
};


const SocialLink = ({ icon, label, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between w-[90%] p-3 rounded-lg bg-gradient-to-r from-[#222] to-[#333] hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
    >
      <div className="flex items-center space-x-3">
        <div className="text-gray-300 text-2xl group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-all duration-300">
          {label}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-4 h-4 text-gray-300 group-hover:text-white transition-all duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
};

export default SideMenu;
