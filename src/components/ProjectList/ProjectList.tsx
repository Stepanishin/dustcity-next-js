import { ProjectPropsInterface } from "@/types/ProjectPropsInterface";
import Project from "./Project";

const ProjectList = ({}) => {
  const ProjectList: ProjectPropsInterface[] = [
    {
      title: "Evolution",
      link: "https://dustcity.world/",
    },
    {
      title: "Teleport",
      link: "https://dustcity.world/",
    },
    {
      title: "Builder",
      link: "https://dustcity.world/",
    },
    {
      title: "Court",
      link: "https://dustcity.world/",
    },
    {
      title: "Dust City Stacking",
      link: "https://dustcity.world/",
    },
    {
      title: "Rektville Stacking",
      link: "https://dustcity.world/",
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
