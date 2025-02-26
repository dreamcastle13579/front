import React from "react";

import "./styles/index.scss";

import startWorker from "./msw";

import RootRoutes from "./Routes";

import { AppProvider } from "./context";

if (import.meta.env.DEV) {
  // await startWorker();
}

function App() {
  return (
    <AppProvider>
      <RootRoutes />
    </AppProvider>
  );
}

export default App;
