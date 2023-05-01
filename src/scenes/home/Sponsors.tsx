import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorRunner from "../../assets/SponsorRunner.png";
import SponsorZenYoga from "../../assets/SponsorZenYogo.png";

const Sponsors = () => {
  return (
    <div className="hidden h-24 w-full items-center justify-center bg-primary-300 md:flex">
      <div className="flex w-5/6">
        <div className="flex h-8 w-full justify-between gap-16">
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
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
