import React from "react";
import { useNavigate } from "react-router-dom";

import "./Relief.scss";

import { Layout, Main } from "../../frame";

import { ContentBox, Title } from "design-system";

import BeadSpark from "./BeadSpark";

const Relief = () => {
  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate("/analysis");
  };

  const [step, setStep] = React.useState(0);
  const handleStep = () => {
    if (step === 0) return setStep(step + 1);
    handelMoveToPage();
  };
  return (
    <Layout>
      <Main>
        <ContentBox>
          <Title title="style">
            {step === 0 ? (
              "소원구슬에 손을 대봐라꿈!"
            ) : (
              <>
                소원구슬 안에 <br />
                   뭔가 보      이는 것 같꿈!
              </>
            )}
          </Title>

          <BeadSpark step={step} onStep={handleStep} />

          <p
            className="relief-text"
            onClick={() => {
              handelMoveToPage();
            }}
          >
            {step === 0 ? "구슬을 눌러보세요!" : "빛을 눌러보세요!"}
          </p>
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Relief;
