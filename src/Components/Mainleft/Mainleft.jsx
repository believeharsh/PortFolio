// import { FaHome } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { GoProjectSymlink } from "react-icons/go";
export default function Mainleft() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[80px]  ">
        <div className="p-2 bg-gray-500 rounded-xl mb-6">
        <Link to='/about'> 
          <GoProjectSymlink
            className="text-black dark:text-white text-2xl  
    "
          />
          </Link>
        </div>
        <div className="p-2 bg-gray-500 rounded-xl mb-6 ">
        <GoProjectSymlink
            className="text-black dark:text-white text-2xl  
    "
          />
        </div>
        <div className="p-2 bg-gray-500 rounded-xl">
        <GoProjectSymlink
            className="text-black dark:text-white text-2xl  
    "
          />
        </div>
      </div>
    </>
  );
}
