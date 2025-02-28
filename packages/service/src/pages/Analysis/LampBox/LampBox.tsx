import React from "react";

import "./LampBox.scss";

import ImgLightTotal from "./imgs/img-light-total.svg";
import ImgLightSpark1 from "./imgs/img-light-spark1.svg";
import ImgLightSpark2 from "./imgs/img-light-spark2.svg";
import ImgLightSpark3 from "./imgs/img-light-spark3.svg";
import ImgLight from "./imgs/img-light.svg";
import ImgLamp from "./imgs/img-lamp.svg";

interface Props {
  children: React.ReactNode;
}

const LampBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children } = props;

  return (
    <div className="lamp-box" ref={ref}>
      <div className="lamg-box-bg">
        {/* <img src={ImgLightTotal} alt="" className="img-light" /> */}
        <div className="img-light">
          <img src={ImgLight} alt="" className="img-light-lit" />
          <div className="img-light-spark">
            <img src={ImgLightSpark1} alt="" className="img-light-spark1" />
            <img src={ImgLightSpark2} alt="" className="img-light-spark2" />
            <img src={ImgLightSpark3} alt="" className="img-light-spark3" />
          </div>
        </div>
        <img src={ImgLamp} alt="" className="img-lamp" />
      </div>
      <div className="lamg-box-content">{children}</div>
    </div>
  );
});

export default LampBox;
