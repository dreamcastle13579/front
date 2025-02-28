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

  const executeShare = (url: string) => {
    navigator.share({ url });
  };
  const executeCopy = (data: string) => {
    const $textarea = document.createElement("textarea");
    document.body.appendChild($textarea);
    $textarea.value = data;
    $textarea.select();
    document?.execCommand?.("copy");
    document.body.removeChild($textarea);
  };
  const handleShare = () => {
    const url = import.meta.env.VITE_BASE_URL;
    if (!navigator.canShare()) {
      return executeCopy(url);
    }

    return executeShare(url);
  };

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
            <Button variant="secondary" onClick={handleShare}>
              공유하기
            </Button>
            <Button variant="primary">저장하기</Button>
          </ButtonBox>
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Analysis;
