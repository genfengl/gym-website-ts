import React from "react";
import { SelectedPage } from "./types";
import { Link } from "react-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <Link
      to={`${SelectedPage.ContactUs}`}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className="cursor-pointer rounded-md bg-secondary-500 px-10 py-3 
      transition-all duration-300
      hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {/* The children is just the text of "Become A Member" */}
      {children}
    </Link>
  );
};

export default ActionButton;
