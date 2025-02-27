import React from "react";

import "./FullFixedBox.scss";

interface Props {
  children: React.ReactNode;
  bottom?: React.ReactNode;
}

const FullFixedBox = (props: Props) => {
  const { children, bottom } = props;
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const handler = () => {
      setHeight(window.innerHeight);
    };
    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
  return (
    <div
      className="game-layout"
      style={{
        minHeight: `-webkit-calc(${height}px)`,
      }}
    >
      <div className="game-container">
        <div className="scene-layout">
          {/* <div className="scene-box"> */}
          <div className="scene-layout-container">
            <div className="scene-layout-box">
              <div className="full-box-content">{children}</div>
              <div className="full-box-bottom">{bottom}</div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export type { Props };
export default FullFixedBox;
