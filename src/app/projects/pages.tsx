import React from "react";
import Poorvika from "@/app/assets/poorvika.png";
import Biriyani from "@/app/assets/biriyani.png";
import Geams from "@/app/assets/gems.png";
import Image from "next/image";

const Projectspages = () => {
  const config = {
    projects: [
      {
        image: Poorvika,
        description: "A Ecommerce Website. Built with MERN Stack.",
        link: "https://www.poorvika.com/privacy-policy",
      },
      {
        image: Biriyani,
        description: "Static Website.Built with HTML,CSS,JAVASCRIPT and PHP",
        link: "https://www.sshyderabadbiryani.com/about.php",
      },
      {
        image: Geams,
        description: "Static Website.Built with HTML,CSS,JAVASCRIPT and PHP",
        link: "https://www.jaipurgemsnjewel.in/",
      },
    ],
  };

  return (
    <div>
      <section
        id="projects"
        className="flex  flex-col px-5 py-32 justify-center bg-primary text-white"
      >
        <div className="w-full">
          <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
              Projects
            </h1>
            <p>
              These are some of my best projects. I have built these with Html,
              Css, Javascript, Tailwind, React, Next js Check them out.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row px-10 gap-5">
            {config.projects.map((project) => (
              <div className="relative">
                <Image
                  className="h-[300px] w-[500px]"
                  src={project.image}
                  alt="project"
                />
                <div className="project-desc flex flex-col justify-center items-center   ">
                  <div className=" flex flex-col items-center justify-center ">
                    <p className="text-center px-5 py-5">
                      {project.description}
                    </p>
                    <div className=" cursor-pointer">
                      <a className="btn" target="_blank" href={project.link}>
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projectspages;
