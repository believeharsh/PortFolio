import ProjectTile from "../Components/Projects/ProjectTile";
import ProjectsHeader from "../Components/Projects/ProjectsHeader";
import LatestProjects from "../Data/LatestProjects";
import RestProjects from "../Data/RestProjects";

function Projects() {

  return (
    <div>
      <div className="flex flex-col mb-6 gap-2">
        <ProjectsHeader heading="Latest Projects" />
        <div className="flex justify-center items-center px-3 py-2 flex-wrap gap-3">
          {LatestProjects.map((project, index) => (
            <ProjectTile key={index} {...project} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-6 gap-2">
        <ProjectsHeader heading="Rest Projects" />
        <div className="flex justify-center items-center px-3 py-2 flex-wrap gap-3">
          {RestProjects.map((project, index) => (
            <ProjectTile key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
