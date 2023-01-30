import React from "react";

const textDots = [
  {
    id: 1,
    text: "MECHANICAL PENCILS",
  },
  {
    id: 2,
    text: "ARCHITECT'S CHOICE",
  },
  {
    id: 3,
    text: "EXECUTIVE PENCILS",
  },
  {
    id: 4,
    text: "ENGRAVABLE PENCILS",
  },
];

const TapContent = () => {
  return (
    <div className="flex gap-x-[38px] mt-10">
      <div className="w-[350px]">
        <p className="w-[350px] text-[21px] leading-8 font-normal text-[#000000] mb-5">
          Graphite Artist Quality Fine Art Drawing and Sketching Pencils
          Replaceable Nib Pencils.
        </p>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="w-[712px]"></div>
    </div>
  );
};

export default TapContent;
