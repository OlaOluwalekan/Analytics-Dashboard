import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setcurrentPage] = useState("dashboard");

  const changePage = (page) => {
    setcurrentPage(page);
  };

  return (
    <AppContext.Provider value={{ darkMode, currentPage, changePage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(AppContext);
};

export default AppProvider;
