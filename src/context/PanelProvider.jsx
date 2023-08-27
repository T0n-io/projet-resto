// import { createContext, useEffect, useState } from "react";

// export const PanelContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const PanelProvider = ({ children }) => {
//   const [isPanelOpen, setIsPanelOpen] = useState(true);
//   const [activeTab, setActiveTab] = useState("addProduct");

//   useEffect(() => {
//     // vérifie si 'activeTab' est dans le localStorage
//     const savedTab = localStorage.getItem('activeTab');
//     console.log('Effet pour récupérer le tab actif du localStorage');
    
//     if (savedTab) {
//       console.log('Tab récupérée du localStorage: ', savedTab);
//       // Utilisez savedTab pour mettre à jour activeTab
//     }
//   }, []); // [] = exécutez ce code uniquement au montage

//   useEffect(() => {
//     console.log('Tab active enregistrée: ', activeTab);
//     console.log('Effet pour sauvegarder le tab actif dans le localStorage');
//     localStorage.setItem('activeTab', activeTab);
//   }, [activeTab]); // ce useEffect sera exécuté chaque fois que activeTab change

  
//   const value = {
//     isPanelOpen,
//     setIsPanelOpen,
//     activeTab,
//     setActiveTab,
//   };

//   return (
//     <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
//   );
// };


import { createContext, useContext, useEffect, useState } from 'react';

// Crée un contexte. Ce sera utilisé pour partager les données d'état à travers l'application.
export const PanelContext = createContext();

// Un hook personnalisé qui vous permet d'accéder au contexte plus facilement.
export function usePanel() {
  const context = useContext(PanelContext);
  if (!context) {
    throw new Error("usePanel doit être utilisé dans un composant enveloppé par PanelProvider");
  }
  return context;
}

// Le composant de fournisseur qui enveloppe la partie de votre application où vous souhaitez partager ce contexte.
// eslint-disable-next-line react/prop-types
export const PanelProvider = ({ children }) => {
  // Initialise l'état
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("addProduct");

  // useEffect qui récupère l'onglet actif du localStorage quand le composant est monté
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  // useEffect qui sauvegarde l'onglet actif dans le localStorage chaque fois que 'activeTab' change
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  // L'objet 'value' contient les données d'état et les fonctions à partager.
  const value = {
    isPanelOpen,
    setIsPanelOpen,
    activeTab,
    setActiveTab,
  };

  return (
    <PanelContext.Provider value={value}>
      {children}
    </PanelContext.Provider>
  );
};
