import ProjectTile from "../Components/Projects/ProjectTile";
import ProjectsHeader from "../Components/Projects/ProjectsHeader";

function Projects() {
  return (
    <>
      <div className="">
        <div className="flex flex-col mb-6 gap-2">
          <ProjectsHeader heading="Latest Projects" />
          <div className="flex justify-center items-center px-3 py-2 flex-wrap gap-3">
            <ProjectTile
              ProjectName="BookMarks.In"
              LiveLink="https://book-marks-in-react.vercel.app/"
              ProjectImg="/assets/BookMark-IN.png"
              ProjectDes="BookMark app that can save your Links at catogarise them at one place only."
              CodeLink="https://github.com/believeharsh/BookMarks-In-React"
            />
            <ProjectTile
              ProjectName="To-Do-App"
              LiveLink="https://believeharsh-to-do-app.vercel.app/"
              ProjectImg="/assets/ToDo-App.png"
              ProjectDes="ToDo App built in React and Tailwind CSS for saving your daily todos in the browser itself."
              CodeLink="https://github.com/believeharsh/To-Do-App-In-React"
            />
            <ProjectTile
              ProjectName="DevTime-Companion"
              LiveLink="https://devtime-companion.vercel.app/"
              ProjectImg="/assets/DevTime-Companion.png"
              ProjectDes="Built for helping developer to keep their tools and links in one place and reduce the time. "
              CodeLink="https://github.com/believeharsh/DevTime-Companion"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6 gap-2">
          <ProjectsHeader heading="Rest Projects" />
          <div className="flex justify-center items-center px-3 py-2 flex-wrap gap-3 ">
            <ProjectTile
              ProjectName="Spotify"
              LiveLink="https://believeharsh-100-project-dashboard.vercel.app/"
              ProjectImg="/assets/100Projects-DashBoard.png"
              ProjectDes="A DashBoard that consist 100 small projects with their respective live and  Source Code Links."
              CodeLink="https://github.com/believeharsh/100-Project-Dashboard"
            />

            <ProjectTile
              ProjectName="Spotify"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. "
            />

            <CommonProjectDiv
              ProjectName="Spotify"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. "
            />
            <ProjectTile
              ProjectName="Spotify"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. "
            />

            <ProjectTile
              ProjectName="Spotify"
              LiveLink=""
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
