import React from "react";

const AppContext = React.createContext<null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

export default AppProvider;
