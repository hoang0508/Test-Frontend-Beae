import React, { useState } from "react";
import TabSelect from "../components/tab/TabSelect";
import TapContent from "../components/tab/TapContent";

const Taps = () => {
  const [selectTab, setSelectTab] = useState(1);
  return (
    <div>
      <TabSelect setSelectTab={setSelectTab} selectTab={selectTab} />
      <TapContent />
    </div>
  );
};

export default Taps;
