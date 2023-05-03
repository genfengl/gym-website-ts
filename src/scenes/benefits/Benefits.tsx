import { BenefitType, SelectedPage } from "../../shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import SectionHeading from "../../shared/SectionHeading";
import BenefitCard from "./BenefitCard";
import BenefitsPageModel from "../../assets/BenefitsPageModel.png";
import ActionButton from "../../shared/ActionButton";

// Specify that benefits will be an array of BenefitType objects
const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Pellentesque lacinia odio tortor, in aliquam nibh ornare in. Curabitur gravida justo a nunc rhoncus egestas. Maecenas pulvinar.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Morbi dapibus nunc felis, sit amet sodales neque dignissim et. Cras feugiat scelerisque erat, ut lacinia metus. Mauris.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Phasellus pulvinar aliquet tempor. Vestibulum aliquam placerat erat nec egestas. Etiam in leo orci. Lorem ipsum dolor sit.",
  },
];

const container = {
  hidden: {},
  visible: {
    // stagger the transition of child elements
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    // translate-y-24 to compensate for the navbar and translate-y-24 in the Home component
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6 translate-y-24 py-24"
    >
      {/* CONTAINER: BENEFITS HEADER AND CARDS */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className="flex flex-col gap-12 md:gap-24"
      >
        {/* CONTAINER: HEADER AND BENEFITCARDS */}
        <div className="flex flex-col gap-6">
          {/* HEADER */}
          <motion.div
            className="flex flex-col gap-3 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SectionHeading>MORE THAN JUST A GYM.</SectionHeading>
            <p className="max-w-[750px] text-sm">
              We provide world class fitness equipment, trainers and classes to
              get you to your ultimate fitness goals with ease. We provide true
              care into each and every member.
            </p>
          </motion.div>
          {/* BENEFITS: flex-col for mobile, flex for desktop */}
          <motion.div
            className="flex flex-col gap-6 md:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            // assign the container variant to this container of all the BenefitCards
            variants={container}
          >
            {benefits.map((benefit: BenefitType) => (
              <BenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
        </div>

        {/* GRAPHICS AND DESCRIPTION*/}
        <div className="flex flex-col gap-16 md:flex-row md:items-center">
          {/* GRAPHIC */}
          <div className="flex md:w-1/2">
            <img src={BenefitsPageModel} alt="benefits-page-model" />
          </div>
          {/* TEXT DESCRIPTION WITH ACTION BUTTON */}
          <motion.div
            className="relative flex flex-col gap-6 md:basis-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -120 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* TEXT */}
            <div className="flex flex-col gap-6 before:absolute before:-left-12 before:-top-20 before:content-abstractwaves">
              {/* HEADING */}
              <div>
                <SectionHeading>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>.
                </SectionHeading>
              </div>
              {/* DESCRIPTION TEXTS */}
              <div className="flex flex-col gap-3">
                <p>
                  Suspendisse eu purus dignissim, dictum lectus vitae, imperdiet
                  turpis. Praesent non nibh a lorem efficitur tincidunt. Aenean
                  dictum quam vitae erat interdum, ullamcorper laoreet sem
                  ullamcorper. Integer vel ultrices metus, quis facilisis
                  lectus. Nunc mollis ligula.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias at commodi dolorum recusandae repellendus nemo ullam
                  harum quo hic. Maiores?
                </p>
              </div>
            </div>
            {/* ACTION BUTTON */}
            <div className="flex after:absolute after:right-36 after:-z-10 after:content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                JOIN NOW
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
