import React from "react";

import startWorker from "./msw";

import RootRoutes from "./Routes";

if (import.meta.env.DEV) {
  await startWorker();
}

function App() {
  return <RootRoutes />;
}

export default App;
