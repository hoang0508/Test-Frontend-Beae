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
    <div>
      <Heading text={"Packer pen Gallery"} className="!mt-32" />
      <div className="flex items-center gap-y-5">
        <div className="flex flex-col gap-y-3">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="grid grid-rows-2 gap-y-3">
          <div className="col-span-2">
            <img src={img2} alt="" />
          </div>
          <div className="col-span-2">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="">
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
