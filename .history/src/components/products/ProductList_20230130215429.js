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
  const screenCurrent = window.screen.width;
  const h = dataProduct.map((item) => item.name.split())[0];
  console.log("🚀 ~ file: ProductList.js:33 ~ ProductList ~ h", h);
  return (
    <div className="grid max-sm:grid-cols-2 max-sm:items-stretch grid-cols-3 max-sm:gap-x-[18px] max-sm:gap-y-[18px] gap-x-5 items-center overflow-hidden cursor-pointer">
      {screenCurrent > 400 && (
        <>
          {dataProduct &&
            dataProduct.length > 0 &&
            dataProduct.map((item) => (
              <div className="bg-[#ffff] rounded-[18px]" key={item.id}>
                <div className="pt-[10px] px-[22px] pb-[14px] h-[210px] max-sm:h-[160px]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-[34px]">
                  <h3 className="text-center mb-2 font-medium text-sm leading-[21px] text-[#000000]">
                    {screenCurrent <= 400 ? (
                      <div>
                        <span>{item.name.split(" ")[0].join("")}</span>
                      </div>
                    ) : (
                      <span>a</span>
                    )}
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
        </>
      )}
      {screenCurrent <= 400 && (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProductList;
