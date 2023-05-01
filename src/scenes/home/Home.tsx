import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import { Link } from "react-scroll";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorRunner from "../../assets/SponsorRunner.png";
import SponsorZenYoga from "../../assets/SponsorZenYogo.png";
import Sponsors from "./Sponsors";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    // section tag for semantics
    <section
      id="home"
      className="grid min-h-[calc(100vh-96px)] translate-y-24 grid-rows-[1fr_auto] bg-gray-20"
    >
      {/* SECTION CONTAINER */}
      <div className="mx-auto flex w-5/6 items-center justify-center">
        {/* HEADER AND IMAGE CONTAINER */}
        <div className="justify flex flex-col gap-12 md:flex-row md:gap-36">
          {/* HEADER AND ACTION BUTTONS */}
          <div className="flex flex-col gap-6 md:justify-center">
            {/* MAIN HEADER */}
            <div className="z-10 flex flex-col gap-1 font-montserrat">
              {/* HEADLINE */}
              <div className="relative">
                {/* evolvetext setup in tailwind.config */}
                <div
                  className="text-6xl font-extrabold before:absolute before:-left-24
                before:-top-20 before:-z-10 xs:text-7xl md:before:content-evolvetext "
                >
                  EVOGYM
                </div>
              </div>
              {/* SUBHEAD */}
              <div className="text-2xl font-extralight xs:text-3xl">
                Evolutionary Fitness.
              </div>
              {/* Paragraph */}
              <p className="max-w-[600px] text-sm md:text-base">
                Our gym offers top-notch facilities, experienced trainers, and a
                welcoming atmosphere to help you achieve your fitness goals.
                Join us now!
              </p>
            </div>
            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3">
              {/* JOIN NOW */}
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              {/* LEARN MORE */}
              <Link
                to={`#${SelectedPage.ContactUs}`}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-sm font-bold text-primary-500 underline"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              >
                <p>Learn More</p>
              </Link>
            </div>
          </div>
          {/* IMAGE */}
          <div className="z-10 flex justify-center">
            <img
              src={HomePageGraphic}
              alt="homepage-graphic"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* SPONSORS - only visible for md above */}
      <Sponsors />
    </section>
  );
};

export default Home;
