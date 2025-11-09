import React from "react";
import Navbar from "../components/Navbar.jsx";
import ProjectSection from "../components/ProjectsSection.jsx";

const WorkPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <ProjectSection />
    </div>
  );
};

export default WorkPage;
