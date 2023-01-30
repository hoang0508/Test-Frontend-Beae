import React from "react";
import Button from "../button/Button";

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
    <div className="flex gap-x-[38px] mt-10 bg-[#F4F4F4] py-[40px] px-[50px] rounded-t-0 rounded-r-0 rounded-b-[25px] rounded-l-[25px]">
      <div className="w-[350px]">
        <p className="w-[350px] text-[21px] leading-8 font-normal text-[#000000] mb-5">
          Graphite Artist Quality Fine Art Drawing and Sketching Pencils
          Replaceable Nib Pencils.
        </p>
        <div className="flex flex-col mb-9">
          {textDots &&
            textDots.map((item) => (
              <ul>
                <li className="list-disc  font-semibold text-[18px] leading-10">
                  {item.text}
                </li>
              </ul>
            ))}
        </div>
        <Button className={"w-[120px] h-[50px] "} />
      </div>
      <div className="w-[712px]"></div>
    </div>
  );
};

export default TapContent;
