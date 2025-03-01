import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

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

  const { visible: isIntroVisible } = useAppearEffect({
    delay: 800,
    initVisible: true,
    callback: () => {
      if (ref && ref.current) {
        ref.current.focus();
      }
    },
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

  const [isLoadingStarted, setIsLoadingStarted] =
    React.useState<boolean>(false);
  const [isLoadingDone, setIsLoadingDone] = React.useState<boolean>(false);
  const { refetch, error } = useQuery({
    queryKey: ["/dreams/interpretation"],
    queryFn: async () => {
      setIsLoadingStarted(true);
      if (!dream?.nickname) return null;
      const timeout = 10000;
      return await postInterpret(
        { nickname: dream?.nickname, content },
        { timeout }
      );
    },
    enabled: false,
    retry: false,
  });

  const handleRequest = async () => {
    if (!dream?.nickname) return null;
    let data = dream.interpret;
    let error: Error | null = null;
    try {
      setIsLoadingStarted(true);
      if (!data) {
        const { data: resData, error: resError } = await refetch();
        data = resData?.data.result;
        error = resError;
        if (error) return navigate("/loading-error");
      }
      const interval = 800;
      setTimeout(() => {
        setIsLoadingDone(true);
      }, interval);
      setDream((prev) => {
        return { ...prev, interpret: data } as DreamState;
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
                textareaRef={ref}
                value={content}
                placeholder="오늘 꾼 꿈을 입력해주세요"
                maxLength={250}
                onChange={handleChange}
                adjustable={true}
              ></Textarea>
              <DigitText total="250">{content.length}</DigitText>
            </Bubble>
          </FullFixedBox>
          {isLoadingStarted && (
            <Loading onMoveToPgae={handelMoveToPage} trigger={isLoadingDone} />
          )}
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Interpret;
