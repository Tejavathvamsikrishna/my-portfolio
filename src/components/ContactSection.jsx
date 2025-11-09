import React, { useState } from "react";
import Swal from "sweetalert2";
import linkedinIcon from "../assets/linkedin.png";
import dotVector from "../assets/dot-y.png";
import githubIcon from "../assets/github.png";
import xIcon from "../assets/x.png";
import instagramIcon from "../assets/instagram.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please fill in all fields before submitting.",
        confirmButtonColor: "#D3E97A",
        background: "#1A1A1A",
        color: "#fff",
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#D3E97A",
        background: "#1A1A1A",
        color: "#fff",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out. I’ll get back to you soon!",
      confirmButtonColor: "#D3E97A",
      background: "#1A1A1A",
      color: "#fff",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col md:flex-row justify-between gap-10 md:gap-16 px-5 sm:px-8 md:px-20 lg:px-32 py-14 md:py-24 bg-black text-white overflow-hidden"
    >
      {/* ===== Left Side ===== */}
      <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          LET’S CONNECT
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
          Say hello at{" "}
          <a
            href="mailto:robertgarcia@gmail.com"
            className="text-[#D3E97A] hover:underline"
          >
            robertgarcia@gmail.com
          </a>
        </p>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
          For more info, here’s my{" "}
          <a href="#" className="text-[#D3E97A] hover:underline">
            resume
          </a>
        </p>

        {/* ===== Social Icons ===== */}
        <div className="flex justify-center md:justify-start items-center gap-4 sm:gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in"
            target="_blank"
            rel="noopener noreferrer"
            className="relative hover:opacity-80 transition inline-block transform hover:scale-110"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <img
              src={dotVector}
              alt="Dot"
              className="absolute w-[4px] h-[4px] sm:w-[5px] sm:h-[5px]"
              style={{ top: "-6px", left: "1px" }}
            />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition inline-block transform hover:scale-110"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition inline-block transform hover:scale-110"
          >
            <img
              src={xIcon}
              alt="X"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition inline-block transform hover:scale-110"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          </a>
        </div>
      </div>

      {/* ===== Right Side (Form) ===== */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 space-y-5 sm:space-y-6 text-center md:text-left"
      >
        {["name", "email", "subject", "message"].map((field, i) => (
          <div key={i}>
            <label
              className="block text-gray-300 text-xs sm:text-sm mb-2 text-left"
              htmlFor={field}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={
                  field === "name" ? "John Doe" : field === "" ? "" : ""
                }
                className="w-full bg-gray-900 text-gray-200 p-2 sm:p-3 md:p-4 rounded-md text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
              />
            ) : (
              <textarea
                name={field}
                rows="4"
                value={formData[field]}
                onChange={handleChange}
                placeholder=""
                className="w-full bg-gray-900 text-gray-200 p-2 sm:p-3 md:p-4 rounded-md text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
              ></textarea>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-[#D3E97A] text-black font-semibold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-lime-500 transition duration-300 shadow-md hover:shadow-lg"
        >
          SUBMIT
        </button>
      </form>

      {/* ===== Footer Text ===== */}
      <p className="absolute bottom-5 left-5 sm:left-8 md:left-20 text-gray-600 text-[10px] sm:text-xs md:text-sm">
        © 2023 Robert Garcia
      </p>
    </section>
  );
};

export default ContactSection;
