import React from "react";
import img1 from "../assets/59753.jpg";
import img2 from "../assets/71033.jpg";
import { COLORS } from "../assets/themes";

const About = () => {
  return (
    <div className="container mx-auto px-3 md:px-0 py-24 md:py-32">
      <div className="md:grid grid-cols-2 md:gap-4">
        <div style={{}} className="flex text-gray-300 mt-4  font text-xl flex-col gap-5">
          <h3 style={{ color: COLORS.babyWhite }} className="text-3xl font md:text-5xl font-bold">
            Fast Gold Africa:{" "}
          </h3>
          <h3 style={{ color: COLORS.babyWhite }} className="text-3xl font md:text-5xl font-bold">
            Your Reliable <span style={{ color: COLORS.goldPrimary }}>Gold</span> Trading Partner
          </h3>
          <p>
            Looking for a trusted and efficient gold trading partner in South Africa? Look no
            further than Fast Gold Africa! We are a leading gold trader that specializes in buying
            and selling gold to clients all around the world. Our process is fast, transparent, and
            hassle-free, ensuring that you always get the best value for your investment.
          </p>
          <p>
            At Fast Gold Africa, we understand the importance of privacy when it comes to conducting
            business. That's why we take every measure to ensure that your personal and financial
            information is kept confidential at all times. Whether you're a seasoned investor or a
            first-time buyer, you can trust us to provide you with a safe and secure gold trading
            experience.
          </p>
          <p>
            So why wait? Contact Fast Gold Africa today and let us help you take your gold trading
            to the next level. With our fast, reliable, and transparent service, you can rest
            assured that you're in good hands.
          </p>
        </div>
        <div className="grid mt-5 md:mt-0 grid-cols-2  gap-4">
          <div className="rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img src={img1} className="object-contain" />
          </div>
          <div
            style={{ backgroundColor: COLORS.goldPrimary }}
            className="rounded-md overflow-hidden aspect-w-1 aspect-h-1"
          >
            <img src={img1} className="hidden" />
          </div>
          <div
            style={{ backgroundColor: COLORS.goldPrimary }}
            className="rounded-md overflow-hidden aspect-w-1 aspect-h-1"
          >
            <img src={img1} className="hidden" />
          </div>
          <div className="rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img src={img2} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
