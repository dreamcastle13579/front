import React from "react";

import "./Input.scss";

interface Props {
  value: string;
  placeholder?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  align?: "center";
  inputRef: React.RefObject<HTMLInputElement>;
}

const Input = (props: Props) => {
  const { value, placeholder, maxLength, onChange, align, inputRef } = props;
  return (
    <div className={`ui-input ${align ? `align-${align}` : ""}`}>
      <input
        ref={inputRef}
        value={value}
        {...(placeholder ? { placeholder } : {})}
        {...(maxLength ? { maxLength } : {})}
        onChange={onChange}
      />
    </div>
  );
};

export type { Props };
export default Input;
