import React from "react";

export interface InterPret {
  messages: string[];
  category: string;
}

export interface DreamState {
  nickname?: string;
  content?: string;
  interpret?: InterPret;
}

export const AppContext = React.createContext<{
  dream: DreamState | null;
  setDream: React.Dispatch<React.SetStateAction<DreamState | null>>;
}>({
  dream: null,
  setDream: (prev) => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [dream, setDream] = React.useState<DreamState | null>({
    nickname: "",
    content: "",
    interpret: undefined,
  });
  return (
    <AppContext.Provider value={{ dream, setDream }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
