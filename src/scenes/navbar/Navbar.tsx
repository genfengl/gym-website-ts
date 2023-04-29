// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import { useState } from "react";
// import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MdWater } from "react-icons/md";
import { SelectedPage } from "../../shared/types";
import Link from "./Link";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";
import Hamburger from "./Hamburger";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexCentered = "flex items-center";
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${flexCentered} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexCentered} mx-auto w-5/6`}>
          <div className={`${flexCentered} w-full justify-between gap-16`}>
            {/* Left side: Brand */}
            <div className={`${flexCentered} gap-1 text-2xl font-bold`}>
              <div className={`${flexCentered} text-2xl`}>EVOGYM</div>
              <MdWater
                className={`${flexCentered} text-3xl text-primary-500`}
              />
            </div>
            {/* Right side */}
            {/* Right side: md or above */}
            <div
              className={`${flexCentered} hidden w-full justify-between md:flex`}
            >
              <div className={`${flexCentered} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexCentered} gap-8`}>
                <div>Sign In</div>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become A Member
                </ActionButton>
              </div>
            </div>
            {/* Right side: Mobile */}
            <div
              className={`relative flex w-8 items-center justify-center md:hidden`}
            >
              <Hamburger showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav Sidebar */}
      <div
        className={`fixed bottom-0 z-40 h-full w-1/3 min-w-[300px] translate-y-20 bg-inherit
         drop-shadow-xl transition-all duration-500 md:hidden
        ${showMenu ? "right-0" : "-right-full opacity-0"}`}
      >
        {/* Anchor Links */}
        <div className="mx-auto flex flex-col gap-10 text-2xl">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
