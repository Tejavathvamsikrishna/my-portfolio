import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage.jsx";

import "./App.css";
const App = () => {
  return (
    <section className="font-['Manrope'] origin-top-left scale-[1.5] w-[66.67%] bg-black overflow-x-hidden">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />

                <HeroSection />
                <hr className="border-gray-700" />
                <ProjectsSection />
                <hr className="border-gray-700" />
                <AboutSection />
                <hr className="border-gray-700" />

                <ContactSection />
              </>
            }
          />

          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </section>
  );
};

export default App;
