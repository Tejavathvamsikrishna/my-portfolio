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
      className="relative px-12 md:px-24 py-24 bg-black text-white flex flex-col md:flex-row justify-between gap-16"
    >
      <div className="md:w-1/2 space-y-6 text-justify">
        <h2 className="text-5xl md:text-5xl font-extrabold leading-tight text-left">
          LET’S CONNECT
        </h2>

        <p className="text-gray-400">
          Say hello at{" "}
          <a
            href="mailto:robertgarcia@gmail.com"
            className="text-[#D3E97A] hover:underline"
          >
            robertgarcia@gmail.com
          </a>
        </p>

        <p className="text-gray-400">
          For more info, here’s my{" "}
          <a href="#" className="text-[#D3E97A] hover:underline">
            resume
          </a>
        </p>

        <div className="flex items-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in"
            target="_blank"
            rel="noopener noreferrer"
            className="relative hover:opacity-80 transition inline-block"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />

            <img
              src={dotVector}
              alt="Dot"
              className="absolute w-[5px] h-[5px]"
              style={{
                top: "-6px",
                left: "1px",
              }}
            />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition inline-block"
          >
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition inline-block"
          >
            <img src={xIcon} alt="X" className="w-6 h-6" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition inline-block"
          >
            <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="md:w-1/2 space-y-6 text-justify">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-gray-900 text-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
            className="w-full bg-gray-900 text-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder=""
            className="w-full bg-gray-900 text-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder=""
            className="w-full bg-gray-900 text-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D3E97A]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#D3E97A] text-black font-semibold px-8 py-3 rounded-full hover:bg-lime-500 transition"
        >
          SUBMIT
        </button>
      </form>

      <p className="absolute bottom-10 left-12 text-gray-600 text-l mb-5">
        © 2023 Robert Garcia
      </p>
    </section>
  );
};

export default ContactSection;
