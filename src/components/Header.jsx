import { LuMenu } from "react-icons/lu";

import { FiPhoneCall } from "react-icons/fi";

import { IoCloseCircle } from "react-icons/io5";

import React, { useEffect, useState } from "react";
import { COLORS } from "../assets/themes";
import { links } from "../utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToDiv = (id) => {
    const div = document.getElementById(id);
    div.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <header className="p-3 md:p-6 flex justify-between items-center">
    <header
      className={`p-3 md:p-6 flex justify-between items-center ${
        isScrolled ? "bg-gray-50 bg-opacity-20" : ""
      } sticky top-0 z-50 transition-all duration-500`}
    >
      <div className="flex  items-center   flex-1">
        <div>
          <h2 className="font text-black-100 md:text-3xl font-black">
            Fast Gold <span style={{ color: COLORS.goldPrimary }}>Africa</span>
          </h2>
          <p className="font text-sm font-semibold">Your Reliable Gold Trading Partner</p>
        </div>

        <div className="hidden md:flex gap-5 flex-1 justify-center">
          {links.map((link) => (
            <a
              style={{}}
              className="text-black-100 font-semibold  tracking-wide hovertext cursor-pointer transition-all font"
              key={link.id}
              onClick={() => scrollToDiv(link.to)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:flex w-[300px] gap-2 items-center">
        <FiPhoneCall size={24} color={COLORS.goldPrimary} />
        <p style={{ color: COLORS.goldPrimary }} className="font font-semibold ">
          +2766033432
        </p>
      </div>

      {/* mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <LuMenu size={34} color={COLORS.goldPrimary} />
        </button>
      </div>
      {isOpen && (
        <div
          style={{ backgroundColor: COLORS.darkPrimary }}
          className=" top-0 left-0 right-0 bottom-0  flex flex-col gap-4 items-center justify-center fixed p-3"
        >
          <div className="absolute top-3 right-3">
            <button onClick={() => setIsOpen(false)}>
              <IoCloseCircle size={34} color={COLORS.goldPrimary} />
            </button>
          </div>
          {links.map((link) => (
            <a
              style={{ color: COLORS.goldPrimary }}
              className="tracking-wide text-4xl font-extrabold font"
              key={link.id}
              onClick={() => {
                scrollToDiv(link.to);
                setIsOpen(false);
              }}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
