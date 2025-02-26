import React from "react";

import "./Title.scss";

interface Props {
  title: "info" | string;
  children: React.ReactNode;
}

const Title = (props: Props) => {
  const { children, title } = props;
  return (
    <div className={`ui-title title-${title}`}>
      <h1 className="title">{children}</h1>
    </div>
  );
};

export type { Props };
export default Title;
