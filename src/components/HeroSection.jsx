import React from "react";
import profile from "../assets/profile.png";
import linkedinVector from "../assets/linkedin.png";
import dotVector from "../assets/dot-y.png";
import githubVector from "../assets/github.png";
import dotVec from "../assets/dot.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-20 lg:px-24 py-10 sm:py-14 md:py-20 bg-black text-white overflow-hidden">
      {/* ===== Left Side (Text + Buttons) ===== */}
      <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
        {/* Title */}
        <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          HI, I AM <br />
          <span className="text-[#D3E97A]">ROBERT GARCIA.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
          A Sydney-based front-end developer passionate about building
          accessible and user-friendly websites.
        </p>

        {/* Buttons & Icons */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 md:gap-6 mt-5 sm:mt-6">
          {/* Contact Button */}
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center bg-[#D3E97A] text-black text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-3 font-semibold rounded-full hover:bg-lime-500 transition duration-300 shadow-md hover:shadow-lg"
          >
            <span>CONTACT ME</span>
            <img
              src={dotVec}
              alt="Dot"
              className="w-2 h-2 ml-2 inline-block align-middle"
            />
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-700 transition flex items-center justify-center relative transform hover:scale-110"
          >
            <img
              src={linkedinVector}
              alt="LinkedIn"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
            />
            <img
              src={dotVector}
              alt="Dot"
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 top-1 left-2.5 sm:top-1.5 sm:left-3"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-700 transition flex items-center justify-center transform hover:scale-110"
          >
            <img
              src={githubVector}
              alt="GitHub"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
            />
          </a>
        </div>
      </div>

      {/* ===== Right Side (Profile Image) ===== */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="bg-[#C7C7C7] p-[2px] sm:p-1.5 md:p-3 shadow-lg rounded-3xl">
          <img
            src={profile}
            alt="Profile"
            className="rounded-3xl w-[180px] sm:w-[260px] md:w-[350px] lg:w-[400px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
