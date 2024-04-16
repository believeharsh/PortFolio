
import LatestProjectsHeader from "./LatestProjects/LatestProjectsHeader";
import RestProjectsHeader from "./RestProjects/RestProjectsHeader";
import CommonProjectDiv from "./CommonProjectDiv/CommonProjectDiv";

function Projects() {

  return (
    <>

      <div className="">
        <div className="flex flex-col mb-6">
          <LatestProjectsHeader />
          <div className="flex justify-center items-center px-3 py-2 flex-wrap ">
            <CommonProjectDiv ProjectName="100-Projects-Dashboard"
              LiveLink="https://believeharsh-100-project-dashboard.vercel.app/"
              ProjectImg="/assets/100-Project-Dashboard.png"
              ProjectDes="Here I've added 100 projects with their live link and source code link too. "

            />
            <CommonProjectDiv ProjectName="To-Do-App"
              LiveLink="https://believeharsh-to-do-app.vercel.app/"
              ProjectImg="/assets/ToDo.png"
              ProjectDes="ToDo App built in React and Tailwind CSS for saving your daily todos in the browser itself."
            />
            <CommonProjectDiv ProjectName="Portfolio"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="This is my portfolio website i made for showing my skills, projects and ohter details." />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <RestProjectsHeader />
          <div className="flex justify-center items-center px-3 py-2 flex-wrap ">

            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />

            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />

            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />
            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />

            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />

          </div>
        </div>
      </div>

    </>
  )
}

export default Projects;
