import React from "react";
import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/index.scss";

import { initGA, logPageView } from "./analysis/ga";

import RootRoutes from "./Routes";

import { AppProvider } from "./context";

const queryClient = new QueryClient();

// import startWorker from "./msw";
// if (import.meta.env.DEV) {
//   // await startWorker();
// }

function App() {
  const location = useLocation();
  React.useEffect(() => {
    initGA();
    logPageView(location.pathname);
  }, [location]);
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RootRoutes />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
