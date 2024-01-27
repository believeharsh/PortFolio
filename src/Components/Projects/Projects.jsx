
import LatestProjectsHeader from "./LatestProjects/LatestProjectsHeader";
import RestProjectsHeader from "./RestProjects/RestProjectsHeader";
import CommonProjectDiv from "./CommonProjectDiv/CommonProjectDiv";

import { useState } from "react";

function Projects() {

  return (
    <>

      <div className="">
        <div className="flex flex-col mb-6">
          <LatestProjectsHeader />
          <div className="flex justify-center items-center px-3 py-2 flex-wrap ">
            <CommonProjectDiv ProjectName="Microsys.In"
              LiveLink=""
              ProjectImg="Public\Assets\Pictures\LinkedinBanner.png"
              ProjectDes="Website of my collage which help students to save time and get better in thier field."

            />
            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="Public\Assets\Pictures\LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. "
            />
            <CommonProjectDiv ProjectName="Portfolio"
              LiveLink=""
              ProjectImg="Public\Assets\Pictures\LinkedinBanner.png"
              ProjectDes="This is my portfolio website i made for showing my skills, projects and ohter details." />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <RestProjectsHeader />
          <div className="flex justify-center items-center px-3 py-2 flex-wrap ">

            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="Public\Assets\Pictures\LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />

            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="Public\Assets\Pictures\LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />

            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="Public\Assets\Pictures\LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />
            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="Public\Assets\Pictures\LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />

            <CommonProjectDiv ProjectName="Spotify"
              LiveLink=""
              ProjectImg="Public\Assets\Pictures\LinkedinBanner.png"
              ProjectDes="Spotify is the No. 1 website for listing endless songs accoridng to your taste. " />

          </div>
        </div>
      </div>

    </>
  )
}

export default Projects;
