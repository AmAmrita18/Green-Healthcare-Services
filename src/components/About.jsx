import React from "react";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { Link } from "react-router-dom";

const ABOUT_US = [
  {
    id: `ABOUT001`,
    feat: `Custom-fit plans for your unique needs.`,
  },
  {
    id: `ABOUT002`,
    feat: `Compassionate, skilled care professionals.`,
  },
  {
    id: `ABOUT003`,
    feat: `Reliable support, any time, day or night.`,
  },
  {
    id: `ABOUT004`,
    feat: `Comprehensive care for complete wellness.`,
  },
];

const About = () => {
  const bgImage = "/about.png";
  return (
    <div className="w-full" id="about">
      <div className="w-[85%] max-w-[1300px] mx-auto flex md:flex-row flex-col md:gap-y-0 gap-y-8 justify-between items-center min-h-[80vh] py-20">
        <div className="w-[100%] md:w-[50%] relative flex justify-end mt-16">
          <div
            className="w-[360px] md:w-[558px] h-[480px] md:h-[600px] absolute top-[-50px] right-[50px]"
            style={{
              backgroundImage: `url('${bgImage}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          ></div>
          <div className="w-[360px] md:w-[558px] h-[480px] md:h-[600px] border-2 border-[#489E55] top-[50px]"></div>
        </div>
        <div className="w-[100%] md:w-[41%] flex flex-col justify-center gap-y-4">
          <h2 className="text-[48px] leading-[56.35px] font-[700]">About Us</h2>
          <p className="text-[#848484] font-[400] text-[18px] leading-7">
            Behind the Green Healthcare emblem is a dedicated team, selected not
            just for their skills but for their passion for making a difference.
            We are listeners, healers, and your steadfast companions on this
            journey to wellness.
          </p>
          <div className="flex flex-col gap-y-3 text-[#848484] font-[400] text-[18px] mt-2">
            {ABOUT_US.map(({ id, feat }) => (
              <div key={id} className="flex items-center gap-x-2">
                <span className="w-[26px]">
                  <MdOutlineLibraryAddCheck className="w-[24px] h-[24px] text-[#489E55]" />
                </span>
                <p>{feat}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link
              to="#"
              className="py-4 px-6 bg-[#FDF04F] rounded-md font-[700] text-[16px] leading-[18.78px] text-[#262E27]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
