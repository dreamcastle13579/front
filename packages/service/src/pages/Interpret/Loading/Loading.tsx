import React from "react";
import Lottie from "react-lottie";

import "./Loading.scss";

import { FullPageInfo, EffectSwitcher, Button } from "design-system";

import loadingLottie from "./lotties/loading-lottie.json";
import loadingLottieAfter from "./lotties/loading-lottie-after.json";

import { AppContext } from "../../../context/AppContext";

const LoadingLottieBefore = (
  <Lottie
    options={{
      autoplay: true,
      loop: true,
      animationData: loadingLottie,
    }}
  />
);
const LoadingLottieAfter = (
  <Lottie
    options={{
      autoplay: true,
      loop: false,
      animationData: loadingLottieAfter,
    }}
  />
);

interface Props {
  trigger?: boolean;
  onMoveToPgae: Function;
}

const Loading = ({ trigger, onMoveToPgae }: Props) => {
  const { dream } = React.useContext(AppContext);

  return (
    <FullPageInfo
      info="loading"
      trigger={trigger}
      before={{
        title: (
          <EffectSwitcher
            items={["꿈을 읽고 있꿈..", "조금만 기다려라꿈", "거의 다했다꿈.."]}
            effect="fade"
            interval={2000}
          />
        ),
        img: LoadingLottieBefore,
        content: (
          <div className="loading-before">
            지금 페이지를 나가면 내용을 잃을 수 있어요
            <br /> 조금만 기다려주세요
          </div>
        ),
      }}
      after={{
        title: `${dream?.nickname}! 오늘 너의 꿈은...`,
        img: LoadingLottieAfter,
        content: (
          <Button
            variant="primary"
            onClick={() => {
              onMoveToPgae();
            }}
          >
            어떤 꿈인데?
          </Button>
        ),
      }}
    />
  );
};

export default Loading;
