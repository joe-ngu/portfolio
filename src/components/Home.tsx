import { SelectedPage } from '@/utils/types';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import ProfilePicture from '@/assets/profile-pic.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="container mx-auto w-full gap-16 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="mx-auto mt-32 flex grid flex-col items-center justify-center sm:grid-cols-2">
          {/* INFO */}
          <div>
            <p className="text-3xl font-bold text-gray-200 sm:text-2xl lg:text-5xl">Hi, I'm Joseph Nguyen</p>
            <h1 className="text-4xl font-bold sm:py-6 sm:text-3xl lg:text-5xl">
              <TypeAnimation
                sequence={['Developer', 3000, 'Tinkerer', 3000, 'Learner', 3000]}
                wrapper="span"
                speed={25}
                repeat={Infinity}
              />
            </h1>
            <div className="hidden flex-row sm:block md:flex-col">
              <div className="my-8 flex justify-center gap-16 text-5xl md:justify-start">
                <a href="https://linkedin.com" target="_blank">
                  <AiFillLinkedin className="icon-gradient" />
                </a>
                <a href="https://github.com" target="_blank">
                  <AiFillGithub className="icon-gradient" />
                </a>
                <a href="mailto:joengwind@gmail.com" target="_blank">
                  <AiFillMail className="icon-gradient" />
                </a>
              </div>
              <div className="flex gap-8">
                <a
                  href="/"
                  title="Download CV"
                  role="button"
                  className="bg-secondary btn-gradient-glow relative mb-10 items-center justify-center rounded-xl px-3 py-2 text-sm font-bold text-white
                md:px-9 md:py-4 md:text-lg"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          {/* PROFILE-PIC */}
          <div className="flex items-center justify-center p-2">
            <img className="w-full" src={ProfilePicture} alt="profile-pic" />
          </div>

          <div className="flex flex-col items-center justify-center sm:hidden">
            <div className="justiy-center my-8 flex gap-16 text-5xl sm:justify-start">
              <a href="https://linkedin.com" target="_blank">
                <AiFillLinkedin className="icon-gradient" />
              </a>
              <a href="https://github.com" target="_blank">
                <AiFillGithub className="icon-gradient" />
              </a>
              <a href="mailto:joengwind@gmail.com" target="_blank">
                <AiFillMail className="icon-gradient" />
              </a>
            </div>
            <div className="flex gap-8">
              <a
                href="/"
                title="Download CV"
                role="button"
                className="bg-secondary btn-gradient-glow relative items-center justify-center rounded-xl px-9 py-4 text-lg
                text-sm font-bold text-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
