import React, { useEffect, useState } from "react";
import { ListTabSelect } from "../tab/DataTab";
import TabItemSelect from "../tab/TabItemSelect";
import TapContent from "../tab/TapContent";

const AccordionTab = () => {
  const [accordionShow, setAccordionShow] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const handleTabSelect = (id) => {
    if (accordionShow !== id) {
      setAccordionShow(id);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
    }
  };
  useEffect(() => {
    setAccordionShow(1);
    setIsActive(true);
  }, []);
  return (
    <div>
      {ListTabSelect &&
        ListTabSelect.map((item) => (
          <div
            key={item.id}
            className="bg-[#F4F4F4] p-[10px] rounded-[18px] mb-[10px]"
          >
            <TabItemSelect item={item} handleTabSelect={handleTabSelect} />
            {accordionShow === item.id && isActive && <TapContent />}
          </div>
        ))}
    </div>
  );
};

export default AccordionTab;
