import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { SelectedPage } from '@/utils/types';
import Link from '@/components/Link';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navbarBackground = isTopOfPage || nav ? '' : 'drop-shadow bg-secondary';
  const flexBetween = 'flex items-center justify-between';
  return (
    <nav>
      <div className={` ${flexBetween} ${navbarBackground} fixed top-0 z-30 mx-auto w-full py-6 text-gray-500`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <h1 className="primary-color ml-4 text-3xl font-bold">J. NGU</h1>
          <div className="hidden gap-10 md:flex">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
        <div onClick={handleNav} className="mr-10 block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? 'bg-secondary fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 text-gray-300 duration-500 ease-in-out md:hidden'
              : 'fixed left-[-100%]'
          }
        >
          <div className="ml-5 mt-10 flex h-full flex-col gap-10 text-2xl">
            <div onClick={handleNav}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            <div onClick={handleNav}>
              <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            <div onClick={handleNav}>
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
