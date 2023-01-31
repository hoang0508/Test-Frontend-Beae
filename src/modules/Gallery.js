import React from "react";
import Heading from "../components/heading/Heading";
import img1 from "../assets/image/1.png";
import img2 from "../assets/image/2.png";
import img3 from "../assets/image/3.png";
import img4 from "../assets/image/4.png";
import img5 from "../assets/image/5.png";
import img6 from "../assets/image/6.png";
import img7 from "../assets/image/7.png";

import reponsiveImage1 from "../assets/image/reponsive/reponsive-image1.png";
import reponsiveImage2 from "../assets/image/reponsive/reponsive-image2.png";
import reponsiveImage3 from "../assets/image/reponsive/reponsive-image3.png";
import reponsiveImage4 from "../assets/image/reponsive/reponsive-image4.png";
import reponsiveImage5 from "../assets/image/reponsive/reponsive-image5.png";

import reponsiveImage6 from "../assets/image/reponsive/reponsive-image6.png";
import reponsiveImage7 from "../assets/image/reponsive/reponsive-image7.png";

const Gallery = () => {
  const screenCurrent = window.screen.width;
  return (
    <div className="mt-[100px] max-sm:mt-[60px]">
      <Heading
        text={"Packer pen Gallery"}
        className="mb-10 max-sm:mb-[34px] max-sm:text-[30px]"
      />
      {screenCurrent > 400 ? (
        <div className="flex gap-x-[18px] items-center">
          <div className="flex flex-col gap-y-3">
            <div className="w-[291px]">
              <img src={img1} alt="" />
            </div>
            <div className="w-[291px]">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-y-[13px]">
            <div className="col-span-2 h-[294px]">
              <img src={img2} alt="" className="h-full w-full" />
            </div>
            <div className="col-span-2  h-[295px]">
              <img src={img3} alt="" className="h-full w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="w-[291px]">
              <img src={img5} alt="" />
            </div>
            <div className="w-[291px]">
              <img src={img6} alt="" />
            </div>
            <div className="w-[291px]">
              <img src={img7} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex gap-x-[10px] mb-[10px]">
            <div className="flex flex-col gap-y-[10px]">
              <div className="h-[128px]">
                <img src={reponsiveImage2} alt="" className="h-full" />
              </div>
              <div className="h-[152px]">
                <img src={reponsiveImage6} alt="" className="h-full" />
              </div>
            </div>
            <div className="h-[291px]">
              <img src={reponsiveImage4} alt="" className="h-full" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[10px] mb-[10px]">
            <div className="h-[298px]">
              <img src={reponsiveImage1} alt="" className="h-full w-full" />
            </div>
            <div className="h-[298px]">
              <img src={reponsiveImage3} alt="" className="h-full w-full" />
            </div>
          </div>
          <div className="flex gap-x-[10px]">
            <div className="h-[131px]">
              <img src={reponsiveImage7} alt="" className="h-full w-full" />
            </div>
            <div className="h-[131px]">
              <img src={reponsiveImage5} alt="" className="h-full w-full" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
