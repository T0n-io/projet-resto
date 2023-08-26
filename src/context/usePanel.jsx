import { useContext } from "react";
import { PanelContext } from "./PanelProvider";

export function usePanel() {
  const context = useContext(PanelContext);
  if (!context) {
    throw new Error("usePanel must be used within a PanelProvider");
  }
  return context;
}
