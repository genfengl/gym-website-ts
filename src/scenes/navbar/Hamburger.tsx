import React from "react";
import clsx from "clsx";

type Props = {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};

const Hamburger = ({ setShowMenu, showMenu }: Props) => {
  const hamburgerLines =
    "absolute h-1 w-6 bg-secondary-500 transition-all ease-in-out -translate-x-3 ";
  return (
    <button className="pb-1" onClick={() => setShowMenu(!showMenu)}>
      <div
        className={clsx(
          `${hamburgerLines}`,
          `${showMenu ? "opacity-0" : "-translate-y-2 delay-500"}`
        )}
      ></div>
      <div
        className={clsx(
          `${hamburgerLines}`,
          `${showMenu ? "rotate-45 delay-500" : ""}`
        )}
      ></div>
      <div
        className={clsx(
          `${hamburgerLines}`,
          `${showMenu ? "-rotate-45 delay-500" : ""}`
        )}
      ></div>
      <div
        className={clsx(
          `${hamburgerLines}`,
          `${showMenu ? "opacity-0" : "translate-y-2 delay-500"}`
        )}
      ></div>
    </button>
  );
};

export default Hamburger;
