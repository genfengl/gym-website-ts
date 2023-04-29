import React from "react";
import clsx from "clsx";

type Props = {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};

const Hamburger = ({ setShowMenu, showMenu }: Props) => {
  // -translate-x-3 to make w-6 lines centered
  const hamburgerLines =
    "absolute h-1 w-6 bg-gray-20 transition-all ease-in-out -translate-x-3 ";
  return (
    // pb-1 to compensate for the h-1 height of divs
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
