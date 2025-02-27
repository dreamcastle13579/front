import React from "react";

import "./Textarea.scss";

interface Props {
  value: string;
  placeholder?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  adjustable?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { value, placeholder, maxLength, onChange, adjustable } = props;

  const handleAdjustableHeight = () => {
    const textarea = ref?.current;
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
        ref={ref}
      ></textarea>
    </div>
  );
});

export type { Props };
export default Textarea;
