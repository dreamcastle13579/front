import React from "react";

import "./Analysis.scss";

import { Layout, Main } from "../../frame";

import { ContentBox, Button, ButtonBox } from "design-system";

import LampBox from "./LampBox";

import { AppContext } from "../../context/AppContext";

import categories from "./categories";

const Analysis = () => {
  const { dream } = React.useContext(AppContext);

  const { category = "love" } = dream?.interpret || {};
  const currentData =
    categories?.[category as keyof typeof categories] || categories["love"];
  const random = Math.floor(Math.random() * currentData.letters.length) + 1;
  const letter = currentData.letters?.[random];

  return (
    <Layout>
      <Main>
        <ContentBox>
          <LampBox>
            {dream?.nickname}에게
            <br />
            <br />
            {letter}
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
