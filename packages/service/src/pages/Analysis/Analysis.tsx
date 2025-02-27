import React from "react";

import "./Analysis.scss";

import { Layout, Main } from "../../frame";

import { ContentBox, Button, ButtonBox } from "design-system";

import LampBox from "./LampBox";

const Analysis = () => {
  return (
    <Layout>
      <Main>
        <ContentBox>
          <LampBox>
            00에게
            <br />
            <br />
            네가 어릴 때, 우리 함께 바닷가에서 조개를 주웠던 거 기억하니?
            조그마한 손으로 조개를 하나하나 모으던 네 모습이 아직도 눈에
            선하구나. 언제나 너를 생각하고 있어. 사랑해. 엄마가.
          </LampBox>
          <ButtonBox>
            <Button variant="secondary">공유하기</Button>
            <Button variant="primary">저장하기</Button>
          </ButtonBox>
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Analysis;
