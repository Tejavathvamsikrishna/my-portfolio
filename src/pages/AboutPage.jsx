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

      <section className="px-12 md:px-24 py-24 bg-black text-white min-h-screen">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-16">
          <h2 className="text-5xl md:text-5xl font-extrabold md:w-1/3 leading-tight">
            ABOUT ME
          </h2>

          <div className="md:w-2/3 space-y-6 text-justify">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-100 leading-snug">
              I am a front-end developer based in Sydney. <br />
              Has Mechanical Engineering background.
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring Reactjs, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://drive.google.com/file/d/your-resume-id/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center bg-[#D3E97A] text-black px-6 py-3 font-semibold rounded-full hover:bg-lime-500 transition">
                  DOWNLOAD RESUME
                  <img
                    src={dotVec}
                    alt="Dot"
                    className="w-2 h-2 ml-2 inline-block align-middle"
                  />
                </button>
              </a>

              <a
                href="#"
                className="relative bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition flex items-center justify-center"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />

                <img
                  src={dotVector}
                  alt="Dot"
                  className="absolute w-1.5 h-1.5 top-1.5 left-3 size-0.2"
                />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition flex items-center justify-center"
              >
                <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="bg-[#C7C7C7] p-0 flex justify-center"
          style={{ borderRadius: "16px" }}
        >
          <img
            src={aboutImg}
            alt="About"
            className="rounded-2xl w-[400px] md:w-[450px] h-auto object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mt-20">
          <h2 className="text-3xl md:text-3xl font-extrabold md:w-1/3">
            MY CAPABILITIES
          </h2>

          <div className="md:w-2/3 space-y-6 text-justify">
            <p className="text-gray-400 leading-relaxed">
              I am always looking to add more skills. Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
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
                  className="border border-gray-700 px-5 py-2 rounded-full text-sm text-gray-200 hover:border-[#D3E97A] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <hr className=" border-gray-700 " />

      <section className="px-12 md:px-24 pt-16 pb-0 bg-black text-white ">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <h2 className="text-3xl md:text-3xl font-extrabold md:w-1/3">
            MY EXPERIENCE
          </h2>

          <div className="md:w-2/3 space-y-10">
            <div>
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-white">
                  Freelance Developer
                </h4>
                <p className="text-sm text-gray-400">Nov 2023 — Present</p>
              </div>
              <p className="text-gray-400 mt-2 leading-relaxed">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-white">
                  Front-End Intern <br />
                  <span className="text-[#D3E97A] font-normal">Roos Tech</span>
                </h4>
                <p className="text-sm text-gray-400">Sep 2023 — Nov 2023</p>
              </div>
              <p className="text-gray-400 mt-2 leading-relaxed">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="mt-16 mb-0 border-gray-700" />

      <ContactSection className="mt-0" />
    </>
  );
};

export default AboutPage;
