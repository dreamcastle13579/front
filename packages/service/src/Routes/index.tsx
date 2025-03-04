import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RouteChangeTracker } from "../analysis/ga";

import routes from "./routes";

const RootRoutes = () => {
  return (
    <Router>
      <RouteChangeTracker />
      <Routes>
        {routes.map(({ url, element }) => {
          return <Route key={url} path={url} element={element} />;
        })}
      </Routes>
    </Router>
  );
};

export default RootRoutes;
