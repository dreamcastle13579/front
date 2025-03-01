import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";

import { Bubble, Button } from "design-system";

import { AppContext } from "../../context/AppContext";

import fullAnimation from "./lotties/full-animation.json";

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

  const lottieOptions = {
    loop: false,
    autoplay: false,
    animationData: fullAnimation,
    onEnterFrame: () => setIsPlaying(true),
    onComplete: () => setIsPlaying(false),
  };
  const frameSequences = [
    { start: 0, end: 80 },
    { start: 80, end: 180 },
    { start: 180, end: 280 },
    { start: 280, end: 380 },
    { start: 380, end: 480 },
    { start: 480, end: 580 },
    { start: 580, end: 680 },
  ];

  const lottieRef = React.useRef<any>(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  React.useEffect(() => {
    const anim = lottieRef.current?.anim;
    if (!anim) return;

    anim.stop();
    const frame = frameSequences[order];
    anim.playSegments([frame.start, frame.end], true);
  }, [order]);

  return (
    <>
      <Lottie options={lottieOptions} ref={lottieRef} />
      <Bubble bubble="textbox">
        <p className="textbox">{message}</p>
        <Button
          variant="primary"
          onClick={handleClick}
          className={isPlaying ? "is-prevent" : ""}
        >
          {comment}
        </Button>
      </Bubble>
    </>
  );
};

export default ResultNum;
