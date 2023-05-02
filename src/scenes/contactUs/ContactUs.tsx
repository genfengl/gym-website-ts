import React, { useState } from "react";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import SectionHeading from "../../shared/SectionHeading";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  // specify type for the state
  const [nameInput, setNameInput] = useState<string>();
  const [emailInput, setEmailInput] = useState<string>();
  const [messageInput, setMessageInput] = useState<string>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(
      "MESSAGE SENT - ",
      "NAME: ",
      nameInput,
      ", EMAIL: ",
      emailInput,
      ", MESSAGE: ",
      messageInput
    );

    setNameInput("");
    setEmailInput("");
    setMessageInput("");
  };

  return (
    <section id="contactus" className="translate-y-24 py-24">
      {/* CONTAINER: HEADER AND FORM */}
      <motion.div
        className="mx-auto flex w-5/6 flex-col gap-12"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <div className="flex flex-col gap-3">
          {/* MAIN HEADING */}
          <SectionHeading>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </SectionHeading>
          {/* DESCRIPTION */}
          <p>
            Maecenas in arcu lectus. Phasellus a sagittis velit. Aliquam eget
            hendrerit odio, id porttitor diam. Suspendisse id neque nec ipsum
            accumsan hendrerit at sit.
          </p>
        </div>
        {/* FORM */}
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
        </form>
      </motion.div>
    </section>
  );
};

export default ContactUs;
