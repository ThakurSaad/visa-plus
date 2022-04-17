import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-sky-900 text-white w-full py-16 mt-16">
      <p>All rights reserved</p>
      <p>
        Copyright &copy;
        <span
          style={{ textShadow: "0 0 5px black" }}
          className="font-bold text-sky-500"
        >
          Thakur Saad
        </span>
      </p>
    </div>
  );
};

export default Footer;
