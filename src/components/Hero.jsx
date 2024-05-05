import React from "react";
import bgImage from "../assets/hero-bg.png";
import image1 from "../assets/hero.png";
import { COLORS } from "../assets/themes";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="md:flex container  mx-auto">
        <div className=" flex-1 pt-36 padding-x">
          <h1 className="hero__title" style={{ color: COLORS.goldPrimary }}>
            Revolutionizing the Gold Buying Sector
          </h1>
          <p className="hero__subtitle">
            Elevating Standards for Safe, Private, Efficient, and Equitable Transactions.
          </p>
          <CustomButton
            title="Contact Us"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
          />
        </div>
        <div className="hero__image-container md:pt-32  relative">
          <div className="hero__image">
            <img src={image1} alt="hero image" fill className="object-contain" />
          </div>
          <img
            className="object-contain absolute -z-10 bottom-0  -right-32 md:-right-80 top-0 md:top-12"
            src={bgImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
