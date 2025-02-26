import React from "react";

import "./Main.scss";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return <div id="main">{children}</div>;
};

export default Main;
