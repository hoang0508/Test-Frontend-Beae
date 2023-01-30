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
    <div className="grid gap-x-16">
      {ListTabSelect &&
        ListTabSelect.length > 0 &&
        ListTabSelect.map((item) => (
          <div>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
    </div>
  );
};

export default TabSelect;
