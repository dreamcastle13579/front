import React from "react";

import "./NickNameIntro.scss";

import { FullPageInfo } from "design-system";

import ImgNickNameIntro from "./imgs/img-nickname-intro.svg";

const NickNameIntro = () => {
  return (
    <FullPageInfo
      info="nick-name-intro"
      before={{
        title: (
          <>
            만나서 반갑꿈, <br /> 뭐라고 불러줄꿈?
          </>
        ),
        img: <img src={ImgNickNameIntro} alt="" />,
      }}
    />
  );
};

export default NickNameIntro;
