import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/index.scss";

import startWorker from "./msw";

import RootRoutes from "./Routes";

import { AppProvider } from "./context";

const queryClient = new QueryClient();

if (import.meta.env.DEV) {
  // await startWorker();
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RootRoutes />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
