import React from "react";
import Navbar from "../components/Navbar.jsx";
import ContactSection from "../components/ContactSection.jsx";

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <ContactSection />
    </div>
  );
};

export default ContactPage;
