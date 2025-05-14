import React from "react";

const ProjectTile = ({
  ProjectName,
  ProjectDes,
  ProjectImg,
  LiveLink,
  CodeLink,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out flex flex-col">
      <img
        src={ProjectImg}
        alt={ProjectName}
        className="w-full sm:h-10 md:h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold">{ProjectName}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">
          {ProjectDes}
        </p>
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

const HomeProjects = () => {
  return (
    <section className="bg-white dark:bg-slate-800 text-black dark:text-white p-6 rounded-lg shadow-md mt-5">
      <h2 className="text-3xl font-bold mb-6 text-center">Notable Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectTile
          ProjectName="BlogHive"
          ProjectDes="Bloghive, This is the application where you can write you stories, publish your ideas and interact with people."
          ProjectImg="/assets/BlogHive-htc-Project-Image.png"
          LiveLink="https://bloghive-htc.onrender.com"
          CodeLink="https://github.com/believeharsh/BlogHive"
        />
        <ProjectTile
          ProjectName="DevtMate"
          ProjectDes="A productivity hub tailored for developers—organize bookmarks, manage todos, and track your productivity with an interactive dashboard—all in one centralized platform."
          ProjectImg="/assets/DevMate.png"
          LiveLink="https://dev-mate-theta.vercel.app/"
          CodeLink="https://github.com/believeharsh/DevMate"
        />
      </div>
    </section>
  );
};

export default HomeProjects;


