import React from "react";

const Heading = ({ text, className }) => {
  return (
    <div
      className={`font-bold text-[45px] text-[#121212] text-center ${className}`}
    >
      {text}
    </div>
  );
};

export default Heading;
