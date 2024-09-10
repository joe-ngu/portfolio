import { motion } from 'framer-motion';
import { useScrollContext, SelectedSection } from '@/context/ScrollContext';
import { skills, SkillType } from '@/constants/skills';
import { useEffect, useRef } from 'react';

const Skills = () => {
  const { setSelectedSection } = useScrollContext();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Clone the skills list to enable seamless wrap-around effect
      const clone = container.innerHTML;
      container.innerHTML += clone;
    }
  }, []);

  return (
    <section
      id="skills"
      className="container mx-auto w-full gap-16 bg-primary-300 px-4 py-6 text-primary-500 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:py-12"
    >
      <motion.div
        className="mx-auto w-full max-w-screen-lg py-10"
        onViewportEnter={() => setSelectedSection(SelectedSection.Skills)}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Skills</h1>

        <p className="mx-auto text-lg leading-relaxed sm:mx-0 sm:text-xl">
          Although I am a Python developer at heart, I enjoy experimenting with different tech stacks and learning new
          skills. Here are some of the tech that I am most familiar with:
        </p>
        <div className="relative overflow-hidden rounded-3xl bg-primary-300 py-8 sm:py-10">
          <div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-transparent to-primary-300 sm:w-16 lg:w-32" />

          {/* Scrolling logos */}
          <div
            ref={scrollRef}
            className="flex w-[150%] animate-scroll whitespace-nowrap hover:animation-play-state-pause sm:w-[200%]"
          >
            {skills.map((skill: SkillType, index: number) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg shadow-glow transition-transform hover:scale-110 sm:mx-4 sm:h-16 sm:w-16"
              >
                <img src={skill.image} alt={skill.name} className="h-10 w-10 sm:h-12 sm:w-12" />
              </a>
            ))}
          </div>

          <div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-transparent to-primary-300 sm:w-16 lg:w-32" />
        </div>
        <div className="flex justify-center">
          <div className="mx-4 w-full max-w-screen-lg border-b border-primary-500 md:mx-8" />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
