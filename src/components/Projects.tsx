import { useScrollContext, SelectedSection } from '@/context/ScrollContext';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects, ProjectType } from '@/constants/projects';

const Projects = () => {
  const { setSelectedSection } = useScrollContext();

  return (
    <section
      id="projects"
      className="container mx-auto w-full gap-8 bg-primary-300 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:py-12"
    >
      <motion.div
        className="mx-auto w-full max-w-screen-lg pb-8 pt-10 sm:pb-10 sm:pt-12"
        onViewportEnter={() => setSelectedSection(SelectedSection.Projects)}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* PROJECT HEADER */}
        <div className="mb-6 text-center text-primary-500 sm:text-left">
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Works</h1>
          <p className="mx-auto text-base leading-relaxed sm:text-lg md:text-xl">
            Here are some of the projects I have worked on.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: ProjectType) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
