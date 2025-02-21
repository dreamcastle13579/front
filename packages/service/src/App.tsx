import React from "react";

import startWorker from "./msw";

if (import.meta.env.DEV) {
  await startWorker();
}

function App() {
  return <>hello world</>;
}

export default App;
