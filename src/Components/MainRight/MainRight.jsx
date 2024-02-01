import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";


function MainRight() {
  return (
    <div className="flex flex-col justify-center items-center pt-[130px] md:pt-[90px] space-y-6 ">
      <div className="p-[5px] bg-transparent md:dark:active:bg-blue-800 md:dark:hover:bg-slate-800 md:hover:bg-gray-300 active:text-blue-800 rounded-xl">
        <a href="https://www.linkedin.com/in/believeharsh11/" target="_blank">
          <FaLinkedin className="text-black dark:text-white text-3xl font-bold 
    "/>
        </a>




      </div>
      <div className="p-[5px] bg-transparent md:dark:active:bg-blue-800 md:dark:hover:bg-slate-800 md:hover:bg-gray-300 active:text-blue-800 rounded-xl ">
        <a href="https://github.com/believeharsh" target="_blank">
          <FaGithub className="text-black dark:text-white text-3xl font-bold  " />
        </a>

      </div>
      <div className="p-[5px] bg-transparent md:dark:active:bg-blue-800 md:dark:hover:bg-slate-800 md:hover:bg-gray-300 active:text-blue-800 rounded-xl">
        <a href="" target="_blank">
          <FaTwitter className="text-black dark:text-white text-3xl font-bold  " />
        </a>
      </div>

    </div>
  )
}

export default MainRight
