import React from "react";

const HomeHeader = ({openResume}) => {
  return (
    <>

      <div className="py-7 px-5 bg-transparent mt-1 md:mt-0 flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="bg-[#e3e3e3] dark:bg-slate-700 p-6 rounded-xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6">

              {/* Profile Image and Resume */}
              <div className="flex flex-col items-center">
                <img
                  src="/assets/CurrentProfile.jpeg"
                  alt="Profile"
                  className="w-[100px] h-[100px] rounded-[54%]"
                />
                <button className="text-lg mt-3 rounded-xl px-3 py-1 text-black dark:text-white shadow-md hover:bg-white transition-all duration-300 dark:hover:text-black hover:border-black active:bg-blue-900 border border-white cursor-pointer"
                onClick={openResume}
                >
                  Resume
                </button>
              </div>

              {/* Name, Title, Bio */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-3xl">
                <p className="text-[30px] sm:text-[40px] md:text-[48px] text-black dark:text-white font-semibold">
                  Harsh Dahiya
                </p>

                <div className="mt-2 mb-2 px-4 py-1 flex items-center dark:text-white shadow-md hover:bg-white transition-all duration-300 dark:hover:text-black hover:border-black active:bg-blue-900 border border-white rounded-[20px] h-[40px]">
                  <p className="text-[18px] sm:text-[20px] md:text-[22px] whitespace-nowrap">
                    Frontend Developer
                  </p>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="ml-3 hidden sm:block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                  </svg>
                </div>

                <p className="text-[15px] sm:text-[16px] text-black dark:text-white leading-relaxed max-w-[600px]">
                  Frontend Developer | Proficient in React | Exploring Backend with Node.js | MERN Stack | Strengthening Problem-Solving with DSA | Eager to Learn & Collaborate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default HomeHeader;
