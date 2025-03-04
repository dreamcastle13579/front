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
