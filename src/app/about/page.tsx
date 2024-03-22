import React from "react";
import AboutImg from "@/app/assets/about.png";
import Image from "next/image";
const Aboutpage = () => {
  const config = {
    line1:
      "Hi, My name is Silambarasan. I am a  web developer and Designer. I built beautiful Websites with Html, Css, Bootstrap and Javascript",
    line2:
      "I am proficient in Frontend skills like React js, TypeScript, Axios, Tailwind CSS, SaSS, Css3 and many more.",
    line3:
      "I thrive in collaborative environments and enjoy working with teams to brainstorm ideas and solve complex problems. My goal is to create impactful web experiences that delight users and achieve business objectives.",
  };

  return (
    <div>
      <section
        className="flex flex-col md:flex-row bg-secondary px-5"
        id="about"
      >
        <div className="py-5 md:w-1/2">
          <Image src={AboutImg} alt="about" />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
              About Me
            </h1>
            <p className="pb-5">{config.line1}</p>
            <p className="pb-5">{config.line2}</p>
            <p className="pb-5">{config.line3}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
