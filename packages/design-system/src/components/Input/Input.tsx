import React from "react";

import "./Input.scss";

interface Props {
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
  align?: "center";
}

const Input = (props: Props) => {
  const { value, placeholder, onChange, align } = props;
  return (
    <div className={`ui-input ${align ? `align-${align}` : ""}`}>
      <input
        value={value}
        {...(placeholder ? { placeholder } : {})}
        onChange={onChange}
      />
    </div>
  );
};

export type { Props };
export default Input;
