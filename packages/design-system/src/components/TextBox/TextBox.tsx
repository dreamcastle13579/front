import React from "react";

import "./TextBox.scss";

interface Props {
  children: React.ReactNode;
}

const TextBox = (props: Props) => {
  const { children } = props;
  return <div className="ui-text-box">{children}</div>;
};

export type { Props };
export default TextBox;
