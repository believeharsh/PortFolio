import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";


function MainRight() {
  return (
    <div className="flex flex-col justify-center items-center pt-[80px]  ">
      <div className="p-2 bg-transparent dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl mb-6 ">
      <a href="https://www.linkedin.com/in/believeharsh11/" target="_blank">
      <FaLinkedin className="text-black dark:text-white text-3xl font-bold 
    "/>
      </a>
    
   
 

      </div>
      <div className="p-2 bg-transparent dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl mb-6 ">
        <a href="https://github.com/believeharsh" target="_blank">
        <FaGithub className="text-black dark:text-white text-3xl font-bold  " />
        </a>
    
      </div>
      <div className="p-2 bg-transparent dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-xl mb-6 ">
        <a href="" target="_blank">
        <FaTwitter className="text-black dark:text-white text-3xl font-bold  " />
        </a>
      </div>

    </div>
  )
}

export default MainRight
