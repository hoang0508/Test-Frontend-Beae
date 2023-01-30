import React from "react";
import { ListTabSelect } from "../tab/DataTab";
import TabItemSelect from "../tab/TabItemSelect";

const AccordionTab = () => {
  return (
    <div>{ListTabSelect && ListTabSelect.map((item) => <TabItemSelect />)}</div>
  );
};

export default AccordionTab;
