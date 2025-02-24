import React from "react";

interface InterPret {
  messages: string[];
  category: string;
}

interface DreamState {
  nickname?: string;
  content?: string;
  interpret?: InterPret;
}

const AppContext = React.createContext<{
  dream: DreamState | null;
  setDream: (state: DreamState) => void;
} | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [dream, setDream] = React.useState<DreamState | null>(null);
  return (
    <AppContext.Provider value={{ dream, setDream }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
