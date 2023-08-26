import{ createContext, useState, useContext } from 'react';

// Créez le contexte
const AdminModeContext = createContext();

// Créez le fournisseur de contexte
export const AdminModeProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  return (
    <AdminModeContext.Provider value={[ isModeAdmin, setIsModeAdmin ]}>
      {children}
    </AdminModeContext.Provider>
  );
};

// Fonction d'assistance pour utiliser le contexte
export const useAdminMode = () => {
  const context = useContext(AdminModeContext);
  if (!context) {
    throw new Error('useAdminMode doit être utilisé à l\'intérieur d\'un AdminModeProvider');
  }
  return context;
};
