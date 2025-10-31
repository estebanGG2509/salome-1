import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [webPage, setWebPage] = useState('Inicio');
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ webPage, setWebPage, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
