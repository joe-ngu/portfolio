import { useForm } from 'react-hook-form';
import { AiFillMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useScrollContext, SelectedSection } from '@/context/ScrollContext';

const Contact = () => {
  const { setSelectedSection } = useScrollContext();

  const inputStyles = `mb-5 w-full rounded-lg text-primary-400 bg-primary-200
  px-5 py-3 placeholder-primary-500`;

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
    <section id="contact" className="bg-primary-300 px-4 py-4 sm:px-6">
      <motion.div
        className="flex items-center justify-center sm:h-[70vh]"
        onViewportEnter={() => setSelectedSection(SelectedSection.Contact)}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* HEADER */}
            <div className="mb-4 flex flex-col justify-around py-2 sm:py-4 md:mb-0">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-500 sm:text-5xl">Let's Chat</h1>
              <p className="mt-4 text-lg text-primary-500 sm:text-xl md:text-2xl">
                Feel free to connect with me on LinkedIn <br /> or reach out via email
              </p>

              <div className="mt-4 flex items-center text-primary-100">
                <AiFillMail size={28} />
                <div className="text-md ml-4 tracking-wide">
                  <p>Joseph Nguyen</p>
                </div>
              </div>
            </div>
            {/* CONTACT FORM */}
            <div className="flex justify-center">
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/joengwind@gmail.com"
                method="POST"
                className="w-full max-w-[500px]"
              >
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
                  <p className="mb-5 text-sm text-red-500">
                    {errors.email.type === 'required' && 'This field is required.'}
                    {errors.email.type === 'pattern' && 'Invalid email address.'}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  placeholder="MESSAGE"
                  rows={4}
                  {...register('message', {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mb-5 text-sm text-red-500">
                    {errors.message.type === 'required' && 'This field is required.'}
                    {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 w-full rounded-lg bg-primary-500 px-5 py-3 text-primary-100 hover:bg-primary-400 hover:text-primary-500 sm:w-auto sm:px-20"
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
