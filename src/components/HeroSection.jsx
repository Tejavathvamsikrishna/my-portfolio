import React from "react";
import profile from "../assets/profile.png";
import linkedinVector from "../assets/linkedin.png";
import dotVector from "../assets/dot-y.png";
import githubVector from "../assets/github.png";
import dotVec from "../assets/dot.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-12 md:px-24 py-14 gap-10 bg-black text-white">
      <div className="md:w-1/2 space-y-5">
        <h2 className="font-['Manrope'] text-4xl md:text-4xl font-extrabold leading-tight text-justify">
          HI, I AM <br />
          ROBERT GARCIA.
        </h2>
        <p className="text-gray-400 max-w-md text-justify">
          A Sydney based front-end developer passionate about building
          accessible and user-friendly websites.
        </p>

        <div className="flex items-center gap-5 mt-6">
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center bg-[#D3E97A] text-black px-6 py-3 font-semibold rounded-full hover:bg-lime-500 transition"
          >
            <span>CONTACT ME</span>
            <img
              src={dotVec}
              alt="Dot"
              className="w-2 h-2 ml-2 inline-block align-middle"
            />
          </button>

          <a
            href="https://www.linkedin.com/in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition flex items-center justify-center relative"
          >
            <img
              src={linkedinVector}
              alt="LinkedIn"
              className="w-5 h-5 object-contain"
            />

            <img
              src={dotVector}
              alt="Dot"
              className="absolute w-1.5 h-1.5 top-1.5 left-3 size-0.2"
            />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition flex items-center justify-center"
          >
            <img
              src={githubVector}
              alt="GitHub"
              className="w-5 h-5 object-contain"
            />
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div
          className="bg-[#C7C7C7] p-0 shadow-lg"
          style={{ borderRadius: "16px" }}
        >
          <img
            src={profile}
            alt="Profile"
            className="rounded-3xl w-[350px] h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
