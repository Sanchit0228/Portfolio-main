import React from "react";
import Todo from "../assets/tbg.png";
import bus from "../assets/bus.png";
import music from "../assets/music.png";
import Weather from "../assets/wet.png";

const Projects = () => {
  const projects = [
    {
      img:Todo ,
      title: "To-Do-List 📝",
      desc: "Single Page Application Where Todos Can be added and deleted .Built with Html, CSS and javascript",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Sanchit0228/To-Do-List",
    },
   
    {
      img: Weather,
      title: "Weather App ❄️",
      desc: "A weather webpage where . I use openweather API and Built with Html, CSS and javascript.",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Sanchit0228/Weather-/tree/main/Weather",
    },
    
    {
      img:music ,
      title: " Web Music 🎵",
      desc: "A Music Player webpage where user can play any song from the list of 10 songa. Built with Html, CSS and javascript. ",
      live: "https://pluged.netlify.app/",
      code: "https://github.com/Sanchit0228/Web-Music-",
    },
    {
      img: bus,
      title: "KingofKings 🚍",
      desc: " Onlne Bus Reservation Ticket System . Built with Html, CSS ,php and MySQL",
      code: "https://github.com/Sanchit0228/Online-Bus-Ticket-Reservation-System/new/main?readme=1",
    },
  ];

  return (
 

    <section className="bg-primary text-black px-5 py-32" id="projects">
      
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-black-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
              <p className="py-5 text-center font-bold px-2 text-black">
                  {project.title}
                </p>
                <p className="py-5 text-center font-bold px-2 text-black">
                  {project.desc}
                </p>
                <div className="mx-auto">
                
                  <a
                     href={project.code} target="_blank" rel="noreferrer"
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
   
  );
};
<hr className="font-bold  mb-1" />

export default Projects;
