import React, { useEffect, useState } from "react";
import AccordionTab from "../components/accordion/AccordionTab";
import TabSelect from "../components/tab/TabSelect";
import TapContent from "../components/tab/TapContent";

const Taps = () => {
  const [selectTab, setSelectTab] = useState();
  useEffect(() => {
    setSelectTab(1);
  }, []);
  const screenCurrent = window.screen.width;
  return (
    <div>
      {screenCurrent > 400 ? (
        <>
          <TabSelect setSelectTab={setSelectTab} selectTab={selectTab} />
          {selectTab === 1 && <TapContent />}
          {selectTab === 2 && <TapContent />}
          {selectTab === 3 && <TapContent />}
          {selectTab === 4 && <TapContent />}
        </>
      ) : (
        <AccordionTab />
      )}
    </div>
  );
};

export default Taps;
