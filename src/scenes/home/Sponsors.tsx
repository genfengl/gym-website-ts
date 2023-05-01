import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorRunner from "../../assets/SponsorRunner.png";
import SponsorZenYoga from "../../assets/SponsorZenYogo.png";
import SponsorVitality from "../../assets/SponsorVitality.png";

const Sponsors = () => {
  return (
    // Container
    <div className="hidden h-36 w-full items-center bg-primary-300 md:flex">
      {/* Inner container */}
      <div className="mx-auto flex h-8 w-5/6 justify-between">
        <img src={SponsorRedBull} alt="redbull-sponsor" />
        <img src={SponsorForbes} alt="forbes-sponsor" />
        <img src={SponsorFortune} alt="fortune-sponsor" />
        <img src={SponsorRunner} alt="runner-sponsor" />
        <img src={SponsorZenYoga} alt="zenyoga-sponsor" />
        <img src={SponsorVitality} alt="vitality-sponsor" />
      </div>
    </div>
  );
};

export default Sponsors;
