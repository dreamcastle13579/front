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

import { useAppearEffect } from "../../hooks";

import InterpretIntro from "./InterpretIntro";
import Loading from "./Loading";

import { AppContext } from "../../context/AppContext";
import { DreamState } from "../../context/AppContext";

import { postInterpret } from "../../api";

const Interpret = () => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  React.useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, []);

  const { visible: isIntroVisible } = useAppearEffect({
    delay: 800 + 600,
    initVisible: true,
  });

  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate("/result/1");
  };

  const { dream, setDream } = React.useContext(AppContext);
  const handleClick = async () => {
    setDream((prev) => {
      if (prev === null) return null;
      return { ...prev, content } as DreamState;
    });

    await handleRequest();

    handelMoveToPage();
  };

  const [content, setContent] = React.useState("");
  const handleValidate = (value: string) => {
    const filteredText = value.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]/g, "");
    return filteredText;
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = handleValidate(e.target.value);
    setContent(text);
  };

  const isValidation = content.length > 9;

  const handleRequest = async () => {
    if (!dream?.nickname) return null;
    try {
      const timeout = 3000;
      const {
        data: { result },
      } = await postInterpret(
        { nickname: dream?.nickname, content },
        { timeout }
      );
      setDream((prev) => {
        return { ...prev, interpret: result } as DreamState;
      });
    } catch (e) {
      console.error(e);
      navigate("/loading-error");
      throw e;
    }
  };

  return (
    <Layout>
      <Main>
        <ContentBox>
          {isIntroVisible && <InterpretIntro />}
          <FullFixedBox
            space={64}
            bottomSpace={56}
            bottom={
              <ButtonBox>
                <Button
                  variant="primary"
                  disabled={!isValidation}
                  onClick={handleClick}
                >
                  이게 내 꿈이야
                </Button>
              </ButtonBox>
            }
          >
            <Title title="info">오늘 내가 꾼 꿈은...</Title>
            <Bubble bubble="textarea">
              <Textarea
                ref={ref}
                value={content}
                placeholder="오늘 꾼 꿈을 입력해주세요"
                maxLength={250}
                onChange={handleChange}
                adjustable={true}
              ></Textarea>
              <DigitText total="250">{content.length}</DigitText>
            </Bubble>
          </FullFixedBox>
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Interpret;
