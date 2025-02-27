import React from "react";

import "./ButtonBox.scss";

interface Props {
  children: React.ReactNode;
}

const ButtonBox = (props: Props) => {
  const { children } = props;
  return <div className={`ui-btn-box`}>{children}</div>;
};

export type { Props };
export default ButtonBox;
