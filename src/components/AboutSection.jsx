import React from "react";

const AboutSection = () => {
  return (
    <section className="px-5 sm:px-8 md:px-20 lg:px-32 py-14 md:py-24 bg-black text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
      {/* ===== Left Side - Heading ===== */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight w-full md:w-1/3 text-center md:text-left">
        ABOUT ME
      </h2>

      {/* ===== Right Side - Content ===== */}
      <div className="w-full md:w-2/3 space-y-5 text-center md:text-justify">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-100 leading-snug">
          I’m a passionate Front-End Developer based in Sydney with a background
          in Mechanical Engineering.
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          I love building responsive, user-friendly web applications with a
          focus on accessibility and design. Currently exploring React.js,
          Webflow, and creative UI design. I’m a curious learner who enjoys
          solving challenges and continuously improving my skills.
          <br />
          When I’m not coding, you’ll find me playing football, practicing
          photography, or enjoying a game of Valorant.
        </p>

        <a
          href="/about"
          className="inline-block mt-4 text-[#D3E97A] text-xs sm:text-sm md:text-base font-semibold border-b-2 border-[#D3E97A] hover:text-lime-400 hover:border-lime-400 transition duration-300"
        >
          MORE ABOUT ME →
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
