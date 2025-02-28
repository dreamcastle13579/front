import React from "react";
import html2canvas from "html2canvas";

import "./Analysis.scss";

import { Layout, Main } from "../../frame";

import { Button, ButtonBox } from "design-system";

import LampBox from "./LampBox";

import { AppContext } from "../../context/AppContext";

import categories from "./categories";

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const Analysis = () => {
  const { dream } = React.useContext(AppContext);

  const { category = "" } = dream?.interpret || {};

  const getRandom = (length: number) => {
    return Math.floor(Math.random() * length);
  };
  const getLetter = (category: string) => {
    const hasCategory = !!categories?.[category as keyof typeof categories];
    const currentCategory = hasCategory
      ? category
      : Object.keys(categories)[getRandom(Object.keys(categories).length)];
    const currentData = categories[currentCategory as keyof typeof categories];

    const random = getRandom(currentData.letters?.length || 3);
    const letter = currentData.letters?.[random];
    return letter;
  };

  const letter = getLetter(category);

  const executeShare = (url: string) => {
    navigator.share({ url });
  };
  const executeCopy = (data: string) => {
    const $textarea = document.createElement("textarea");
    document.body.appendChild($textarea);
    $textarea.value = data;
    $textarea.select();
    document?.execCommand?.("copy");
    document.body.removeChild($textarea);
  };
  const handleShare = () => {
    const url = import.meta.env.VITE_BASE_URL;
    if (!navigator.canShare()) {
      return executeCopy(url);
    }

    return executeShare(url);
  };

  const execImgSave = (target: HTMLDivElement, fileName: string) => {
    if (!target) return;
    html2canvas(target).then((canvas) => {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = canvas.toDataURL("image/png");
      link.download = `${fileName}.png`;
      link.click();
      document.body.removeChild(link);
    });
  };
  const ref = React.useRef<HTMLDivElement | null>(null);
  const handleSave = () => {
    ref.current &&
      execImgSave(ref.current, `analysis ${formatDate(new Date())}`);
  };

  return (
    <Layout>
      <Main>
        <div className="anlysis-content">
          <LampBox ref={ref}>
            {dream?.nickname}에게
            <br />
            <br />
            {letter}
          </LampBox>
          <ButtonBox>
            <Button variant="secondary" onClick={handleShare}>
              공유하기
            </Button>
            <Button variant="primary" onClick={handleSave}>
              저장하기
            </Button>
          </ButtonBox>
        </div>
      </Main>
    </Layout>
  );
};

export default Analysis;
