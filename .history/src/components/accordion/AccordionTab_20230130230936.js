import React from "react";
import { ListTabSelect } from "../tab/DataTab";
import TabItemSelect from "../tab/TabItemSelect";

const AccordionTab = () => {
  return (
    <div>
      {ListTabSelect &&
        ListTabSelect.map((item) => (
          <div key={item.id} className="bg-[#F4F4F4] p-[10px] rounded-[18px]">
            <TabItemSelect item={item} />
          </div>
        ))}
    </div>
  );
};

export default AccordionTab;
