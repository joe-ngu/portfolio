import { AiFillChrome, AiFillGithub } from 'react-icons/ai';
import { ProjectType } from '@/constants/projects';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="z-1 bg-primary-200 flex h-full flex-col overflow-hidden rounded-xl shadow-xl">
      <a href={project.demoURL} className="group flex-shrink-0">
        <img
          src={project.image}
          alt={`${project.image}`}
          className="h-[200px] w-full rounded-t-xl object-cover object-top transition-transform duration-200 group-hover:scale-110"
        />
      </a>
      <div className="flex-1 p-4">
        <h2 className="text-primary-500 mb-2 text-lg font-semibold">{project.name}</h2>
        <p className="text-primary-400 mb-4">{project.description}</p>
        <div className="mt-auto flex justify-end gap-4">
          {project.codeURL && (
            <a href={project.codeURL} className="text-primary-500 hover:text-primary-400">
              <AiFillGithub className="h-6 w-6" />
            </a>
          )}
          {project.demoURL && (
            <a href={project.demoURL} className="text-primary-500 hover:text-primary-400">
              <AiFillChrome className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
