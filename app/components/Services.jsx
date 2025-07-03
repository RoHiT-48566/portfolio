import { serviceData } from "@/assets/assets";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text0-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a full stack developer from Hyderabad, Telangana with 2 years of
        experience in building Web Applications
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Services;
