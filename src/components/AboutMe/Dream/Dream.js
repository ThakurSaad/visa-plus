import React from "react";
import dream from "../../../images/dream.jpg";

const Dream = () => {
  return (
    <section className="dream grid gap-4 justify-items-center items-center md:grid-cols-2 w-11/12 mx-auto mt-8 md:mt-20">
      <div>
        <img className="rounded-md" src={dream} alt="" />
      </div>
      <div className="dream-description md:w-11/12 rounded-md mx-auto bg-amber-900 hover:bg-violet-900 duration-200 h-full p-8">
        <h3 className="text-center font-bold text-5xl text-white my-8">
          My Dream
        </h3>
        <p className="font-semibold text-center text-white">
          My dream is to build a software company in the next 10 years. I began
          my journey 2022 by enrolling into Programming hero web course. In the
          last 107 days of 2022 I spent an average of 7 hours every day coding
          and learning new technologies. I need to have vast and long experience
          for my dream to be true. So, I am craving to work with a company. And
          I am trying to increase my working hours. I will continue to do so
          unless I am capable enough.
        </p>
      </div>
    </section>
  );
};

export default Dream;
