import { createContext, useContext, useState } from "react";

// Tạo createContext
const ActiveContext = createContext();

const ContextProvider = (props) => {
  const [isActive, setIsActive] = useState(false);
  const value = {
    isActive,
    setIsActive,
  };
  return (
    <ActiveContext.Provider value={value} {...props}></ActiveContext.Provider>
  );
};

function useActive() {
  const context = useContext(ActiveContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a AuthProvider");
  return context;
}

export { ContextProvider, useActive };
