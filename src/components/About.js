import React from "react";
/*import AboutImg from "../assets/a1.jpg";*/

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid  items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-white-600 pb-2">
            About Me
          </h2>

          <p className="pb-5 font-bold mb-1" >
            Hi, My Name Is Sanchit Mishra . I am a Frontend Developer. I have completed my BSC IT from Kolhan University.
             My  academic score is 78%. 
            I have completed my 3 months internship in web development from Autocluster jamshedpur and another 3 months internship 
            from Netmore technology Jamshedpur. In skilled in many programming languages and environments, 
            such as Python,
             wordpress, php, html, css, js and MySQL. 
            </p>


        <p className="pb-5 font-bold mb-1">
            I have 3 months of experience in web development and I have worked on 3–4 projects. I worked for a small company 
            Netmore Technology as a front-end developer and website designer. I used HTML, CSS, PHP, SQL, and JavaScript.
             I would say I have a beginner's knowledge of React, PHP and SQL, but I am proficient with HTML, bootstrap,
              and CSS as I learned how to use them. I also frequently had meetings with clients to determine what their needs
               and requirements were. I spent a portion of my week researching competitors' content and monitoring our
                own progress so I could improve our processes when necessary. I am a quick learner, 
                so I would be happy to learn any other language you use or further develop my skills. I used WordPress because of
                 how customizable it is. I started using WordPress ten years ago as a beginner and worked my way up to coding and 
                 creating a variety of websites on the platform. 
          </p>
      
          
          <p className="pb-5 font-bold mb-1">
            I am proficient in Frontend skills like HTML, CSS, JavaScript,React.js, and many more.
          </p>

          
          <p className="font-bold mb-1">
            In my spare time I create YouTube videos and playing video games.
    
          </p>
        </div>
      
        
      </div>
    </section>
  );
};

export default About;
