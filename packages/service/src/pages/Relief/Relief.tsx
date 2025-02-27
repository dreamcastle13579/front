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
  return (
    <Layout>
      <Main>
        <ContentBox>
          <Title title="style">소원구슬에 손을 대봐라꿈!</Title>
          {/* <Title title="style">소원구슬 안에 뭔가 보이는 것 같꿈!</Title> */}

          <BeadSpark />

          <p
            className="relief-text"
            onClick={() => {
              handelMoveToPage();
            }}
          >
            구슬을 눌러보세요!
          </p>
          {/* <p className="relief-text">빛을 눌러보세요!</p> */}
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Relief;
