import React from "react";

const SaleOff = () => {
  return (
    <div className="flex gap-x-6 max-sm:gap-x-4 max-sm:w-[328px] max-sm:mx-auto items-center border-[3px] border-[#fff] rounded-[18px] overflow-hidden mb-5">
      <span className="lg:bg-[#ffff] text-[#F4B840] font-bold text-[36px] leading-[54px] py-[13px] max-sm:pl-6 pl-[40px] pr-7 max-sm:flex">
        25%{" "}
        <span className="max-sm:uppercase max-sm:text-[18px] max-sm:-mt-[10px]">
          off
        </span>
      </span>
      <p className="text-[25px] max-sm:text-base max-sm:leading-6 leading-[38px] max-sm:font-normal font-light text-[#000000]">
        Offer Applicable on All Our Pencils
      </p>
    </div>
  );
};

export default SaleOff;
