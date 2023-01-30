import React, { useState } from "react";
import Button from "../button/Button";
import ProductList from "../products/ProductList";
import SaleOff from "../sale/SaleOff";

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
  const screenCurrent = window.screen.width;
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div
      className="flex gap-x-[38px]
    max-sm:flex-col bg-[#F4F4F4] lg:py-[40px] lg:px-[50px] max-sm:pt-[41px] max-sm:px-[20px]  max-sm:pb-[61px] rounded-t-0 rounded-r-0 rounded-b-[25px] "
    >
      <div className="w-[350px]">
        <p className="lg:w-[350px] lg:text-[21px] max-sm:text-[16px] max-sm:w-full leading-8 font-normal text-[#000000] mb-5 max-sm:mb-[9px]">
          Graphite Artist Quality Fine Art Drawing and Sketching Pencils
          Replaceable Nib Pencils.
        </p>
        <div className="flex flex-col mb-9 max-sm:mb-7 max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-5">
          {textDots &&
            textDots.map((item) => (
              <ul key={item.id}>
                <li className="list-disc max-sm:text-[13px]  font-semibold text-[18px] leading-10 max-sm:leading-8">
                  {item.text}
                </li>
              </ul>
            ))}
        </div>
        {screenCurrent > 400 && <Button className={"w-[120px] h-[50px]"} />}
      </div>
      <div className="w-[712px] max-sm:w-full">
        <SaleOff />
        <ProductList showAll={showAll} />
      </div>
      {screenCurrent <= 400 && (
        <div className="flex justify-center items-center">
          <Button className={"w-[120px] h-[50px]"} onClick={handleShowAll} />
        </div>
      )}
    </div>
  );
};

export default TapContent;
