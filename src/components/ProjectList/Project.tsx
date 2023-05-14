import { ProjectPropsInterface } from "@/types/ProjectPropsInterface";

const Project: React.FC<ProjectPropsInterface> = ({ title, link }) => {
  return (
    <div className="w-64 h-96 border-custom-color-border border-4 flex flex-col items-center p-4">
      <a href={link} className="flex flex-col items-center">
        <h2>{title}</h2>
        <div className=" w-48 h-72 bg-black mt-3"></div>
      </a>
    </div>
  );
};

export default Project;
