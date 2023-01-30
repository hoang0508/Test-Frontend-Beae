import React, { useEffect, useState } from "react";
import { ListTabSelect } from "../tab/DataTab";
import TabItemSelect from "../tab/TabItemSelect";
import TapContent from "../tab/TapContent";

const AccordionTab = () => {
  const [accordionShow, setAccordionShow] = useState();
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const handleClickAccor = (id) => {
    setAccordionShow(id);
    setToggleAccordion(!toggleAccordion);
  };
  useEffect(() => {
    setAccordionShow(1);
  }, []);
  return (
    <div>
      {ListTabSelect &&
        ListTabSelect.map((item) => (
          <div
            key={item.id}
            className="bg-[#F4F4F4] p-[10px] rounded-[18px] mb-[10px]"
            onClick={() => handleClickAccor(item.id)}
          >
            <TabItemSelect item={item} />
            {accordionShow === item.id && <TapContent />}
          </div>
        ))}
    </div>
  );
};

export default AccordionTab;
