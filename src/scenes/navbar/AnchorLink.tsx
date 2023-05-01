import { Link } from "react-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const AnchorLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  // remove spaces within the string using replace() and regex
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <Link
      to={`#${lowerCasePage}`}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    cursor-pointer transition duration-500
     hover:text-primary-300`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>
  );
};

export default AnchorLink;

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
