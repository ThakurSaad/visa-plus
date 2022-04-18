import React from 'react';
import aboutMeImage2 from "../../../images/about-me2.png";

const Banner = () => {
    return (
        <section
        id="about-me"
        className="relative bg-violet-900 text-white py-8 md:py-20 my-4 lg:mt-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center w-3/4 mx-auto">
          <div className="about-me-desc md:w-8/12- mx-auto">
            <p className="">I am Thakur Saad</p>
            <h2 className="text-5xl my-4">
              I Am A Creative Junior Web Application Developer
            </h2>
            <p className="font-light">
              I always thrive for interesting and challenging tasks
            </p>
            <button className="bg-stone-100 text-sky-700 font-semibold rounded-md px-4 py-2 my-4">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.linkedin.com/in/thakur-saad-828778229/"
              >
                Contact Me
              </a>
            </button>
          </div>
          <div className="about-me-img">
            <img className="w-80" src={aboutMeImage2} alt="" />
          </div>
        </div>
      </section>
    );
};

export default Banner;