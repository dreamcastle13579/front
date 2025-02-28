import Onboarding from "../pages/Onboarding";
import Nickname from "../pages/Nickname";
import Interpret from "../pages/Interpret";
import Result from "../pages/Result";
import Relief from "../pages/Relief";
import Analysis from "../pages/Analysis";
import LoadingError from "../pages/Errors/LoadingError";

const routes = [
  { url: "/", element: <Onboarding /> },
  { url: "/nickname", element: <Nickname /> },
  { url: "/interpret", element: <Interpret /> },
  { url: "/result/:id", element: <Result /> },
  { url: "/relief", element: <Relief /> },
  { url: "/analysis", element: <Analysis /> },
  { url: "/loading-error", element: <LoadingError /> },
];

export default routes;
