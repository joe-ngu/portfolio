import { AiFillChrome, AiFillGithub } from 'react-icons/ai';

type Props = {
  name: string;
  description: string;
  image: string;
  codeURL: string;
  demoURL: string;
};

const Project = ({ name, description, image, codeURL, demoURL }: Props) => {
  return (
    <div className="z-1 overflow-hidden rounded-xl bg-black/40 shadow-xl">
      <a href={demoURL} className="group col-span-3">
        <img
          src={image}
          alt={`${image}`}
          className="h-[200px] w-full rounded-lg object-cover object-top transition duration-200 group-hover:scale-110"
        />
      </a>
      <div className="p-4">
        <h2 className="text-gray-200">{name}</h2>
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="mb-3 mr-3 flex flex-row justify-end gap-3 text-white">
        <a className="cursor-pointer" href={codeURL}>
          <AiFillGithub className="icon-gradient h-auto w-[35px]" />
        </a>
        <a className="cursor-pointer" href={demoURL}>
          <AiFillChrome className="icon-gradient h-auto w-[35px]" />
        </a>
      </div>
    </div>
  );
};

export default Project;
