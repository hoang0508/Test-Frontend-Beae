import React from "react";
import { IconDrawing, IconMarket, IconNotebook, IconPencil } from "../icons";
import TabItemSelect from "./TabItemSelect";
import TapContent from "./TapContent";

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

const TabSelect = ({ selectTab, setSelectTab }) => {
  const handleTabSelect = (id) => {
    setSelectTab(id);
  };
  const screenCurrent = window.screen.width;
  return (
    <div className="grid lg:grid-cols-4 max-sm:gap-y-[10px] items-center cursor-pointer">
      {ListTabSelect &&
        ListTabSelect.length > 0 &&
        ListTabSelect.map((item) => (
          <div key={item.id}>
            {selectTab === item.id ? (
              <div
                className={`${
                  screenCurrent > 400
                    ? "pt-8 pl-[34px] pr-[31px] pb-[28px] rounded-tr-[25px] rounded-tl-[25px]"
                    : "rounded-[18px] p-[10px]"
                } bg-[#F4F4F4]`}
              >
                <TabItemSelect item={item} handleTabSelect={handleTabSelect} />
                <TapContent />
              </div>
            ) : (
              <div
                className={`${selectTab !== item.id ? "lg:ml-[34px]" : ""} ${
                  screenCurrent <= 400
                    ? "bg-[#F4F4F4] p-[10px] rounded-[18px]"
                    : ""
                }`}
              >
                <TabItemSelect item={item} handleTabSelect={handleTabSelect} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default TabSelect;
