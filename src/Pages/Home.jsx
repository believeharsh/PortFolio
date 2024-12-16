import HomeAbout from "../Components/Home-Components/HomeAbout";
import HomeConnect from "../Components/Home-Components/HomeConnect";
import HomeEducation from "../Components/Home-Components/HomeEducation";
import HomeHeader from "../Components/Home-Components/HomeHeader";
import Skills from "../Components/Skills/Skills";
import HomeProjects from "../Components/Home-Components/HomeProjects";

const Home = () => {
  return (
    <>
      <div className="">
        <HomeHeader/>
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
