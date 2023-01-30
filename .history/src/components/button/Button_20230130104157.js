import React from "react";

const Button = ({ className, ...props }) => {
  return (
    <button
      className={`${className} bg-[#F4B840] text-[#ffff] rounded-[5px] uppercase text-sm leading-10 font-bold`}
      {...props}
    >
      Show All
    </button>
  );
};

export default Button;
