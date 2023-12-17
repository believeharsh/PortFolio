// import MainCenter from "./Components/Main-Center/Main-Center"
import MainCenter from "../MainCenter/MainCenter";
import Mainleft from "../Mainleft/Mainleft";
import MainRight from "../MainRight/MainRight";

export default function MainContainer() {
  return (
    <>
      <div className=" relative w-full ">
        <div className="mx-auto max-w-screen-xl">
          <div className="relative">
            <div className="h-2 bg-transparent relative flex">
              <Mainleft className=" w-[100px] p-1  " />
              <MainCenter className="" />
              <MainRight className=" w-[46px] p-1 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
