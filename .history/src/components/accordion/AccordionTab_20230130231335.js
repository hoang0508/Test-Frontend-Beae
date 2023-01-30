import React, { useState } from "react";
import { ListTabSelect } from "../tab/DataTab";
import TabItemSelect from "../tab/TabItemSelect";

const AccordionTab = () => {
  const [accordionShow, setAccordionShow] = useState();
  const handleClickAccor = (id) => {
    setAccordionShow(id);
  };
  return (
    <div>
      {ListTabSelect &&
        ListTabSelect.map((item) => (
          <div
            key={item.id}
            className="bg-[#F4F4F4] p-[10px] rounded-[18px]"
            onClick={() => handleClickAccor(item.id)}
          >
            <TabItemSelect item={item} />
          </div>
        ))}
    </div>
  );
};

export default AccordionTab;
