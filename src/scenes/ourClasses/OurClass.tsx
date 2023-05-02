import OurClassesImage1 from "../../assets/OurClassesImage1.jpg";

type Props = {
  title: string;
  description: string;
  image: string;
};

const OurClass = ({ title, description, image }: Props) => {
  // styles for the overlay
  const overlayStyles = `p-6 absolute z-30 flex gap-6
  flex-col items-center justify-center w-full h-[480px]
  bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative aspect-square w-[360px]">
      <div className={overlayStyles}>
        <div className="font-montserrat text-3xl font-bold">{title}</div>
        <div>{description}</div>
      </div>
      <img src={image} alt={image} />
    </li>
  );
};

export default OurClass;
