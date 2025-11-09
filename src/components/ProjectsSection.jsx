import React from "react";
import githubIcon from "../assets/github.png";
import externalIcon from "../assets/external-link.png";
import project1 from "../assets/adventure.png";
import project2 from "../assets/news.png";
import project3 from "../assets/ecommerce.png";

const ProjectsSection = () => {
  const projects = [
    {
      tag: "Conceptual Work",
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      info: [
        { label: "Year", value: "2023" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: {
        demo: "https://adventure-time-landing.netlify.app/",
        github: "https://github.com/victorwilson/adventure-time-landing",
      },
      image: project1,
      imageClass: "object-center",
    },
    {
      tag: "",
      title: "Blog site for World News",
      description:
        "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
      info: [
        { label: "Client", value: "World News" },
        { label: "Year", value: "2022" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: {
        demo: "https://world-news-react.netlify.app/",
      },
      image: project2,
      imageClass: "object-top",
    },
    {
      tag: "Challenge",
      title: "E-commerce product page",
      description:
        "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      info: [
        { label: "Year", value: "2022" },
        { label: "Role", value: "Front-end Developer" },
      ],
      links: {
        demo: "https://ecommerce-product-page.netlify.app/",
        github: "https://github.com/omgupta1608/ecommerce-product-page",
      },
      image: project3,
    },
  ];

  return (
    <section className="px-5 sm:px-8 md:px-20 lg:px-24 py-16 md:py-24 bg-black text-white">
      {/* ===== Header Section ===== */}
      <div className="mb-10 md:mb-14 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
          FEATURED PROJECTS
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Here are some of the selected projects that showcase my passion for
          front-end development and interactive UI design.
        </p>
      </div>

      {/* ===== Projects List ===== */}
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-start text-left"
          >
            {/* ===== Left: Project Image ===== */}
            <div className="md:w-1/2 bg-[#1A1A1A] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
              {project.tag && (
                <div className="text-xs sm:text-sm bg-gray-800 text-white px-3 py-1.5 rounded-full inline-block mb-3">
                  {project.tag}
                </div>
              )}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`rounded-xl w-full h-44 sm:h-56 md:h-64 object-cover ${project.imageClass}`}
                />
              </div>
            </div>

            {/* ===== Right: Project Info ===== */}
            <div className="md:w-1/2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-3">
                <h4 className="text-base sm:text-lg font-semibold text-gray-200 mb-2">
                  Project Info
                </h4>
              </div>

              <div className="border-t border-[#1A1A1A] mb-3">
                {project.info.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="flex justify-between text-xs sm:text-sm py-2">
                      <span className="text-white">{item.label}</span>
                      <span className="text-gray-300">{item.value}</span>
                    </div>
                    {i !== project.info.length - 1 && (
                      <div className="border-t border-gray-700" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* ===== Links ===== */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-4">
                {index === 1 ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#D3E97A] hover:text-lime-400 hover:underline underline-offset-4 font-semibold text-sm transition"
                  >
                    VIEW PROJECT
                    <img
                      src={externalIcon}
                      alt="External Link"
                      className="w-4 h-4"
                    />
                  </a>
                ) : (
                  <>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#D3E97A] hover:text-lime-400 hover:underline underline-offset-4 font-semibold text-sm transition"
                    >
                      LIVE DEMO
                      <img
                        src={externalIcon}
                        alt="Live Demo"
                        className="w-4 h-4"
                      />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#D3E97A] hover:text-lime-400 hover:underline underline-offset-4 font-semibold text-sm transition"
                    >
                      SEE ON GITHUB
                      <img src={githubIcon} alt="GitHub" className="w-4 h-4" />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
