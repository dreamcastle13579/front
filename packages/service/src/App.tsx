import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/index.scss";

import RootRoutes from "./Routes";

import { AppProvider } from "./context";

const queryClient = new QueryClient();

// import startWorker from "./msw";
// if (import.meta.env.DEV) {
//   // await startWorker();
// }

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
