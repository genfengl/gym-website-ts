import React from "react";
import { OurClassesType, SelectedPage } from "../../shared/types";
import OurClassesImage1 from "../../assets/OurClassesImage1.jpg";
import OurClassesImage2 from "../../assets/OurClassesImage2.jpg";
import OurClassesImage3 from "../../assets/OurClassesImage3.jpg";
import OurClassesImage4 from "../../assets/OurClassesImage4.jpg";
import OurClassesImage5 from "../../assets/OurClassesImage5.jpg";
import OurClassesImage6 from "../../assets/OurClassesImage6.jpg";
import { motion } from "framer-motion";
import SectionHeading from "../../shared/SectionHeading";
import OurClass from "./OurClass";

const ourClasses: OurClassesType[] = [
  {
    title: "Boxing Classes",
    description:
      "Mauris tempus tincidunt diam ultricies ultricies. Nullam convallis eget erat et tincidunt. Nunc porta bibendum velit, eget venenatis dolor maximus vitae. Suspendisse vitae odio.",
    image: OurClassesImage1,
  },
  {
    title: "Cardio Classes",
    description:
      "Mauris tempus tincidunt diam ultricies ultricies. Nullam convallis eget erat et tincidunt. Nunc porta bibendum velit, eget venenatis dolor maximus vitae. Suspendisse vitae odio.",
    image: OurClassesImage2,
  },
  {
    title: "Strength Classes",
    description:
      "Mauris tempus tincidunt diam ultricies ultricies. Nullam convallis eget erat et tincidunt. Nunc porta bibendum velit, eget venenatis dolor maximus vitae. Suspendisse vitae odio.",
    image: OurClassesImage3,
  },
  {
    title: "Weight Classes",
    description:
      "Mauris tempus tincidunt diam ultricies ultricies. Nullam convallis eget erat et tincidunt. Nunc porta bibendum velit, eget venenatis dolor maximus vitae. Suspendisse vitae odio.",
    image: OurClassesImage4,
  },
  {
    title: "Outdoor Classes",
    description:
      "Mauris tempus tincidunt diam ultricies ultricies. Nullam convallis eget erat et tincidunt. Nunc porta bibendum velit, eget venenatis dolor maximus vitae. Suspendisse vitae odio.",
    image: OurClassesImage5,
  },
  {
    title: "Yoga Classes",
    description:
      "Mauris tempus tincidunt diam ultricies ultricies. Nullam convallis eget erat et tincidunt. Nunc porta bibendum velit, eget venenatis dolor maximus vitae. Suspendisse vitae odio.",
    image: OurClassesImage6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={SelectedPage.OurClasses}
      className="w-full translate-y-24 bg-primary-500 py-24"
    >
      {/* CONTAINER: HEADER AND SIDE-SCROLLER */}
      <motion.div
        className="flex flex-col gap-12"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        {/* HEADER */}
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col gap-3 text-white md:w-3/5">
            <SectionHeading>OUR CLASSES</SectionHeading>
            <p className="">
              Nulla non pellentesque massa, vestibulum suscipit est. Mauris vel
              massa mi. Sed eget lacinia dui, eu dapibus nunc. Ut hendrerit,
              nisi id tincidunt molestie, neque massa ornare tortor, id varius
              urna lacus ut ex. Phasellus ac.
            </p>
          </div>
        </motion.div>
        {/* SIDE-SCROLLER */}
        <div
          className="h-[480px] w-full overflow-x-auto overflow-y-hidden
        xl:flex xl:justify-center"
        >
          {/* Set the width of inner div to be larger than outer parent to activate horizontal scroll */}
          {/* w-2200px = images: 6*360px  + gaps: 5*24px */}
          <ul className="flex w-[2280px] gap-6">
            {/* Use map for repeated element */}
            {ourClasses.map((item: OurClassesType, index) => {
              return (
                <OurClass
                  key={`${item.title}-${index}`}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
