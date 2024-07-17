import { ProjectType, SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import Project from '@/components/Project';
import VacayHomesImg from '@/assets/vacay-homes.png';
import EvoGymImg from '@/assets/evogym.png';

const projects: Array<ProjectType> = [
  {
    name: 'Vacay Homes',
    description: 'A home rental platform for vacationers',
    image: VacayHomesImg,
    codeURL: 'https://github.com/joe-ngu/vacay-homes',
    demoURL: 'https://vacay-homes.vercel.app/',
  },
  {
    name: 'Evo-Gym',
    description: 'A gym landing page for an upcoming fitness brand',
    image: EvoGymImg,
    codeURL: 'https://github.com/joe-ngu/evo-gym',
    demoURL: 'https://evo-gym-6bz.pages.dev/',
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
            <p className="max-w-[500px] text-xl leading-relaxed">Here are some of the projects I have worked on.</p>
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
