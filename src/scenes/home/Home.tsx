import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import { Link } from "react-scroll";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import Sponsors from "./Sponsors";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    // section tag for semantics
    <section
      id="home"
      // set the height to offset the height of nav and fill the rest of the screen
      className="grid min-h-[calc(100vh-96px)] translate-y-24 grid-rows-[1fr_auto] bg-gray-20"
    >
      {/* SECTION CONTAINER */}
      <div className="mx-auto flex w-5/6 items-center justify-center py-12">
        {/* HEADER AND IMAGE CONTAINER */}
        <motion.div
          className="flex flex-col gap-12 md:flex-row md:gap-24"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* HEADLINE AND ACTION BUTTONS */}
          <motion.div
            className="flex flex-col gap-6 md:justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* MAIN HEADER AND DISCRIPTION */}
            <div className="z-10 flex flex-col gap-3 font-montserrat">
              {/* HEADLINE */}
              <div className="relative">
                {/* evolvetext setup in tailwind.config */}
                <div
                  className="text-6xl font-extrabold before:absolute before:-left-24
                before:-top-20 before:-z-10 xs:text-7xl md:text-8xl md:before:content-evolvetext "
                >
                  EVOGYM
                </div>
                {/* SUBHEAD */}
                <div className="text-2xl font-extralight xs:text-3xl md:text-4xl">
                  Evolutionary Fitness.
                </div>
              </div>
              {/* Paragraph */}
              <p className="max-w-[600px] text-sm sm:text-base md:text-lg">
                Our gym offers top-notch facilities, experienced trainers, and a
                welcoming atmosphere to help you achieve your fitness goals.
                Join us now!
              </p>
            </div>
            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-6">
              {/* JOIN NOW */}
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              {/* LEARN MORE */}
              <Link
                to={`#${SelectedPage.ContactUs}`}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer text-sm font-bold text-primary-500 underline"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              >
                <p>Learn More</p>
              </Link>
            </div>
          </motion.div>
          {/* IMAGE */}
          <div className="z-10 flex basis-3/4 justify-center ">
            <img
              src={HomePageGraphic}
              alt="homepage-graphic"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
      {/* SPONSORS - only visible for md above */}
      <Sponsors />
    </section>
  );
};

export default Home;
