import React from "react";
import { BiSolidBank } from "react-icons/bi";
import { services } from "../constants/services";

const Services = () => {
  return (
    <div className="w-full py-10" id="services">
      <div className="w-[85%] mx-auto">
        <h2 className="text-[48px] leading-[56px] font-[700] text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-12 mt-12">
          {services.map(({ id, title, description }) => (
            <div key={id} className="px-12 py-12  gap-y-2 rounded-md shadow-lg">
              <div className="bg-[#489E55] py-2 px-2 w-[48px] h-[48px] rounded-lg flex justify-center items-center">
                <BiSolidBank className="w-[24px] h-[24px] text-white" />
              </div>
              <h4 className="text-[20px] font-[600] py-3">{title}</h4>
              <p className="text-[18px] leading-[26px] font-[400] text-[#848484]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;