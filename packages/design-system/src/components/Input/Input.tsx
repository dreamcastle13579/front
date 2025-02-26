import React from "react";

import "./Input.scss";

interface Props {
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  align?: "center";
}

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, placeholder, onChange, align } = props;
  return (
    <div className={`ui-input ${align ? `align-${align}` : ""}`}>
      <input
        ref={ref}
        value={value}
        {...(placeholder ? { placeholder } : {})}
        onChange={onChange}
      />
    </div>
  );
});

export type { Props };
export default Input;
