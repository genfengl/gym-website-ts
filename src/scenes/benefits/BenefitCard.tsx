import React from "react";
import { SelectedPage } from "../../shared/types";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 200 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const BenefitCard = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className=" rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      // transition duration
      transition={{ duration: 0.8 }}
      // Assigning the childVariant properties to this motion.div
      variants={childVariant}
    >
      <div className="mb-4 flex flex-col items-center justify-center gap-3">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-6">
          {icon}
        </div>
        <div className="font-bold">{title}</div>
        <div>{description}</div>
        <Link
          to={`#${SelectedPage.ContactUs}`}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-primary-500 underline"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
