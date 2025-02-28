import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Bubble, Button } from "design-system";

import { AppContext } from "../../context/AppContext";

const comments = [
  { character: "memori", comment: "다른 요정들은 어떻게 생각해?" },
  { character: "heemang", comment: "진짜.. 그럴까?" },
  { character: "pogun", comment: "응 ㅠㅠ" },
  { character: "chimchak", comment: "생각 좀 해봐야겠는데..." },
  { character: "jangnan", comment: "뭐래~" },
  { character: "dubeok", comment: "알겠어. 노력해볼게" },
];

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

  const { dream } = React.useContext(AppContext);

  const message = dream?.interpret?.messages[order];
  const comment = comments?.[order].comment;

  return (
    <>
      <div
        style={{
          height: "327px",
          border: "1px solid red",
          display: "flex",
          padding: "0px 63px",
          justifyContent: "center",
          alignItems: "center",
          flex: "1 0 0",
          alignSelf: "stretch",
        }}
      >
        (원이 커지는) 주민들 이미지 예정
      </div>
      <Bubble bubble="textbox">
        <p className="textbox">{message}</p>
        <Button variant="primary" onClick={handleClick}>
          {comment}
        </Button>
      </Bubble>
    </>
  );
};

export default ResultNum;
