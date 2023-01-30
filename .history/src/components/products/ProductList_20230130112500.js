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

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-x-5">
      {dataProduct &&
        dataProduct.length > 0 &&
        dataProduct.map((item) => <div key={item.id}></div>)}
    </div>
  );
};

export default ProductList;
