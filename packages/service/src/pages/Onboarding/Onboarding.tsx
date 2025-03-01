import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";

import "./Onboarding.scss";

import { Layout, Main } from "../../frame";

import { Button, ButtonBox } from "design-system";

import Logo from "./imgs/logo.svg";
import ImgGrass from "./imgs/ grass-onboarding.svg";
import lottieOnboarding from "./lotties/img-onboarding.json";

const Onboarding = () => {
  const [step, setOn] = React.useState(0);
  const navigate = useNavigate();
  const handelMoveToPage = () => {
    // step1
    // ani-a
    // start - bg - animation / logo, text, button - fadeOut
    setOn(1);

    // step2
    // ani-a
    // lottie - start
    const step2Interval = 800;
    setTimeout(() => {
      setOn(2);
    }, step2Interval);

    // step3
    // ani-a ani-b
    const step3Interval = 800 + 300;
    setTimeout(() => {
      setOn(3);
    }, step3Interval);

    // step4
    // ani-a ani-b ani-c
    // subtext - fadeIn
    const step4Interval = 800 + 300 + 200;
    setTimeout(() => {
      setOn(4);
    }, step4Interval);

    // step5
    // ani-a ani-b ani-c ani-d
    // subtext - fadeOut
    // lottie - fadeOut
    const finalInterval = 800 + 300 + 200 + 1600;
    setTimeout(() => {
      setOn(5);
      navigate("/nickname");
    }, finalInterval);
  };

  return (
    <Layout>
      <Main>
        <div
          className={`onboarding-page ${
            step === 0
              ? ""
              : step === 1
              ? "is-ani-a"
              : step === 2
              ? "is-ani-a is-ani-b"
              : step === 3
              ? "is-ani-a is-ani-b is-ani-c"
              : step === 4 || step === 5
              ? "is-ani-a is-ani-b is-ani-c is-ani-d"
              : ""
          }`}
        >
          <div className="onboarding-bg">
            <img src={ImgGrass} alt="" />
          </div>
          <div className="onboarding-content">
            <div className="onboarding-title">
              <img src={Logo} alt="몽글몽글" />
            </div>
            <div className="onboarding-sub-title">뭐라고 불러줄꿈?</div>
            <div className="onboarding-img">
              <Lottie
                options={{
                  autoplay: step === 2 ? true : false,
                  loop: false,
                  animationData: lottieOnboarding,
                }}
              />
            </div>
            <p className="onboarding-text">
              만나서 반갑꿈! <br />
              우리는 꿈의 요정이꿈!
              <br />
              <span>
                네 꿈을  들려주면 <br />딱 맞는 해석을 해주겠꿈!
              </span>
            </p>
          </div>
          <div className="onboarding-bottom">
            <ButtonBox>
              <Button variant="primary" onClick={handelMoveToPage}>
                들려줄게
              </Button>
            </ButtonBox>
          </div>
        </div>
      </Main>
    </Layout>
  );
};

export default Onboarding;
