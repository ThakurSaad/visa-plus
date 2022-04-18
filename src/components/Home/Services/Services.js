import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <section className="md:mt-32">
      <h2
        style={{ textShadow: "0 0 5px black, 2px 2px 5px white" }}
        className="text-center font-bold text-5xl text-sky-900 my-8"
      >
        My Services
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
