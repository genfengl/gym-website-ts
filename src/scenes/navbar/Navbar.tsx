import { SelectedPage } from "../../shared/types";
import NavLink from "./NavLink";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";
import Hamburger from "./Hamburger";
import Brand from "./Brand";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexCentered = "flex items-center";
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexCentered} fixed top-0 z-30 w-full bg-gray-20 py-6`}
      >
        <div className={`${flexCentered} mx-auto w-5/6`}>
          <div className={`${flexCentered} w-full justify-between gap-16`}>
            {/* Left side: Brand */}
            <Brand setSelectedPage={setSelectedPage} />
            {/* Right side */}
            {/* Right side: Mobile */}
            {/* Hamburger Icon */}
            <div
              className={`relative flex h-12 w-12 items-center justify-center rounded-full
               md:hidden`}
            >
              <Hamburger showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
            {/* Right side: md or above */}
            <div
              className={`${flexCentered} hidden w-full justify-between md:flex`}
            >
              {/* Anchor Links */}
              <div className={`${flexCentered} gap-8 text-sm`}>
                <NavLink
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setShowMenu={setShowMenu}
                />
                <NavLink
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setShowMenu={setShowMenu}
                />
                <NavLink
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setShowMenu={setShowMenu}
                />
                <NavLink
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setShowMenu={setShowMenu}
                />
              </div>
              {/* Sign In and Register */}
              <div className={`${flexCentered} gap-8`}>
                <div>Sign In</div>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become A Member
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav Sidebar */}
      {/* translate-y-24 to leave space the Navbar */}
      <div
        className={`fixed bottom-0 z-40 h-full w-full min-w-[300px] translate-y-24 bg-gray-20
         drop-shadow-xl transition-all duration-500 
         md:hidden
        ${showMenu ? "right-0" : "-right-full opacity-0"}
        ${navbarBackground}`}
      >
        {/* Anchor Links */}
        <div className="mx-auto mt-12 flex w-5/6 flex-col gap-10 text-2xl">
          <NavLink
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setShowMenu={setShowMenu}
          />

          <NavLink
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setShowMenu={setShowMenu}
          />
          <NavLink
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setShowMenu={setShowMenu}
          />
          <NavLink
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setShowMenu={setShowMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
