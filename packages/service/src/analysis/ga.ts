import React from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export const initGA = () => {
  if (!import.meta.env.DEV) {
    ReactGA.initialize(import.meta.env.VITE_PUBLIC_GA_KEY);
  }
};

export const logPageView = (url: string) => {
  if (!import.meta.env.DEV) {
    ReactGA.send({ hitType: "pageview", page: url });
  }
};

export const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    if (!import.meta.env.DEV) {
      setInitialized(true);
    }
  }, []);

  React.useEffect(() => {
    if (initialized) {
      logPageView(location.pathname);
    }
  }, [initialized, location]);

  return null;
};
