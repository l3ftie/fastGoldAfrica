import React from "react";
import { COLORS } from "../assets/themes";
import { CallToAction, Hero } from "../components";
import About from "./About";
import Contact from "./Contact";
import Transport from "./Transport";

const Home = () => {
  return (
    <main>
      <div id="home" className="min-h-screen md:h-screen">
        <Hero />
      </div>
      <div id="about" className="min-h-screen bg-black-100">
        <About />
      </div>
      <div id="howItWorks" className="min-h-screen md:h-screen">
        <CallToAction />
        <Transport />
      </div>
      <div id="contact" className="min-h-screen md:h-screen">
        <Contact />
      </div>
    </main>
  );
};

export default Home;
