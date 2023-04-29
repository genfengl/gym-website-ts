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
  const flexBetween = "flex items-center justify-between";
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side: Brand */}
            <div className={`${flexBetween} gap-1 text-2xl font-bold`}>
              <div className={`${flexBetween} text-2xl`}>EVOGYM</div>
              <MdWater className={`${flexBetween} text-3xl text-primary-500`} />
            </div>
            {/* Right side */}
            {/* Right side: md or above */}
            <div className={`${flexBetween} hidden w-full md:flex`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
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
              <div className={`${flexBetween} gap-8`}>
                <div>Sign In</div>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become A Member
                </ActionButton>
              </div>
            </div>
            {/* Right side: Mobile */}
            <div className={`relative ${flexBetween} md:hidden`}>
              <Hamburger showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav Sidebar */}
      <div
        className={`fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl md:hidden 
        ${showMenu ? "hidden" : "hidden"}`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-12">
          <button onClick={() => setShowMenu(!showMenu)}>
            <XMarkIcon className="h-6 w-6 text-gray-400" />
          </button>
        </div>
        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
