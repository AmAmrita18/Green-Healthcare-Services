import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const NAV_OPTIONS = [
  {
    id: `NAV001`,
    title: `Home`,
    sectionId: `home`,
  },
  {
    id: `NAV002`,
    title: `About Us`,
    sectionId: `about`,
  },
  {
    id: `NAV003`,
    title: `Services`,
    sectionId: `services`,
  },
  {
    id: `NAV004`,
    title: `FAQ`,
    sectionId: `faq`,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="w-[85%] py-4 mx-auto flex justify-between items-center">
        <div className="">
          <img
            src="/logo.png"
            alt=""
            className="w-[80px] h-[60px] object-cover"
          />
        </div>
        <div className="hidden md:flex gap-x-8 font-500 text-[16px] leading-[18.78px] items-center">
          {NAV_OPTIONS.map(({ id, title, sectionId }) => (
            <a
              href={`#${sectionId}`}
              key={id}
              className="font-[500] text-[16px] hover:text-[#489E55] cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionId);
              }}
            >
              {title}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center">
          <a
            href="#contact2"
            className="py-2 px-4 bg-[#489E55] font-[600] text-[16px] text-white cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact2');
            }}
          >
            Contact Us
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-slate focus:outline-none"
          >
            {isMenuOpen ? (
              <RxCross2 className="text-[18px]" />
            ) : (
              <FaBars className="text-[18px]" />
            )}
          </button>
        </div>
        <div
          className={`space-y-4 w-[100%] max-w-[1200px] rounded-b-xl mx-auto px-4 md:hidden mt-16 py-7 bg-[#fff] ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {NAV_OPTIONS.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.sectionId}`}
              className={`px-3 py-2 font-[500]  text-[16px] hover:text-[#489E55] w-full flex flex-col justify-center items-center cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(nav.sectionId);
              }}
            >
              <p>{nav.title}</p>
            </a>
          ))}
          <div className="flex flex-col justify-center items-center gap-y-4">
            <a
              href="#contact2"
              className="py-2 px-4 bg-[#489E55] font-[600] text-[16px] text-white cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact2");
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
