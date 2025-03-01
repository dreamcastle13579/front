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

import { AppContext } from "../../context/AppContext";
import { DreamState } from "../../context/AppContext";

const Nickname = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate("/interpret");
  };

  // const { visible: isIntroVisible } = useAppearEffect({
  //   delay: 800 + 600,
  //   initVisible: true,
  //   callback: () => {
  //     if (ref && ref.current) {
  //       ref.current.focus();
  //     }
  //   },
  // });

  const { dream, setDream } = React.useContext(AppContext);
  const handleClick = () => {
    setDream((prev) => {
      if (prev === null) return null;
      return { ...prev, nickname } as DreamState;
    });
    handelMoveToPage();
  };

  const [nickname, setNickName] = React.useState(dream?.nickname || "");
  const handleValidate = (value: string) => {
    const koreanText = value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
    return koreanText;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = handleValidate(e.target.value);
    setNickName(text);
  };

  const minLength = 2;
  const isValidation = nickname.length >= minLength;

  return (
    <Layout>
      <Main>
        {/* {isIntroVisible && <NickNameIntro />} */}
        <ContentBox>
          <Title title="info">내 이름은</Title>
          <Bubble bubble="input">
            <Input
              value={nickname}
              placeholder="이름을 입력해주세요"
              maxLength={5}
              onChange={handleChange}
              align="center"
              inputRef={ref}
            />
          </Bubble>
        </ContentBox>
        <ButtonBox>
          <Button
            variant="primary"
            disabled={!isValidation}
            onClick={handleClick}
          >
            내 이름이야!
          </Button>
        </ButtonBox>
      </Main>
    </Layout>
  );
};

export default Nickname;
