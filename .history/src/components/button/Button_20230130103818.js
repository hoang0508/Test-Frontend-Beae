import React from "react";

const Button = ({ className, ...props }) => {
  return (
    <button className={`${className} bg-[#F4B840] rounded-[5px]`} {...props}>
      Show All
    </button>
  );
};

export default Button;
