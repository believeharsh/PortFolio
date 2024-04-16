import { Link } from "react-router-dom";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Tooltip from "../Tooltip/Tooltip";
export default function Mainleft(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[130px] md:pt-[90px] space-y-6  ">
        <div className="p-[5px] bg-transparent rounded-xl md:dark:active:bg-blue-800 md:dark:hover:bg-slate-800 md:hover:bg-gray-300 active:text-blue-800 ">
          <Link to="/projects">
            <Tooltip message={"Projects"}>
              <GoProjectSymlink className="text-black dark:text-white text-3xl font-bold" />
            </Tooltip>
          </Link>
        </div>
        <div className="p-[5px] bg-transparent rounded-xl md:dark:active:bg-blue-800 md:dark:hover:bg-slate-800 md:hover:bg-gray-300 active:text-blue-800 ">
        <Tooltip message={"Email"}>
        <MdOutlineMail className="text-black dark:text-white text-3xl font-bold" />
        </Tooltip>
          
        </div>
        <div
          onClick={props.ToggleConnect}
          className="p-[5px] bg-transparent rounded-xl md:dark:active:bg-blue-800 md:dark:hover:bg-slate-800 md:hover:bg-gray-300 active:text-blue-800"
        >
        <Tooltip message={"Connect"}>
        <FaUserFriends className="text-black dark:text-white text-3xl font-bold" />
        </Tooltip>
      
        </div>
      </div>
    </>
  );
}
