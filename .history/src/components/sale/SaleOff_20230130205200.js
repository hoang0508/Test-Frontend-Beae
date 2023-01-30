import React from "react";

const SaleOff = () => {
  return (
    <div className="flex gap-x-6 items-center border-[3px] border-[#fff] rounded-[18px] overflow-hidden mb-5">
      <span className="lg:bg-[#ffff] text-[#F4B840] font-bold text-[36px] leading-[54px] py-[13px] pl-[40px] pr-7">
        25% <span className="max-sm:uppercase text-[18px]">off</span>
      </span>
      <p className="text-[25px] leading-[38px] font-light text-[#000000]">
        Offer Applicable on All Our Pencils
      </p>
    </div>
  );
};

export default SaleOff;
