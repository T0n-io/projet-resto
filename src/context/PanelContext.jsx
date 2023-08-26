import { createContext, useContext, useState } from "react";

export const PanelContext = createContext();

export function usePanel() {
  const context = useContext(PanelContext);
  if (!context) {
    throw new Error("usePanel must be used within a PanelProvider");
  }
  return context;
}

export const PanelProvider = ({ children }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
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
