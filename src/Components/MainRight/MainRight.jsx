import { FaLinkedin, FaGithub } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";


function MainRight() {
  return (
    <div className="flex flex-col justify-center items-center pt-[80px]  ">
      <div className="p-2 bg-gray-500 rounded-xl mb-6 ">
        <FaLinkedin className="text-black dark:text-white text-2xl  
    "/>

      </div>
      <div className="p-2 bg-gray-500 rounded-xl mb-6 ">
        <FaGithub className="text-black dark:text-white text-2xl  " />
      </div>
      <div className="p-2 bg-gray-500 rounded-xl mb-6 ">
        <FaGithub className="text-black dark:text-white text-2xl  " />
      </div>

    </div>
  )
}

export default MainRight
