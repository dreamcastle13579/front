import React from "react";

import "./InterpretIntro.scss";

import { FullPageInfo } from "design-system";

import ImgInterpretIntro from "./imgs/img-interpret-intro.svg";

const InterpretIntro = () => {
  return (
    <FullPageInfo
      info="interpret-intro"
      before={{
        title: (
          <>
            별명! 멋지다꿈! <br />
            <br />
            이제 어떤 꿈을 꿨는지 알려달라꿈 <br />
            우리가 한 번 들어볼게꿈
          </>
        ),
        img: <img src={ImgInterpretIntro} alt="" />,
      }}
    />
  );
};

export default InterpretIntro;
