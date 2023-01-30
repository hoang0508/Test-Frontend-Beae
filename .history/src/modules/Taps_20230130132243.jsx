import React, { useEffect, useState } from "react";
import TabSelect from "../components/tab/TabSelect";
import TapContent from "../components/tab/TapContent";

const Taps = () => {
  const [selectTab, setSelectTab] = useState();
  useEffect(() => {
    setSelectTab(1);
  }, []);
  console.log("🚀 ~ file: Taps.jsx:7 ~ Taps ~ selectTab", selectTab);
  return (
    <div>
      <TabSelect setSelectTab={setSelectTab} selectTab={selectTab} />
      <TapContent />
    </div>
  );
};

export default Taps;
