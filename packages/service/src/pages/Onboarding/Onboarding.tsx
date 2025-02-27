import React from "react";
import { useNavigate } from "react-router-dom";

import "./Onboarding.scss";

import { Layout, Main } from "../../frame";

import { Button, ButtonBox } from "design-system";

import Logo from "./imgs/logo.svg";
import ImgOnboarding from "./imgs/img-onboarding.svg";

const Onboarding = () => {
  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate("/nickname");
  };

  return (
    <Layout>
      <Main>
        <div className="onboarding-page">
          <div className="onboarding-content">
            <div className="onboarding-title">
              <img src={Logo} alt="몽글몽글" />
            </div>
            <div className="onboarding-img">
              <img src={ImgOnboarding} alt="" />
            </div>
            <p className="onboarding-text">
              우리는 꿈의 요정이꿈!
              <br />
              <span>
                꿈 얘기를 들려주면 <br />
                오직 너만을 위해 해석해주겠꿈!
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
