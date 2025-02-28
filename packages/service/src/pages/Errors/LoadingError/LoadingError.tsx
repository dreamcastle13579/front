import React from "react";
import { useNavigate } from "react-router-dom";

import "./LoadingError.scss";

import { Layout, Main } from "../../../frame";

import { FullPageInfo, Button } from "design-system";

import ImgFairy from "./imgs/img-fairy.svg";

const LoadingError = () => {
  const navigate = useNavigate();
  const handelMoveToPage = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Main>
        <FullPageInfo
          info="loading-error"
          before={{
            title: (
              <>
                앗, 뭔가 잘못됐다꿈!
                <br /> 다시 시도해봐라꿈!
              </>
            ),
            img: <img src={ImgFairy} alt="" />,
            content: (
              <Button
                variant="primary"
                onClick={() => {
                  handelMoveToPage();
                }}
              >
                뒤로가기
              </Button>
            ),
          }}
        />
      </Main>
    </Layout>
  );
};

export default LoadingError;
