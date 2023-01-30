import React from "react";

const Heading = ({ text, className }) => {
  return (
    <h3
      className={`font-bold text-[45px] text-[#121212] text-center ${className}`}
    >
      {text}
    </h3>
  );
};

export default Heading;
