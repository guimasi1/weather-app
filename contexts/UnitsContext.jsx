import { createContext, useContext, useState } from "react";

const UnitsContext = createContext("metric");

export const UnitsProvider = ({ children }) => {
  const [units, setUnits] = useState("metric");

  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
};

export const useUnits = () => useContext(UnitsContext);
