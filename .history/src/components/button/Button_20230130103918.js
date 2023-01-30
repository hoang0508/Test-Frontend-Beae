import React from "react";

const Button = ({ className, ...props }) => {
  return (
    <button
      className={`${className} bg-[#F4B840] text-[#ffff] rounded-[5px] uppercase`}
      {...props}
    >
      Show All
    </button>
  );
};

export default Button;
