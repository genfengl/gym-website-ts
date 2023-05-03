import React, { useState } from "react";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import SectionHeading from "../../shared/SectionHeading";
import { useForm } from "react-hook-form";
import ContactUsGraphic from "../../assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  // specify type for the state
  // const [nameInput, setNameInput] = useState<string>();
  // const [emailInput, setEmailInput] = useState<string>();
  // const [messageInput, setMessageInput] = useState<string>();
  // const [input, setInput] = useState<object>();

  const inputStyles = `w-full rounded-lg bg-primary-300 p-4 text-white placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    // trigger is for form validation
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id={SelectedPage.ContactUs} className="translate-y-24 py-24">
      {/* CONTAINER: HEADER AND FORM */}
      <motion.div
        className="mx-auto flex w-5/6 flex-col gap-12"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="flex flex-col gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* MAIN HEADING */}
          <SectionHeading>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </SectionHeading>
          {/* DESCRIPTION */}
          <p className="max-w-[720px]">
            Maecenas in arcu lectus. Phasellus a sagittis velit. Aliquam eget
            hendrerit odio, id porttitor diam. Suspendisse id neque nec ipsum
            accumsan hendrerit at sit.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-12">
          {/* FORM */}
          <motion.div
            className="flex md:basis-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 150 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="w-full"
              // using formsubmit.co
              action="https://formsubmit.co/ba0b5d269b28ba0f02f6deff87fadc87"
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
            >
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                // React hook form: register function - store this input in the name property
                {...register("name", { required: true, maxLength: 100 })}
              />
              {/* Error message: only if errors.name is true */}
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}
              <input
                type="text"
                className={`${inputStyles} mt-6`}
                placeholder="EMAIL"
                // React hook form: register function - store this input in the name property
                {...register("email", {
                  required: true,
                  maxLength: 100,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {/* Error message: only if errors.name is true */}
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              <textarea
                // use rows and cols to define size of textarea
                rows={4}
                cols={50}
                className={`${inputStyles} mt-6`}
                placeholder="MESSAGE"
                // React hook form: register function - store this input in the name property
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {/* Error message: only if errors.name is true */}
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Invalid email address"}
                </p>
              )}
              <button
                type="submit"
                className="mt-6 rounded-md bg-secondary-500 px-10 py-3
                transition-all duration-300
                hover:bg-primary-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          {/* IMAGE */}
          <motion.div
            className="relative h-[451px] md:basis-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 150 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex h-full w-full items-start justify-center ">
              <img
                src={ContactUsGraphic}
                alt="contactus-graphic"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setInput({
//     ...input,
//     [name]: value,
//   });
// };

// const handleSubmit = async (e: any) => {
//   e.preventDefault();

//   console.log(
//     "MESSAGE SENT - ",
//     "NAME: ",
//     nameInput,
//     ", EMAIL: ",
//     emailInput,
//     ", MESSAGE: ",
//     messageInput
//   );

//   setNameInput("");
//   setEmailInput("");
//   setMessageInput("");
// };

/* FORM
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-6"
        >
          <input
            type="text"
            placeholder="NAME"
            className="w-full rounded-lg bg-primary-500 p-4 text-white placeholder-white"
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
            required
          />
          <input
            type="text"
            placeholder="EMAIL"
            className="w-full rounded-lg bg-primary-500 p-4 text-white placeholder-white"
            onChange={(e) => setEmailInput(e.target.value)}
            value={emailInput}
            required
          />

          <textarea
            placeholder="MESSAGE"
            rows={5}
            className="w-full rounded-lg bg-primary-500 p-4 text-white placeholder-white"
            onChange={(e) => setMessageInput(e.target.value)}
            value={messageInput}
          ></textarea>

          <input
            type="submit"
            value="SUBMIT"
            className="rounded-md bg-secondary-500 px-10 py-3"
          />
        </form> */
