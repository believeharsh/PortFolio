// import MainCenter from "./Components/Main-Center/Main-Center"
import MainCenter from "../MainCenter/MainCenter";
import Mainleft from "../Mainleft/Mainleft";
import MainRight from "../MainRight/MainRight";

export default function MainContainer() {
  return (
    <>
    {/* <div className=" ">
      <div className="">
        <div className=" ">
          <div className=""> <Mainleft/></div>
          <div> <MainCenter/></div>
          <div><MainRight/></div>
         
        
          
        </div>
      </div>
    </div> */}

    <div className="w-full h-[100vh] max-w-screen-2xl bg-gray-400 mx-auto relative">
      <div className="flex">
        <div className="bg-slate-800   left-0 h-[100vh]  w-[45px] sticky z-10">
          <Mainleft/>
        </div>
        <div className=" h-[100vh] w-[92%] pt-[4rem] mx-auto sticky  overflow-auto"><MainCenter/></div>
        <div className="bg-slate-800   right-0 stikcy z-10 w-[45px] h-[100vh] ">
          <MainRight/>
        </div>
      </div>
    </div>
    </>
  ); 
}
