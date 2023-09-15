import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "../AdminPanel/AddForm.jsx";
import EditForm from "../AdminPanel/EditForm";
import HintMessage from "../AdminPanel/HintMessage.jsx";

export const getTabsConfig =  (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },  
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
