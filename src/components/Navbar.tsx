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

  const navbarBackground = isTopOfPage || nav ? '' : 'bg-primary-300 drop-shadow';
  const flexBetween = 'flex items-center justify-between';
  return (
    <nav>
      <div className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 mx-auto w-full py-6 text-primary-500`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <h1 className="ml-4 text-3xl font-bold text-primary-100">J. NGU</h1>
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
              ? 'fixed left-0 top-0 h-full w-[60%] bg-black/90 duration-500 ease-in-out md:hidden'
              : 'fixed left-[-100%]'
          }
        >
          <div className="ml-5 mt-10 flex h-full text-2xl">
            <div onClick={handleNav} className="flex flex-col gap-5">
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
