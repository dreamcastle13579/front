import React from "react";
import { useNavigate } from "react-router-dom";

import "./Interpret.scss";

import { Layout, Main } from "../../frame";

import {
  Title,
  Bubble,
  Textarea,
  DigitText,
  Button,
  ButtonBox,
  ContentBox,
} from "design-system";

const Interpret = () => {
  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate("/result/1");
  };

  return (
    <Layout>
      <Main>
        <ContentBox>
          <Title title="info">오늘 내가 꾼 꿈은...</Title>
          <Bubble bubble="textarea">
            <Textarea
              value=""
              placeholder="오늘 꾼 꿈을 입력해주세요"
              onChange={() => {}}
            ></Textarea>
            <DigitText total="250">282</DigitText>
          </Bubble>
          <ButtonBox>
            <Button variant="primary" onClick={handelMoveToPage}>
              이게 내 꿈이야
            </Button>
          </ButtonBox>
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Interpret;
