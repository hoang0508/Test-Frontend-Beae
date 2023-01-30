import React from "react";
import imagePencilBlack from "../../assets/image/pencil-black.png";
import imagePencilGray from "../../assets/image/pencil-gray.png";
import imagePencilRed from "../../assets/image/pencil-red.png";

const dataProduct = [
  {
    id: 1,
    image: imagePencilBlack,
    name: "Aero Mechanical Pencil",
    priciceNew: "$99.00",
    priceOld: "$125.00",
  },
  {
    id: 1,
    image: imagePencilRed,
    name: "Castell Mechanical Pencil",
    priciceNew: "$75.00",
    priceOld: "$99.00",
  },
  {
    id: 1,
    image: imagePencilGray,
    name: "Architect Choice Pencil",
    priciceNew: "$45.00",
    priceOld: "$70.00",
  },
];

const ProductList = ({ showAll }) => {
  console.log("🚀 ~ file: ProductList.js:31 ~ ProductList ~ showAll", showAll);
  return (
    <div className="grid grid-cols-3 gap-x-5 items-center overflow-hidden cursor-pointer">
      {!showAll
        ? dataProduct &&
          dataProduct.length > 0 &&
          dataProduct.slice(0, 2).map((item) => (
            <div className="bg-[#ffff] rounded-[18px]" key={item.id}>
              <div className="pt-[10px] px-[22px] pb-[14px]">
                <img src={item.image} alt="" />
              </div>
              <div className="mb-[34px]">
                <h3 className="text-center mb-2 font-medium text-sm leading-[21px] text-[#000000]">
                  {item.name}
                </h3>
                <div className="flex justify-center items-center gap-x-3">
                  <span className="font-semibold text-base leading-6 text-[#000000">
                    {item?.priciceNew}
                  </span>
                  <span className="line-through text-sm text-[#727272] font-normal">
                    {item?.priceOld}
                  </span>
                </div>
              </div>
            </div>
          ))
        : dataProduct &&
          dataProduct.length > 0 &&
          dataProduct.map((item) => (
            <div className="bg-[#ffff] rounded-[18px]" key={item.id}>
              <div className="pt-[10px] px-[22px] pb-[14px]">
                <img src={item.image} alt="" />
              </div>
              <div className="mb-[34px]">
                <h3 className="text-center mb-2 font-medium text-sm leading-[21px] text-[#000000]">
                  {item.name}
                </h3>
                <div className="flex justify-center items-center gap-x-3">
                  <span className="font-semibold text-base leading-6 text-[#000000">
                    {item?.priciceNew}
                  </span>
                  <span className="line-through text-sm text-[#727272] font-normal">
                    {item?.priceOld}
                  </span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ProductList;
