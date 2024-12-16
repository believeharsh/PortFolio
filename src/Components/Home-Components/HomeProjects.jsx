import React from "react";
import ProjectTile from "../Projects/ProjectTile";


const HomeProjects = () => {
  return (
    <>
      <section className="bg-white dark:bg-slate-800 text-black dark:text-white p-6 rounded-lg shadow-md mt-5">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="space-y-4">
          <ProjectTile
            ProjectName="DevTime Companion"
            ProjectDes="A dashboard for tracking tasks, saving bookmarks, and monitoring performance with analytics."
            ProjectImg="https://via.placeholder.com/300x200"
            LiveLink="https://devtime.com"
            CodeLink="https://github.com/harshdahiya/devtime"
          />
          <ProjectTile
            ProjectName="Library Management System"
            ProjectDes="A MERN stack application for managing books and users in a college library."
            ProjectImg="https://via.placeholder.com/300x200"
            LiveLink="https://librarysystem.com"
            CodeLink="https://github.com/harshdahiya/librarysystem"
          />
        </div>
      </section>
    </>
  );
};

export default HomeProjects;
