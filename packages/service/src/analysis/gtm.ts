import TagManager from "react-gtm-module";

export const initGTM = () => {
  if (!import.meta.env.DEV) {
    TagManager.initialize({
      gtmId: `${import.meta.env.VITE_PUBLIC_GTM_ID}`,
    });
  }
};
