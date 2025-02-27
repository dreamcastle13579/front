import React from "react";

import "./Loading.scss";

import { FullPageInfo, Button } from "design-system";

import LoadingBefore from "./imgs/loading-before.svg";
import LoadingAfter from "./imgs/loading-after.svg";

const Loading = () => {
  return (
    <FullPageInfo
      info="loading"
      before={{
        title: "꿈을 읽고 있꿈..",
        img: <img src={LoadingBefore} alt="" />,
        content: (
          <div className="loading-before">
            지금 페이지를 나가면 내용을 잃을 수 있어요
            <br /> 조금만 기다려주세요
          </div>
        ),
      }}
      after={{
        title: "별명! 오늘 너의 꿈은...",
        img: <img src={LoadingAfter} alt="" />,
        content: <Button variant="primary">어떤 꿈인데?</Button>,
      }}
    />
  );
};

export default Loading;
