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
    <section className="px-12 md:px-24 py-24 bg-black text-white">
      <div className="mb-12 text-left">
        <h2 className="text-4xl md:text-4xl font-extrabold mb-3">
          FEATURED PROJECTS
        </h2>
        <p className="text-gray-400 max-w-xl">
          Here are some of the selected projects that showcase my passion for
          <br />
          front-end development.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-10 md:gap-16 items-start text-left"
          >
            <div className="md:w-1/2 bg-[#1A1A1A] p-10 rounded-2xl shadow-lg">
              {project.tag && (
                <div className="text-sm bg-gray-800 text-white px-3 py-3 rounded-full inline-block mb-4">
                  {project.tag}
                </div>
              )}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`rounded-xl w-full h-60 object-cover ${project.imageClass}`}
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-2xl font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-2">
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  Project Info
                </h4>
              </div>

              <div className="border-t border-[#1A1A1A] mb-4">
                {project.info.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="flex justify-between text-sm py-2">
                      <span className="text-white">{item.label}</span>
                      <span className="text-gray-200">{item.value}</span>
                    </div>
                    {i !== project.info.length - 1 && (
                      <div className="border-t border-gray-700" />
                    )}
                  </React.Fragment>
                ))}
                <hr className="border-gray-700 mt-2" />
              </div>

              <div className="flex gap-6 mt-2">
                {index === 1 ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#D3E97A] hover:underline underline-offset-4 font-semibold text-sm transition"
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
                      className="flex items-center gap-2 text-[#D3E97A] hover:underline underline-offset-4 font-semibold text-sm transition"
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
                      className="flex items-center gap-2 text-[#D3E97A] hover:underline underline-offset-4 font-semibold text-sm transition"
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
