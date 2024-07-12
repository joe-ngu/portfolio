import { SelectedPage } from '@/utils/types';
import { useForm } from 'react-hook-form';
import { AiFillMail } from 'react-icons/ai';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg text-white bg-secondary
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact">
      <motion.div
        className="my-5 flex h-full items-center justify-center sm:h-[70vh]"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* HEADER */}
            <div className="bg-secondary mb-10 mr-2 flex flex-col justify-around rounded-xl p-6">
              <h1 className="text-4xl text-white sm:text-5xl">
                Contact <span>Me</span>
              </h1>
              <p className="text-normal mt-2 text-lg text-gray-400">
                Let's connect on Linkedin <br /> or send me an Email
              </p>

              <div className="mt-2 flex items-center text-gray-400">
                <AiFillMail />
                <div className="text-md ml-4 w-40 tracking-wide">
                  <p>Joseph Nguyen</p>
                </div>
              </div>
            </div>
            {/* CONTACT FORM */}
            <div className="mb-10 flex">
              <form target="_blank" onSubmit={onSubmit}>
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mb-5 text-white">
                    {errors.email.type === 'required' && 'This field is required.'}
                    {errors.email.type === 'pattern' && 'Invalid email address.'}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  placeholder="MESSAGE"
                  rows={4}
                  cols={50}
                  {...register('message', {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mb-5 text-white">
                    {errors.message.type === 'required' && 'This field is required.'}
                    {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
                  </p>
                )}

                <button
                  type="submit"
                  className="bg-secondary btn-gradient-glow mt-5 rounded-lg px-20 py-3 text-white transition duration-500"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
