import React from "react";
import Navbar from "../components/Navbar.jsx";
import linkedinIcon from "../assets/linkedin.png";
import dotVector from "../assets/dot-y.png";
import githubIcon from "../assets/github.png";
import dotVec from "../assets/dot.png";
import aboutImg from "../assets/vamsi.png";
import ContactSection from "../components/ContactSection.jsx";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* ===== ABOUT SECTION ===== */}
      <section className="px-5 sm:px-8 md:px-20 lg:px-32 py-14 md:py-24 bg-black text-white min-h-screen">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold md:w-1/3 leading-tight text-center md:text-left">
            ABOUT ME
          </h2>

          <div className="md:w-2/3 space-y-5 text-center md:text-justify">
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-100 leading-snug">
              I’m a passionate Front-End Developer based in Sydney with a
              background in Mechanical Engineering.
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              I’m a front-end developer based in Sydney looking for exciting
              opportunities. I focus on accessibility and clean user
              experiences. Passionate and curious about solving problems.
              Currently, I’m exploring React.js, Webflow, and design. When I’m
              not programming, I enjoy football, photography, and gaming.
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 mt-6">
              {/* Download Resume */}
              <a
                href="https://drive.google.com/file/d/your-resume-id/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center bg-[#D3E97A] text-black text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-full hover:bg-lime-500 transition duration-300">
                  DOWNLOAD RESUME
                  <img
                    src={dotVec}
                    alt="Dot"
                    className="w-2 h-2 ml-2 inline-block align-middle"
                  />
                </button>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gray-800 p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-700 transition flex items-center justify-center transform hover:scale-110"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <img
                  src={dotVector}
                  alt="Dot"
                  className="absolute w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] top-1 left-2 sm:top-1.5 sm:left-3"
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
                  src={githubIcon}
                  alt="GitHub"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* About Image */}
        <div className="flex justify-center">
          <div className="bg-[#C7C7C7] p-[2px] sm:p-2 md:p-3 rounded-2xl shadow-lg">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl w-[200px] sm:w-[300px] md:w-[420px] lg:w-[450px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 mt-14 md:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold md:w-1/3 text-center md:text-left">
            MY CAPABILITIES
          </h2>

          <div className="md:w-2/3 space-y-5 text-center md:text-justify">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              I am always looking to add more skills. Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6">
              {[
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "JQUERY",
                "ACCESSIBILITY",
                "FIGMA",
                "TAILWIND CSS",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="border border-gray-700 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm text-gray-200 hover:border-[#D3E97A] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-700" />

      {/* ===== EXPERIENCE SECTION ===== */}
      <section className="px-5 sm:px-8 md:px-20 lg:px-32 pt-14 pb-10 bg-black text-white">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold md:w-1/3 text-center md:text-left">
            MY EXPERIENCE
          </h2>

          <div className="md:w-2/3 space-y-8 md:space-y-10 text-center md:text-justify">
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Freelance Developer
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Nov 2023 — Present
                </p>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
                Worked on multiple freelance front-end projects, focusing on
                responsive layouts and accessibility. Improved performance and
                delivered dynamic UI experiences for small businesses.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Front-End Intern{" "}
                  <span className="text-[#D3E97A] font-normal">Roos Tech</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Sep 2023 — Nov 2023
                </p>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
                Collaborated on building React components, optimized web
                performance, and implemented UI animations with modern tools.
                Enhanced skills in design-to-code translation and responsive
                architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-700" />

      {/* ===== CONTACT SECTION ===== */}
      <ContactSection />
    </>
  );
};

export default AboutPage;
