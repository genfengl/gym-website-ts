import React from "react";

type Props = {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};

const Hamburger = ({ setShowMenu, showMenu }: Props) => {
  const hamburgerLines =
    "absolute h-1 w-6 bg-secondary-500 transition-all ease-in-out";
  return (
    <button className="pb-1" onClick={() => setShowMenu(!showMenu)}>
      <div
        className={`${hamburgerLines} 
      ${showMenu ? "opacity-0" : "-translate-y-2 delay-500"}`}
      ></div>
      <div
        className={`${hamburgerLines} 
      ${showMenu ? "rotate-45 delay-500" : ""}`}
      ></div>
      <div
        className={`${hamburgerLines} 
      ${showMenu ? "-rotate-45 delay-500" : ""}`}
      ></div>
      <div
        className={`${hamburgerLines} 
      ${showMenu ? "opacity-0" : "translate-y-2 delay-500"}`}
      ></div>
    </button>
  );
};

export default Hamburger;
