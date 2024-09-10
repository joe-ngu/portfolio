import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useScrollContext } from '@/context/ScrollContext';
import NavLink from '@/components/NavLink';

const Navbar = () => {
  const { isTopOfPage, selectedSection, setSelectedSection } = useScrollContext();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navbarBackground = isTopOfPage ? '' : 'bg-primary-300 drop-shadow';
  const flexBetween = 'flex items-center justify-between';
  return (
    <nav>
      <div className={` ${flexBetween} ${navbarBackground} text-primary-500 fixed top-0 z-30 mx-auto w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <h1 className="text-primary-100 ml-4 text-3xl font-bold">J. NGU</h1>
          <div className="hidden gap-10 md:flex">
            <NavLink page="About" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            <NavLink page="Projects" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            <NavLink page="Skills" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            <NavLink page="Contact" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
          </div>
        </div>
        <div onClick={handleNav} className="mr-10 block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-black/90 text-gray-300 duration-500 ease-in-out md:hidden'
              : 'fixed left-[-100%]'
          }
        >
          <div className="ml-5 mt-10 flex h-full flex-col gap-10 text-2xl">
            <div onClick={handleNav}>
              <NavLink page="About" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
              <NavLink page="Projects" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
              <NavLink page="Skills" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
              <NavLink page="Contact" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
