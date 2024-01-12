// import MainCenter from "./Components/Main-Center/Main-Center"
import MainCenter from "../MainCenter/MainCenter";
import Mainleft from "../Mainleft/Mainleft";
import MainRight from "../MainRight/MainRight";

export default function MainContainer() {
  return (
    <>
    <div className="w-full dark:bg-slate-900 bg-white ">
      <div className="mx-auto px-5">
        <div className="flex">
          <Mainleft/>
          <MainCenter/>
          <MainRight/>
        </div>
      </div>
    </div>
    </>
  );
}
