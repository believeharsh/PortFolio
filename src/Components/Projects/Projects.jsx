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
            <CommonProjectDiv ProjectName="BookMarks.In"
              LiveLink="https://book-marks-in-react.vercel.app/"
              ProjectImg="/assets/BookMark-IN.png"
              ProjectDes="BookMark app that can save your Links for further use"

            />
            <CommonProjectDiv ProjectName="To-Do-App"
              LiveLink="https://believeharsh-to-do-app.vercel.app/"
              ProjectImg="/assets/ToDo-App.png"
              ProjectDes="ToDo App built in React and Tailwind CSS for saving your daily todos in the browser itself."
            />
            <CommonProjectDiv ProjectName="DevTime-Companion"
              LiveLink="https://devtime-companion.vercel.app/"
              ProjectImg="/assets/LinkedinBanner.png"
              ProjectDes="Built for helping developer to keep theri tools and links in one place and reduce the time " />
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
