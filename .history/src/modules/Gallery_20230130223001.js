import React from "react";
import Heading from "../components/heading/Heading";
import img1 from "../assets/image/1.png";
import img2 from "../assets/image/2.png";
import img3 from "../assets/image/3.png";
import img4 from "../assets/image/4.png";
import img5 from "../assets/image/5.png";
import img6 from "../assets/image/6.png";
import img7 from "../assets/image/7.png";

const Gallery = () => {
  return (
    <div className="mt-[100px] max-sm:mt-[60px]">
      <Heading
        text={"Packer pen Gallery"}
        className="mb-10 max-sm:mb-[34px] max-sm:text-[30px]"
      />
      <div className="flex gap-x-[18px] items-center">
        <div className="flex flex-col gap-y-3">
          <div>
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={img4} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid grid-rows-2 gap-y-[13px]">
          <div className="col-span-2">
            <img src={img2} alt="" className="w-full h-full " />
          </div>
          <div className="col-span-2">
            <img src={img3} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <div>
            <img src={img5} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={img6} alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={img7} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
