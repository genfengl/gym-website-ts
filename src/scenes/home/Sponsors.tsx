import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorRunner from "../../assets/SponsorRunner.png";
import SponsorZenYoga from "../../assets/SponsorZenYogo.png";
import SponsorVitality from "../../assets/SponsorVitality.png";

const Sponsors = () => {
  return (
    // Container
    <div className="hidden h-36 w-full items-center justify-center bg-primary-300 md:flex">
      {/* Inner container */}
      <div className="flex h-8 w-5/6 justify-between gap-16">
        <img
          src={SponsorRedBull}
          alt="redbull-sponsor"
          className="object-contain"
        />
        <img
          src={SponsorForbes}
          alt="forbes-sponsor"
          className="object-contain"
        />
        <img
          src={SponsorFortune}
          alt="fortune-sponsor"
          className="object-contain"
        />
        <img src={SponsorRunner} alt="runner-sponsor" />
        <img src={SponsorZenYoga} alt="zenyoga-sponsor" />
        <img src={SponsorVitality} alt="vitality-sponsor" />
      </div>
    </div>
  );
};

export default Sponsors;
