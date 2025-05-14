import HomeAbout from "../Components/Home-Components/HomeAbout";
import HomeConnect from "../Components/Home-Components/HomeConnect";
import HomeEducation from "../Components/Home-Components/HomeEducation";
import HomeHeader from "../Components/Home-Components/HomeHeader";
import Skills from "../Components/Skills/Skills";
import HomeProjects from "../Components/Home-Components/HomeProjects";
import { useOutletContext } from "react-router-dom";

const Home = () => {
    const { openResume } = useOutletContext();
  return (
    <>
      <div className="">
        <HomeHeader openResume={openResume}/>
        <Skills/>
        <HomeProjects/>
        <HomeAbout/>
        <HomeEducation/>
        <HomeConnect/>
      </div>

    </>
  );
};

export default Home;
