import React from "react";

import "./Button.scss";

interface Props {
  variant?: "default" | "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Button = (props: Props) => {
  const { variant, disabled, children, onClick } = props;
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export type { Props };
export default Button;
