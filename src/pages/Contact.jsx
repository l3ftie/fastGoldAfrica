import React, { useState } from "react";
import img1 from "../assets/goldgold.jpg";
import img2 from "../assets/goldgold2.jpg";

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
      <div className="col-span-4 px-3 md:px-0 py-24 md:py-32 bg-black-100 h-screen">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font text-blue-50 uppercase text-[14px]" htmlFor="name">
              Name
            </label>
            <input
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
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
