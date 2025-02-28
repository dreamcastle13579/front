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

import NickNameIntro from "./NickNameIntro";

import { AppContext } from "../../context/AppContext";
import { DreamState } from "../../context/AppContext";

const Nickname = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate("/interpret");
  };

  const time = React.useRef<number>(800 + 600);
  const [isIntroLoadingDone, setIsIntroLoadingDone] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsIntroLoadingDone(true);
    }, time.current);
  }, []);

  const { setDream } = React.useContext(AppContext);
  const handleClick = () => {
    setDream((prev) => {
      if (prev === null) return null;
      return { ...prev, nickname } as DreamState;
    });
    handelMoveToPage();
  };

  const [nickname, setNickName] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickName(e.target.value);

  return (
    <Layout>
      <Main>
        {!isIntroLoadingDone && <NickNameIntro />}
        <ContentBox>
          <Title title="info">내 이름은</Title>
          <Bubble bubble="input">
            <Input
              value={nickname}
              placeholder="이름을 입력해주세요"
              onChange={handleChange}
              align="center"
              ref={ref}
            />
          </Bubble>
          <ButtonBox>
            <Button variant="primary" onClick={handleClick}>
              내 이름이야!
            </Button>
          </ButtonBox>
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Nickname;
