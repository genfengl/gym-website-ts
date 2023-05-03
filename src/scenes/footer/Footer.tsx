import React from "react";
import Brand from "../navbar/Brand";
import BrandImg from "../../assets/Brand.png";
import { MdFacebook, MdWater } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="mx-auto translate-y-24 bg-gray-20 py-24">
      <div className="mx-auto flex w-5/6 flex-col gap-12 md:flex-row md:justify-between">
        {/* BRAND, TEXT DESCRIPTION, AND RIGHTS */}
        <div className="flex basis-1/2 flex-col gap-6">
          {/* BRAND */}
          <div className={`flex items-center gap-1`}>
            <img src={BrandImg} alt="Brand" className="h-6" />
            <div className="">
              <MdWater className={`text-3xl text-primary-500`} />
            </div>
          </div>
          {/* TEXT DESCRIPTION */}
          <p>Evoluationary Fitness.</p>
          {/* SOCIAL MEDIA LINKS */}
          <div className="flex gap-3 text-3xl">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaYoutubeSquare />
            <FaLinkedin />
          </div>
          {/* RIGHTS */}
          <p>© Evogym All Rights Reserved.</p>
        </div>
        {/* OTHER LINKS (placeholder) */}
        <div className="flex flex-col gap-6">
          <div className="font-bold">Links</div>
          <div className="flex flex-col gap-3">
            <div>Blog</div>
            <div>Media Enquiries</div>
            <div>Diversity & Inclusion</div>
            <div>Support</div>
          </div>
        </div>
        {/* HELP BUTTON */}
        <button className="w-48 rounded-full bg-secondary-500 px-8 py-4 text-white md:hidden">
          Need Help?
        </button>
        {/* Contact Us */}
        <div className="flex flex-col gap-6">
          <div className="font-bold">Contact Us</div>
          <p>Sed placerat nibh ipsum, ut.</p>
          {/* PHONE */}
          <div className="flex items-center gap-3">
            <FaPhone />
            <p>+61 3 88888888</p>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-3">
            <FaLocationArrow />
            <p>Collins Street VIC 3000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
