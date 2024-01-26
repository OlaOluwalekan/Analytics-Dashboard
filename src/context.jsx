import { createContext, useContext, useState } from "react";
import salesJson from "./data.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setcurrentPage] = useState("dashboard");
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [salesData, setSalesData] = useState(() => {
    const targetMonth = 1;
    const targetYear = 2024;

    return salesJson.filter((sale) => {
      const [day, month, year] = sale.date.split("/").map(Number);
      return month == targetMonth && year == targetYear;
    });
  });
  const [showingAll, setShowingAll] = useState(false);

  const changePage = (page) => {
    setcurrentPage(page);
  };

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  const seeAllOrder = () => {
    if (showingAll) {
      setSalesData(() => {
        const targetMonth = 1;
        const targetYear = 2024;

        return salesJson.filter((sale) => {
          const [day, month, year] = sale.date.split("/").map(Number);
          return month == targetMonth && year == targetYear;
        });
      });
      setShowingAll(false);
    } else {
      setSalesData(salesJson);
      setShowingAll(true);
    }
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        currentPage,
        changePage,
        changeTheme,
        salesData,
        navIsOpen,
        toggleNav,
        seeAllOrder,
        showingAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalcontext = () => {
  return useContext(AppContext);
};

export default AppProvider;
