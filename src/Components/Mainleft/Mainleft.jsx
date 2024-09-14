import { Link } from "react-router-dom";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Tooltip from "../Tooltip/Tooltip";
export default function Mainleft(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[130px] md:pt-[90px] space-y-6">
        <div className="MainLeft-Child">
          <Link to="/projects">
            <Tooltip message={"Projects"}>
              <GoProjectSymlink className="Projects-link-icon" />
            </Tooltip>
          </Link>
        </div>
        <div className="MainLeft-Child">
          <Tooltip message={"Email"}>
            <MdOutlineMail className="Projects-link-icon" />
          </Tooltip>
        </div>
        <div onClick={props.ToggleConnect} className="MainLeft-Child">
          <Tooltip message={"Connect"}>
            <FaUserFriends className="Projects-link-icon" />
          </Tooltip>
        </div>
      </div>
    </>
  );
}
