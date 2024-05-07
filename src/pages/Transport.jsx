import React from "react";
import { AiOutlineGold } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiMoneyWavyLight } from "react-icons/pi";

import { COLORS } from "../assets/themes";

const Transport = () => {
  return (
    <div className="container mx-auto px-3 md:px-0 py-24 md:py-32">
      <h2
        style={{ color: COLORS.darkPrimary }}
        className="text-center text-3xl font md:text-5xl font-bold"
      >
        How it works
      </h2>
      <div className="grid grid-rows-3 gap-4 md:grid-cols-3  mt-4 md:mt-10">
        <div className="flex flex-col items-center">
          <IoChatbubblesOutline size={34} color={COLORS.goldPrimary} />
          <h3
            style={{ color: COLORS.stableGray }}
            className="text-center text-3xl font uppercase my-4 font-bold"
          >
            Step:1
          </h3>
          <p style={{ color: COLORS.darkPrimary }} className="font">
            A professional gold buying consultant will be available to test and value your gold.
            They will answer any questions you may have and sort the gold into different carat
            groups for testing and valuation.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineGold size={34} color={COLORS.goldPrimary} />
          <h3
            style={{ color: COLORS.stableGray }}
            className="text-center text-3xl font uppercase my-4 font-bold"
          >
            Step:2
          </h3>
          <p style={{ color: COLORS.darkPrimary }} className="font">
            The consultant will use traditional gold testing methods to determine the purity (carat
            value) of each item. They will examine the item with a magnifying glass to check for
            carat markings. Then, they will rub the gold on a textured black touch stone, leaving a
            faint line. By applying various acid solutions to the gold line, the consultant can
            determine the actual purity of the item.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <PiMoneyWavyLight size={34} color={COLORS.goldPrimary} />
          <h3
            style={{ color: COLORS.stableGray }}
            className="text-center text-3xl font uppercase my-4 font-bold"
          >
            Step:3
          </h3>
          <p style={{ color: COLORS.darkPrimary }} className="font">
            To ensure that the item is solid gold and not gold plated, the consultant will gently
            scratch a line into a non-prominent area of the item using a triangular file. They will
            then place a droplet of acid into the scratched line. If there is any reaction or change
            in color, it indicates that the item is not solid gold and is most likely gold plated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transport;
