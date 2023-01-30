import React from "react";

const TabItemSelect = ({ item, handleTabSelect }) => {
  const screenCurrent = window.screen.width;
  return (
    <div
      className="bg-[#fff] shadow-[0px_0px_27px_rgba(0,0,0,0.05)] w-[235px] flex items-center flex-col lg:py-[23px] gap-y-1 rounded-[10px] max-sm:w-full max-sm:flex-row max-sm:pl-[30px] max-sm:pt-[13px]
    max-sm:pb-[17px]"
      onClick={() => handleTabSelect(item.id)}
    >
      {screenCurrent > 400 ? (
        <>
          <span className="w-[58px] h-[58px] bg-[#F4F4F4] flex items-center justify-center rounded-full">
            {item.icon}
          </span>

          <span className="font-bold text-[21px] text-[#181818] leading-9">
            {item.title}
          </span>
        </>
      ) : (
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <span className="w-[50px] h-[50px] bg-[#F4F4F4] flex items-center justify-center rounded-full">
              {item.icon}
            </span>
            <span className="font-bold text-[21px] text-[#181818] leading-9">
              {item.title}
            </span>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default TabItemSelect;
