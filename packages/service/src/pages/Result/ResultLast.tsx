import React from "react";
import { useNavigate } from "react-router-dom";

import { Title, TextBox, Button, ButtonBox } from "design-system";

import Bead from "./Bead";

const Result = () => {
  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate("/relief");
  };
  return (
    <>
      <div className="full-box result-full-box">
        <div className="full-box-content">
          <Title title="style">우리의 해석은 여기까지라꿈!</Title>
          <Bead />
          <TextBox>
            별명 위해 특별히
            <br /> 소원 구슬을 준비했꿈! <br />
            <br />
            원하는 것을 빌어봐라꿈
          </TextBox>
        </div>
        <div className="full-box-bottom">
          <ButtonBox>
            <Button variant="primary" onClick={handelMoveToPage}>
              오 해볼래
            </Button>
          </ButtonBox>
        </div>
      </div>
    </>
  );
};

export default Result;
