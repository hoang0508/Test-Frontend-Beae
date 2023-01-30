import React from "react";
import { IconDrawing, IconMarket, IconNotebook, IconPencil } from "../icons";

const ListTabSelect = [
  {
    id: 1,
    title: "Pencils",
    icon: <IconPencil />,
  },
  {
    id: 2,
    title: "Markers",
    icon: <IconMarket />,
  },
  {
    id: 3,
    title: "Drawing Colors",
    icon: <IconDrawing />,
  },
  {
    id: 4,
    title: "Notebooks",
    icon: <IconNotebook />,
  },
];

const TabSelect = () => {
  return (
    <div className="grid grid-cols-4 gap-x-16">
      {ListTabSelect &&
        ListTabSelect.length > 0 &&
        ListTabSelect.map((item) => (
          <div className="bg-[#fff] shadow-[0px_0px_27px_rgba(0,0,0,0.05)] w-[235px] ">
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
    </div>
  );
};

export default TabSelect;
