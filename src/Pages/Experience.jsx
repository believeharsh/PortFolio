import ExpHeader from "../Components/Experience/ExperienceHeader";
import ExperienceTile from "../Components/Experience/ExperienceTile";
import experiences from "../Data/Experience";

function Experience() {
  return (
    <>
      <div className="flex flex-col mx-4 pb-5 ">
        <div className="">
          <ExpHeader />
        </div>

        <div className="mx-auto mt-4">
          {experiences.map((experience, index) => (
            <ExperienceTile
              key={index}
              title={experience.title}
              tagline={experience.tagline}
              company={experience.company}
              location={experience.location}
              tenure={experience.tenure}
              current={experience.current}
              description={experience.description}
              skills={experience.skills}
              logo={experience.logo}
              ImageUrl={experience.ImageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
