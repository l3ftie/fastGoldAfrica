import React from "react";
import bgImage from "../assets/1188.jpg";
import { COLORS } from "../assets/themes";

const CallToAction = () => {
  return (
    <section
      style={{
        backgroundColor: COLORS.goldPrimary,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-2 h-full min-h-72 relative flex"
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      />
      <div className="container mx-auto relative flex flex-col items-center justify-center min-h-full">
        <h4 style={{ color: COLORS.babyWhite }} className="text-xl font md:text-5xl font-bold">
          We buy Gold .{" "}
          <span className="  inline-block" style={{ color: COLORS.goldPrimary }}>
            Here is how...
          </span>
        </h4>
        <a></a>
      </div>
    </section>
  );
};

export default CallToAction;
