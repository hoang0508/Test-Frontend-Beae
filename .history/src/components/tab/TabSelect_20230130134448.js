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

const TabSelect = ({ selectTab, setSelectTab }) => {
  const handleTabSelect = (id) => {
    setSelectTab(id);
  };
  return (
    <div className="grid grid-cols-4 items-center cursor-pointer">
      {ListTabSelect &&
        ListTabSelect.length > 0 &&
        ListTabSelect.map((item) => (
          <div key={item.id}>
            {selectTab === item.id ? (
              <div className="bg-[#F4F4F4] pt-8 pl-[34px] pr-[31px] pb-[28px]  rounded-t-0 rounded-r-[25px]rounded-l-[25px]">
                <div
                  className="bg-[#fff] shadow-[0px_0px_27px_rgba(0,0,0,0.05)] w-[235px] flex items-center flex-col py-[23px] gap-y-1 rounded-[10px]"
                  onClick={() => handleTabSelect(item.id)}
                >
                  <span className="w-[58px] h-[58px] bg-[#F4F4F4] flex items-center justify-center rounded-full">
                    {item.icon}
                  </span>
                  <span className="font-bold text-[21px] text-[#181818] leading-9">
                    {item.title}
                  </span>
                </div>
              </div>
            ) : (
              <div className={`${selectTab !== item.id ? "ml-[34px]" : ""}`}>
                <div
                  className="bg-[#fff] shadow-[0px_0px_27px_rgba(0,0,0,0.05)] w-[235px] flex items-center flex-col py-[23px] gap-y-1 rounded-[10px]"
                  onClick={() => handleTabSelect(item.id)}
                >
                  <span className="w-[58px] h-[58px] bg-[#F4F4F4] flex items-center justify-center rounded-full">
                    {item.icon}
                  </span>
                  <span className="font-bold text-[21px] text-[#181818] leading-9">
                    {item.title}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default TabSelect;
