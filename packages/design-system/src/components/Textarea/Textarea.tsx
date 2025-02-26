import React from "react";

import "./Textarea.scss";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (props: Props) => {
    const { value, placeholder, onChange } = props;
    return (
      <div className={`ui-textarea`}>
        <textarea
          value={value}
          {...(placeholder ? { placeholder } : {})}
          onChange={onChange}
        ></textarea>
      </div>
    );
  }
);

export type { Props };
export default Textarea;
