import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import { Link } from "react-scroll";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    // section tag for semantics
    <section id="home" className="mt-20 h-[calc(100vh-96px)] bg-gray-20 py-10">
      {/* SECTION CONTAINER */}
      <div className="mx-auto flex w-5/6 flex-col justify-center gap-6 md:flex-row">
        {/* HEADER AND IMAGE CONTAINER */}
        <div className="flex flex-col md:flex-row">
          {/* HEADER AND ACTION BUTTONS */}
          <div className="flex flex-col gap-6 md:justify-center">
            {/* MAIN HEADER */}
            <div className="z-10 flex flex-col gap-1 font-montserrat">
              {/* HEADLINE */}
              <div className="text-6xl font-extrabold xs:text-7xl">EVOGYM</div>
              {/* SUBHEAD */}
              <div className="text-2xl font-extralight xs:text-3xl">
                Evolutionary Fitness.
              </div>
              {/* Paragraph */}
              <p className="max-w-[550px] text-sm">
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
          <div className="flex justify-center">
            <img
              src={HomePageGraphic}
              alt="homepage-graphic"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* SPONSORS - only visible for md above */}
      <div className="hidden md:flex">
        <div>
          <div className="flex gap-16">
            <img src={SponsorRedBull} alt="redbull-sponsor" />
            <img src={SponsorForbes} alt="forbes-sponsor" />
            <img src={SponsorFortune} alt="fortune-sponsor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;