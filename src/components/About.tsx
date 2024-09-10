import { motion } from 'framer-motion';
import { useScrollContext, SelectedSection } from '@/context/ScrollContext';
import Resume from '@/assets/resume.pdf';

const About = () => {
  const { setSelectedSection } = useScrollContext();

  return (
    <section
      id="about"
      className="container mx-auto w-full gap-8 bg-primary-300 py-4 sm:px-6 md:px-10 md:pt-8 lg:pt-12"
    >
      <motion.div
        className="mx-auto w-full max-w-screen-lg pt-16 sm:pb-2"
        onViewportEnter={() => setSelectedSection(SelectedSection.About)}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* ABOUT HEADER */}
        <div className="mb-4 flex flex-col items-center justify-center text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="w-full max-w-4xl text-primary-500">
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">C'est moi</h1>
            <br />
            <p className="mx-auto text-base leading-relaxed sm:text-lg md:text-xl">
              Hi there! I'm Joseph, a software engineer who loves tackling challenges and finding creative solutions
              through technology. Whether it’s automating everyday tasks or building something entirely new, I’m always
              looking for ways to improve things. I also enjoy chess, calisthenics, and video games. Currently, I’m
              working on some exciting projects while exploring new job opportunities. Feel free to reach out if you’d
              like to chat or collaborate—I’d love to connect!
            </p>
            <div className="flex justify-center gap-8 pt-8 md:justify-start">
              <a
                href={Resume}
                download="resume.pdf"
                title="Download CV"
                role="button"
                className="relative mb-10 items-center justify-center rounded-xl bg-primary-500 px-3 py-2 text-sm font-bold text-white hover:bg-primary-200 hover:text-primary-500 md:px-9 md:py-4 md:text-lg"
              >
                Download CV
              </a>
            </div>
            <div className="flex justify-center">
              <div className="mx-4 w-full max-w-screen-lg border-b border-primary-500 md:mx-8" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
