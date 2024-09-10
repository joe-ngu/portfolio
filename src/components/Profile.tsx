import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import ProfileImg from '@/assets/profile.png';

const Profile = () => {
  return (
    <section id="profile" className="text-primary-300 absolute inset-0 bg-black bg-opacity-40">
      <div className="flex flex-col items-center justify-center sm:items-end sm:justify-end">
        {/* PROFILE-PIC */}
        <div className="relative top-24 mb-6 flex sm:left-0 sm:top-32 sm:mx-16">
          <img
            src={ProfileImg}
            alt="Profile Picture"
            className="bg-primary-200 border-primary-300 h-32 w-32 rounded-full border-4 object-cover"
          />
        </div>

        <div className="mt-32 text-center sm:mx-16 sm:text-right">
          {/* INFO */}
          <p className="text-xl sm:text-xl lg:text-2xl">
            Hi, I'm <span className="text-primary-100">Joseph Nguyen</span>, a <br /> Software Developer who loves
            solving problems.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex flex-row justify-center gap-2 text-5xl sm:justify-end sm:gap-2">
            <a href="https://linkedin.com/in/jngwind" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-primary-200 hover:bg-primary-500 p-2 hover:rounded-xl" />
            </a>
            <a href="https://github.com/joe-ngu" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-primary-200 hover:bg-primary-500 p-2 hover:rounded-xl" />
            </a>
            <a href="mailto:joengwind@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiFillMail className="text-primary-200 hover:bg-primary-500 p-2 hover:rounded-xl" />
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-12 flex items-center justify-center sm:justify-end">
            <p className="text-sm">© 2024 Joseph Nguyen | Inspired by Gatsby Starter Strata</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
