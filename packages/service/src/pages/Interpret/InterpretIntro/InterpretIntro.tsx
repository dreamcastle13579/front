import React from "react";
import Lottie from "react-lottie";

import "./InterpretIntro.scss";

import { FullPageInfo } from "design-system";

import lottieInterpretIntro from "./lotties/img-interpret-intro.json";

import { AppContext } from "../../../context/AppContext";

const InterpretIntro = () => {
  const { dream } = React.useContext(AppContext);
  return (
    <FullPageInfo
      info="interpret-intro"
      before={{
        title: (
          <>
            {dream?.nickname}! 멋지다꿈! <br />
            <br />
            이제 어떤 꿈을 꿨는지 알려달라꿈
          </>
        ),
        img: (
          <Lottie
            options={{
              autoplay: true,
              loop: true,
              animationData: lottieInterpretIntro,
            }}
          />
        ),
      }}
    />
  );
};

export default InterpretIntro;
