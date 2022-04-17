import React from "react";
import man from "../../../images/experience/man.png";
import strategy from "../../../images/experience/exp2.png";
import mission from "../../../images/experience/exp1.png";

const Experience = () => {
  return (
    <div className="bg-sky-900 my-8">
      <section className="w-4/5 mx-auto">
        <h1
          style={{ textShadow: "0 0 5px black, 2px 2px 5px white" }}
          className="text-5xl font-bold text-center py-8 md:pb-0"
        >
          Experience
        </h1>
        <div className="exp flex flex-col lg:flex-row justify-center items-center">
          <div className="exp-description w-80 font-medium">
            <h3 className=" text-2xl">
              10+ years experience in visa and immigration consultancy
            </h3>
            <div>
              <div className="strategy flex items-center justify-center mt-4">
                <img
                  className="border-2 border-black rounded-full p-1 w-16"
                  src={strategy}
                  alt=""
                />
                <p className="text-sm pl-2">
                  As I have consulted many immigrants over the years my
                  technique is refined
                </p>
              </div>
              <div className="mission flex items-center justify-center mt-4">
                <img
                  className="border-2 border-black rounded-full p-1 w-16"
                  src={mission}
                  alt=""
                />
                <p className="text-sm pl-2">
                  My mission is to build an immigration agency and reach out as many people as I can
                </p>
              </div>
            </div>
          </div>
          <div className="exp-image">
            <img src={man} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
