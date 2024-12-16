import React from "react";

const HomeProjects = () => {
  return (
    <section className="bg-white dark:bg-slate-800 text-black dark:text-white p-6 rounded-lg shadow-md mt-5">
      <h2 className="text-3xl font-bold mb-6 text-center">Notable Projects</h2>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default HomeProjects;

const ProjectTile = ({
  ProjectName,
  ProjectDes,
  ProjectImg,
  LiveLink,
  CodeLink,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
      <img
        src={ProjectImg}
        alt={ProjectName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{ProjectName}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{ProjectDes}</p>
        <div className="mt-4 flex justify-between">
          <a
            href={LiveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={CodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};
