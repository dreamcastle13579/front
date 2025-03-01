import React from "react";

import "./EffectSwitcher.scss";

interface Props {
  initial?: number;
  items: React.ReactNode[];
  interval: number;
  effect: "fade";
}

const EffectSwitcher = (props: Props) => {
  const { initial = 0, items, interval, effect } = props;

  const [current, setCurrent] = React.useState(initial);

  React.useEffect(() => {
    if (current === items.length - 1) return () => clearTimeout(timer);
    const timer = setTimeout(() => {
      setCurrent((current) => current + 1);
    }, interval);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className={`ui-effect-switcher effect-${effect}`}>
      {items.map((item, index) => (
        <div
          className={`effect-switcher-item ${initial ? "is-initial" : ""} ${
            index === current - 1
              ? "is-prev"
              : index === current
              ? "is-current"
              : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export type { Props };
export default EffectSwitcher;
