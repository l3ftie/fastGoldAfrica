import React, { useState } from "react";
import img1 from "../assets/goldgold.jpg";
import img2 from "../assets/goldgold2.jpg";
import { COLORS } from "../assets/themes.jsx";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" md:grid md:grid-cols-6 h-full">
      <div className="col-span-2 hidden md:flex flex-col">
        <div className="h-[50vh]  overflow-hidden">
          <img src={img1} className=" object-contain" alt="fast gold africa contact us" />
        </div>
        <div className="h-[50vh] overflow-hidden">
          <img src={img2} className="  object-contain" alt="fast gold africa contact us" />
        </div>
      </div>
      <div className="col-span-4 p-3 md:px-0 py-24 md:py-32 bg-black-100 h-screen">
        <form className="w-full md:w-2/3 mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font text-blue-50 uppercase text-[14px]" htmlFor="name">
              Name
            </label>
            <input
              className="p-2 rounded-lg"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font text-blue-50 uppercase text-[14px]" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 rounded-lg"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font text-blue-50 uppercase text-[14px]" htmlFor="message">
              message
            </label>
            <textarea
              className="p-2 rounded-lg"
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="my-3 w-full p-3 rounded-lg"
            style={{ backgroundColor: COLORS.goldPrimary }}
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
