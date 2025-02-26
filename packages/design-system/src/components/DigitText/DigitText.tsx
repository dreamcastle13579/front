import React from "react";

import "./DigitText.scss";

interface Props {
  children: React.ReactNode;
  total: React.ReactNode;
}

const DigitText = (props: Props) => {
  const { children, total } = props;
  return (
    <div className="ui-digit-text">
      <span className="digit-text">{children}</span>/ 
      <span className="digit-total">{total}</span>
    </div>
  );
};

export type { Props };
export default DigitText;
