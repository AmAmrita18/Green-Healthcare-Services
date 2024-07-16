import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };
  return (
    <div className="w-full md:mt-36 mt-10 py-12 bg-[#F3FBF4]">
      <div className="w-[85%] mx-auto flex md:flex-row flex-col md:gap-y-0 gap-y-7 justify-between items-center">
        <div className="w-[100%] md:w-[47%] flex flex-col">
          <img
            src="/logo.png"
            alt=""
            className="w-[80px] h-[60px] object-cover"
          />
          <p className="mt-5 w-[80%] text-[16px] leading-[26px]">
            Green Healthcare Service Ltd. - Where Compassion Meets Excellence.
            Delivering personalized, high-quality healthcare services to empower
            your well-being, right at home.
          </p>
          <div className="flex items-center py-2 gap-x-6 mt-16">
            <FaFacebook className="w-[20px] h-[20px]" />
            <FaInstagram className="w-[20px] h-[20px]" />
            <FaLinkedin className="w-[20px] h-[20px]" />
          </div>
        </div>
       
        <div className="w-[100%]  md:w-[41%] flex flex-col md:gap-y-0 gap-y-5 justify-between md:min-h-[40vh]">
        <p className="font-[600] text-center text-[20px] leading-[23.48px] text-[#262E27]">
              Quick Links:
            </p>
          <div className="w-full md:mt-5 flex md:gap-x-5 gap-x-5 md:justify-end justify-center">
            <p className="font-[600] md:block hidden text-[20px] leading-[23.48px] text-[#262E27]">
              Quick Links:
            </p>
            <button
              onClick={() => scrollToSection("home")}
              className="text-[18px] leading-[21.13px] text-[#262E27]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[18px] leading-[21.13px] text-[#262E27]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[18px] leading-[21.13px] text-[#262E27]"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact2")}
              className="text-[18px] leading-[21.13px] text-[#262E27]"
            >
              Contact
            </button>
          </div>
          <div className="w-full flex md:justify-end justify-center">
            <p className="text-[12px] leading-[20.34px] md:text-right text-center w-[380px]">
              Copyright 2024{" "}
              <span className="font-[700]">Green Healthcare Service Ltd</span>,
              All Rights Reserved Built With Passion by{" "}
              <span className="font-[700]">The Meraki Studio Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
