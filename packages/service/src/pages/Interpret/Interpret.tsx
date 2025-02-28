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
  FullFixedBox,
} from "design-system";

import { AppContext } from "../../context/AppContext";
import { DreamState } from "../../context/AppContext";

const Interpret = () => {
  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate("/result/1");
  };

  const { setDream } = React.useContext(AppContext);
  const handleClick = () => {
    setDream((prev) => {
      if (prev === null) return null;
      return { ...prev, content } as DreamState;
    });

    handelMoveToPage();
  };

  const [content, setContent] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <Layout>
      <Main>
        <ContentBox>
          <FullFixedBox
            space={64}
            bottomSpace={56}
            bottom={
              <ButtonBox>
                <Button variant="primary" onClick={handleClick}>
                  이게 내 꿈이야
                </Button>
              </ButtonBox>
            }
          >
            <Title title="info">오늘 내가 꾼 꿈은...</Title>
            <Bubble bubble="textarea">
              <Textarea
                value={content}
                placeholder="오늘 꾼 꿈을 입력해주세요"
                onChange={handleChange}
              ></Textarea>
              <DigitText total="250">280</DigitText>
            </Bubble>
          </FullFixedBox>
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Interpret;
