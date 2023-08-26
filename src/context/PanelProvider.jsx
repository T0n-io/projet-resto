import { createContext, useState } from "react";

export const PanelContext = createContext();

// eslint-disable-next-line react/prop-types
export const PanelProvider = ({ children }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("addProduct");

  const value = {
    isPanelOpen,
    setIsPanelOpen,
    activeTab,
    setActiveTab,
  };

  return (
    <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
  );
};
