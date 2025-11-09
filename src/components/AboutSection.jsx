import React from "react";

const AboutSection = () => {
  return (
    <section className="px-12 md:px-24 py-24 bg-black text-white flex flex-col md:flex-row justify-between items-start gap-16">
      <h2 className="text-5xl md:text-5xl font-extrabold leading-tight md:w-1/3">
        ABOUT ME
      </h2>

      <div className="md:w-2/3 space-y-6 text-justify">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-100 leading-snug">
          I am a front-end developer based in Sydney.
          <br /> Has Mechanical Engineering background.
        </h3>

        <p className="text-gray-400 leading-relaxed text-justify">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill.
        </p>

        <a
          href="/about"
          className="inline-block text-[#D3E97A] text-sm font-semibold border-b border-[#D3E97A] hover:text-lime-400 transition duration-300"
        >
          MORE ABOUT ME
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
