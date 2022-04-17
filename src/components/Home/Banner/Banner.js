import React from "react";
import banner from "../../../images/banner/banner.png";
import banner2 from "../../../images/banner/banner2.png";

const Banner = () => {
  return (
    <div className="relative">
      <img className="block md:hidden my-4" src={banner2} alt="" />
      <img className="hidden md:block mb-4" src={banner} alt="" />
      <div className=" absolute left-0 right-0 mx-auto w-3/4 top-28">
        <h1
          style={{ textShadow: "0 0 5px black, 3px 3px 5px white" }}
          className="font-extrabold text-6xl md:text-8xl"
        >
          Visa Hub
        </h1>
        <p
          style={{ textShadow: "0 0 5px black, 0 0 5px white" }}
          className="font-semibold text-xl mt-4"
        >
          Entrust your migration process to an expert
        </p>
      </div>
    </div>
  );
};

export default Banner;
