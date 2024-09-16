import LatestProjectsHeader from "./LatestProjects/LatestProjectsHeader";
import RestProjectsHeader from "./RestProjects/RestProjectsHeader";
import CommonProjectDiv from "./CommonProjectDiv/CommonProjectDiv";

function Projects() {

  return (
    <>

      <div className="">
        <div className="flex flex-col mb-6 gap-2">
          <LatestProjectsHeader />
          <div className="flex justify-center items-center px-3 py-2 flex-wrap gap-3">
            <CommonProjectDiv ProjectName="BookMarks.In"
              LiveLink="https://book-marks-in-react.vercel.app/"
              ProjectImg="/assets/BookMark-IN.png"
              ProjectDes="BookMark app that can save your Links at catogarise them at one place only."
              CodeLink="https://github.com/believeharsh/BookMarks-In-React"

            />
            <CommonProjectDiv ProjectName="To-Do-App"
              LiveLink="https://believeharsh-to-do-app.vercel.app/"
              ProjectImg="/assets/ToDo-App.png"
              ProjectDes="ToDo App built in React and Tailwind CSS for saving your daily todos in the browser itself."
              CodeLink="https://github.com/believeharsh/To-Do-App-In-React"
            />
            <CommonProjectDiv ProjectName="DevTime-Companion"
              LiveLink="https://devtime-companion.vercel.app/"
              ProjectImg="/assets/DevTime-Companion.png"
              ProjectDes="Built for helping developer to keep their tools and links in one place and reduce the time. "
              CodeLink="https://github.com/believeharsh/DevTime-Companion"             />
          </div>
        </div>
        <div className="flex flex-col mb-6 gap-2">
          <RestProjectsHeader />
          <div className="flex justify-center items-center px-3 py-2 flex-wrap gap-3 ">

            <CommonProjectDiv ProjectName="Spotify"
              LiveLink="https://believeharsh-100-project-dashboard.vercel.app/"
              ProjectImg="/assets/100Projects-DashBoard.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. "
              CodeLink="https://github.com/believeharsh/100-Project-Dashboard"
              />
       

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
