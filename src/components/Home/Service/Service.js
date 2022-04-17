import React from "react";

const Service = ({ service }) => {
  const { price, name, image, description } = service;
  return (
    <div className="relative w-52 h-80 rounded-md bg-cyan-900 text-white hover:shadow-2xl hover:scale-105 duration-200">
      <img className="w-full rounded-md" src={image} alt="" />
      <div className="service-desc px-2">
        <h4 className="text-2xl font-extralight mt-2">{name}</h4>
        <p className="text-sm font-extralight pt-2">{description}</p>
        <p className="text-sm font-extralight">
          Service Cost : <span className="font-semibold text-2xl">{price}</span>$
        </p>
      </div>
      <button className="absolute mx-auto left-0 right-0 w-32 bg-white text-sky-900 font-semibold rounded-md bottom-3 py-2">Details</button>
    </div>
  );
};

export default Service;
