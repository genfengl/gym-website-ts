import { MdWater } from "react-icons/md";
import { Link } from "react-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: string) => void;
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
      <div className={`${flexCentered} gap-1 text-2xl font-bold`}>
        <div className={`${flexCentered} text-2xl`}>EVOGYM</div>
        <MdWater className={`${flexCentered} text-3xl text-primary-500`} />
      </div>
    </Link>
  );
};

export default Brand;
