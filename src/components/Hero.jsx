import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ scrollToSection }) => {
  const bgImage = `hero.jpg`;
  return (
    <div
      id="home"
      className="w-full min-h-screen"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-[100%] bg-black/45">
        <div className="w-[85%] mx-auto min-h-screen flex flex-col justify-center text-white">
          <h1 className="md:text-[80px] text-[60px] font-[700] leading-[88px]">
            Embrace Wellness
          </h1>
          <div className="font-[500] text-[18px] leading-[26px] mt-6">
            <p>
              In the heart of every family, there’s a story of health and care.{" "}
            </p>
            <p>
              At Green Healthcare Service Ltd., we become a part of your story,
              bringing{" "}
            </p>
            <p>support, strength, and a personal touch to every interaction.</p>
          </div>
          <div className="mt-8">
            <Link >
              <button className="py-4 px-6 bg-[#FDF04F] font-[700] rounded-md text-[16px] text-[#262E27] leading-[18.78px]" onClick={() => scrollToSection("contact2")}>Get in touch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
