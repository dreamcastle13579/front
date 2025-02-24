import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes";

const RootRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ url, element }) => {
          return <Route key={url} path={url} element={element} />;
        })}
      </Routes>
    </Router>
  );
};

export default RootRoutes;
