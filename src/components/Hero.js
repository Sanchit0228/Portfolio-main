import React from "react";
/*import HeroImg from "../assets/5.jpg";*/

import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Hero = () => {
  return (
    
    <section className="bg-primary px-5 text-white py-32" id="bg" >
      
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am Sanchit Mishra <span className="text-accent"></span><br />
            Frontend Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-5 ">

          <a
              href="https://www.linkedin.com/in/sanchit-mishra-88102a1b5"
               rel="noreferrer" target="_blank"
        
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/Sanchit0228"
              rel="noreferrer" target="_blank"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://twitter.com/SANCHIT04472483?s=09"
              rel="noreferrer" target="_blank"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
           
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#000000] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>
        </div>

       
      
    </section>
    
  );
};

export default Hero;
