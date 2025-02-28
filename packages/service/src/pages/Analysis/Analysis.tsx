import React from "react";

import "./Analysis.scss";

import { Layout, Main } from "../../frame";

import { ContentBox, Button, ButtonBox } from "design-system";

import LampBox from "./LampBox";

import { AppContext } from "../../context/AppContext";

import categories from "./categories";

const Analysis = () => {
  const { dream } = React.useContext(AppContext);

  const { category = "" } = dream?.interpret || {};

  const getRandom = (length: number) => {
    return Math.floor(Math.random() * length);
  };
  const getLetter = (category: string) => {
    const hasCategory = !!categories?.[category as keyof typeof categories];
    const currentCategory = hasCategory
      ? category
      : Object.keys(categories)[getRandom(Object.keys(categories).length)];
    const currentData = categories[currentCategory as keyof typeof categories];

    const random = getRandom(currentData.letters?.length || 3);
    const letter = currentData.letters?.[random];
    return letter;
  };

  const letter = getLetter(category);

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
