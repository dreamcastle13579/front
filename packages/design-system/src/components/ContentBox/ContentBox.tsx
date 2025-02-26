import React from "react";

import "./ContentBox.scss";

interface Props {
  children?: React.ReactNode;
}

const ContentBox = (props: Props) => {
  const { children } = props;
  return <div className="ui-content-box">{children}</div>;
};

export type { Props };
export default ContentBox;
