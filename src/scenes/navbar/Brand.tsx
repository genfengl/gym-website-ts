import { MdWater } from "react-icons/md";
import { Link } from "react-scroll";
import { SelectedPage } from "../../shared/types";
import BrandImg from "../../assets/Brand.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Brand = ({ setSelectedPage }: Props) => {
  const flexCentered = "flex items-center";

  return (
    <Link
      to={`${SelectedPage.Home}`}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      onClick={() => setSelectedPage(SelectedPage.Home)}
      className="cursor-pointer"
    >
      <div className={`${flexCentered} gap-1`}>
        <img src={BrandImg} alt="Brand" className="h-6" />
        <div className="">
          <MdWater className={`${flexCentered} text-3xl text-primary-500`} />
        </div>
      </div>
    </Link>
  );
};

export default Brand;
