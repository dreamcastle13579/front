import React from "react";

import "./Bubble.scss";

interface Props {
  bubble: "input" | "textarea" | "textbox";
  children: React.ReactNode;
}

const Bubble = (props: Props) => {
  const { bubble, children } = props;
  return <div className={`ui-bubble bubble-${bubble}`}>{children}</div>;
};

export type { Props };
export default Bubble;
