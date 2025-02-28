import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Bubble, Button } from "design-system";

const ResultNum = () => {
  const { id } = useParams<{ id: string }>();
  const currentId = Number(id) || 1;
  const order = currentId - 1 || 0;

  const navigate = useNavigate();
  const handelMoveToPage = () => {
    if (order < 5) {
      navigate(`/result/${currentId + 1}`);
    } else {
      navigate(`/result/last`);
    }
  };

  const handleClick = () => {
    handelMoveToPage();
  };

  return (
    <>
      <div
        style={{
          height: "327px",
          border: "1px solid red",
          display: "flex",
          padding: "0px 63px",
          "justify-content": "center",
          "align-items": "center",
          flex: "1 0 0",
          "align-self": "stretch",
        }}
      >
        (원이 커지는) 주민들 이미지 예정
      </div>
      <Bubble bubble="textbox">
        <p className="textbox">
          이름 의 꿈은 이런 내용이었다고 하꿈! 이런 내용은 보통 좋은 기운을 담은
          길몽이꿈!
        </p>
        <Button variant="primary" onClick={handleClick}>
          다른 애들은 어떻게 생각해?
        </Button>
      </Bubble>
    </>
  );
};

export default ResultNum;
