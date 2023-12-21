import React, { useState, useRef } from "react";
import "../contact.css";

import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    Phone: "",
    Comment: "",
  });
  const form = useRef();

  function handleInputChange(e) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.status);
          if (result.status === 200)
            setValues((prev) => ({
              ...prev,
              name: "",
              email: "",
              Comment: "",
              Phone: "",
            }));
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className="bg-secondery px-5 py-20" id="contact">
      <div className="contactFm">
        <div className="text-center md:w-[60%] mx-auto text-white">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-black Stone-600 pb-2">
            Contact Me
          </h2>

          <form autoComplete="off" onSubmit={handleSubmit} ref={form}>
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={handleInputChange}
              className="feedback-input"
              placeholder="Name"
            />
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleInputChange}
              className="feedback-input"
              placeholder="Email"
            />
            <input
              name="Phone"
              type="tel"
              value={values.Phone}
              onChange={handleInputChange}
              className="feedback-input"
              placeholder="Enter your Phone No"
            />
            <textarea
              name="Comment"
              value={values.Comment}
              onChange={handleInputChange}
              className="feedback-input"
              placeholder="Comment"
            ></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
        <div className=" flex justify-center items-center ">
          <a
            href="https://www.linkedin.com/in/sanchit-mishra-88102a1b5"
            rel="noreferrer"
            target="_blank"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            {" "}
            <AiOutlineLinkedin size={40} />{" "}
          </a>
          <a
            href="https://github.com/Sanchit0228"
            rel="noreferrer"
            target="_blank"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            {" "}
            <AiOutlineGithub size={40} />{" "}
          </a>
          <a
            href="https://twitter.com/SANCHIT04472483?s=09"
            rel="noreferrer"
            target="_blank"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            {" "}
            <AiOutlineTwitter size={40} />{" "}
          </a>
          <a
            href="mailto:sanchitmishra2000@gmail.com "
            rel="noreferrer"
            target="_blank"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            {" "}
            <AiOutlineMail size={40} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
}
