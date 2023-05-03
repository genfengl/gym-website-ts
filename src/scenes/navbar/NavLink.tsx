import { Link } from "react-scroll";
import { SelectedPage } from "../../shared/types";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setShowMenu: (value: boolean) => void;
};

const NavLink = ({
  page,
  selectedPage,
  setSelectedPage,
  setShowMenu,
}: Props) => {
  // remove spaces within the string using replace() and regex
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const onNavLinkClick = () => {
    setSelectedPage(lowerCasePage);
    setShowMenu(false);
  };

  return (
    <Link
      activeClass="active"
      to={`${lowerCasePage}`}
      spy={true}
      smooth={true}
      offset={-96}
      duration={800}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    flex cursor-pointer items-center gap-6 transition duration-500
     hover:text-primary-300`}
      onClick={onNavLinkClick}
    >
      {page}
      {/* only shows on mobile nav */}
      <ChevronRightIcon className="h-6 w-6 md:hidden" />
    </Link>
  );
};

export default NavLink;

{
  /* <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink> */
}
