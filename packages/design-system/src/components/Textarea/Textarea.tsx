import React from "react";

import "./Textarea.scss";

interface Props {
  value: string;
  placeholder?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  adjustable?: boolean;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}

const Textarea = (props: Props) => {
  const { value, placeholder, maxLength, onChange, adjustable, textareaRef } =
    props;

  const handleAdjustableHeight = () => {
    const textarea = textareaRef?.current;
    if (textarea) {
      textarea.style.height = "0px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  React.useEffect(() => {
    if (adjustable) handleAdjustableHeight();
  }, [value, adjustable]);
  return (
    <div className={`ui-textarea`}>
      <textarea
        rows={1}
        value={value}
        {...(placeholder ? { placeholder } : {})}
        {...(maxLength ? { maxLength } : {})}
        onChange={onChange}
        ref={textareaRef}
      ></textarea>
    </div>
  );
};

export type { Props };
export default Textarea;
