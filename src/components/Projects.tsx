import { ProjectType, SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import Project from '@/components/Project';

const projects: Array<ProjectType> = [
  {
    name: 'Vacay Homes',
    description: 'Vacay Homes Description',
    image: '#',
    codeURL: '#',
    demoURL: '#',
  },
  {
    name: 'Vacay Homes',
    description: 'Vacay Homes Description',
    image: '#',
    codeURL: '#',
    demoURL: '#',
  },
  {
    name: 'Vacay Homes',
    description: 'Vacay Homes Description',
    image: '#',
    codeURL: '#',
    demoURL: '#',
  },
  {
    name: 'Vacay Homes',
    description: 'Vacay Homes Description',
    image: '#',
    codeURL: '#',
    demoURL: '#',
  },
  {
    name: 'Vacay Homes',
    description: 'Vacay Homes Description',
    image: '#',
    codeURL: '#',
    demoURL: '#',
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="container mx-auto w-full gap-16 px-2 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-full pb-10 pt-16 sm:pb-16"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        {/* PROJECT HEADER */}
        <div className="mb-6 grid grid-cols-2">
          <div className="my-auto text-left text-gray-300">
            <h1 className="mb-8 text-5xl tracking-tight">My Work</h1>
            <p className="max-w-[500px] text-xl leading-relaxed">About my work text blah blah</p>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mx-auto grid gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: ProjectType) => (
            <Project
              name={project.name}
              description={project.description}
              image={project.image}
              codeURL={project.codeURL}
              demoURL={project.demoURL}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
