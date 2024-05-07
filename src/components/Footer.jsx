import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { FaChevronRight } from "react-icons/fa6";

import avatar from "../assets/59753.jpg";
import { COLORS } from "../assets/themes";
import { links, socialMedia } from "../utils";

const Footer = () => {
  const scrollToDiv = (id) => {
    const div = document.getElementById(id);
    div.scrollIntoView({ behavior: "instant" });
  };

  return (
    <footer className="bg-black-100">
      <FloatingWhatsApp
        phoneNumber="+263785404096"
        accountName="Fast Gold Africa"
        darkMode
        avatar={avatar}
      />
      {/*  */}
      <div className="container mx-auto md:flex gap-9 md:gap-20 p-6">
        <div style={{ color: COLORS.babyWhite }} className="">
          <h2 className="font md:text-3xl font-black">
            Fast Gold <span style={{ color: COLORS.goldPrimary }}>Africa</span>
          </h2>
          <p className="text-[14px]">Your Reliable Gold Trading Partner</p>
          <div className="my-5">
            <p>Follow us on:</p>
            <div className="flex gap-3">
              {socialMedia.map((social) => (
                <a key={social.id} href={social.socialLink}>
                  {social.socialIcon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <h4 style={{ color: COLORS.babyWhite }} className="md:text-2xl font-bold uppercase">
            Menu
          </h4>
          <div className="flex flex-col mt-2 gap-1">
            {links.map((link) => (
              <a
                onClick={() => scrollToDiv(link.to)}
                style={{ color: COLORS.babyWhite }}
                className="flex items-center cursor-pointer hover:group gap-5 hover:translate-x-1 transition-all"
              >
                {link.title} <FaChevronRight size={12} color={COLORS.babyWhite} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: COLORS.goldPrimary }} className="h-[0.5px] w-full my-4" />
      {/*  */}
      <div className="text-center  p-6">
        <p className="text-[14px]" style={{ color: COLORS.babyWhite }}>
          Fast Gold Africa, &copy; copyright all rights reserved.{" "}
          <a target="_blank" href="http://www.rnd.co.zw">
            Designed by RND
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
