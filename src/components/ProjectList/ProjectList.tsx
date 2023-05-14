import { ProjectPropsInterface } from "@/types/ProjectPropsInterface";
import Project from "./Project";

const ProjectList = ({}) => {
  const ProjectList: ProjectPropsInterface[] = [
    {
      title: "Evolution",
      link: "https://evolution.dustcity.world/",
    },
    {
      title: "Teleport",
      link: "https://teleport.dustcity.world/",
    },
    {
      title: "Builder",
      link: "https://builder.dustcity.world/",
    },
    {
      title: "Court",
      link: "https://court.dustcity.world/",
    },
    {
      title: "Dust City Stacking",
      link: "https://staking.dustcity.world/",
    },
    {
      title: "Rektville Stacking",
      link: "https://rektville.dustcity.world/",
    },
  ];

  return (
    <div>
      <ul className="flex justify-center gap-10 flex-wrap">
        {ProjectList.map((project) => {
          return (
            <li key={project.title}>
              <Project title={project.title} link={project.link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
