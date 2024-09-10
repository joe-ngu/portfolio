import { SelectedSection } from '@/context/ScrollContext';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface NavLinkProps {
  page: string;
  selectedSection: SelectedSection;
  setSelectedSection: (value: SelectedSection) => void;
}

const NavLink = ({ page, selectedSection, setSelectedSection }: NavLinkProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedSection;

  return (
    <AnchorLink
      className={`${selectedSection === lowerCasePage ? 'text-primary-100' : ''} hover:text-primary-300 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedSection(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default NavLink;
