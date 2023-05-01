import React from "react";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import { Link } from "react-scroll";
import AnchorLink from "../navbar/AnchorLink";
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
    <section
      id="home"
      className="mt-20 flex h-[calc(100vh-96px)] flex-col gap-16 bg-gray-20 py-10
      md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto flex w-5/6 flex-col items-center justify-center gap-3 md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 font-montserrat md:basis-3/5">
          {/* HEADLINE */}
          <div className="text-7xl font-extrabold">EVOGYM</div>
          {/* SUBHEAD */}
          <div className="text-3xl font-extralight">Evolutionary Fitness.</div>
          {/* Paragraph */}
          <p className="text-sm">
            Our gym offers top-notch facilities, experienced trainers, and a
            welcoming atmosphere to help you achieve your fitness goals. Join us
            now!
          </p>
        </div>
        {/* ACTIONS */}
        <div className="flex items-center">
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
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
        {/* IMAGE */}
        <div>
          <img src={HomePageGraphic} alt="homepage-graphic" />
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
