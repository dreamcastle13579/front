import React from "react";
import { useNavigate } from "react-router-dom";

import "./Nickname.scss";

import { Layout, Main } from "../../frame";

import {
  Title,
  Bubble,
  Input,
  Button,
  ButtonBox,
  ContentBox,
} from "design-system";

const Nickname = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate("/interpret");
  };

  return (
    <Layout>
      <Main>
        <ContentBox>
          <Title title="info">내 이름은</Title>
          <Bubble bubble="input">
            <Input
              value=""
              placeholder="이름을 입력해주세요"
              onChange={(e) => {}}
              align="center"
              ref={ref}
            />
          </Bubble>
          <ButtonBox>
            <Button variant="primary" onClick={handelMoveToPage}>
              내 이름이야!
            </Button>
          </ButtonBox>
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Nickname;
