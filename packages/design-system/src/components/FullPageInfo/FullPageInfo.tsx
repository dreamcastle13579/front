import React from "react";

import "./FullPageInfo.scss";

import { ContentBox, Title } from "design-system";

interface Data {
  title?: React.ReactNode;
  img?: React.ReactNode;
  content?: React.ReactNode;
}

interface Props {
  info?: string;
  before: Data;
  after?: Data;
}

const FullPageInfo = (props: Props) => {
  const { info = "", before = {}, after = {} } = props;
  const [currentState, seCurrentState] = React.useState<"before" | "after">(
    "before"
  );
  return (
    <>
      <div className={`ui-full-page-box info-${info}`}>
        <div className="ui-full-page-inner">
          <div className="ui-full-page-title">
            {currentState === "before" ? (
              <div className="ui-full-page-before">
                <Title title="style">{before.title}</Title>
              </div>
            ) : (
              <div className="ui-full-page-after">
                <Title title="style">{after.title}</Title>
              </div>
            )}
          </div>
          <div className="ui-full-page-img">
            {currentState === "before" ||
            (currentState === "after" && before.img === after.img) ? (
              <div className="ui-full-page-before">{before.img}</div>
            ) : (
              <div className="ui-full-page-after">{after.img}</div>
            )}
          </div>
          <div className="ui-full-page-content">
            {currentState === "before" ? (
              <div className="ui-full-page-before">{before.content}</div>
            ) : (
              <div className="ui-full-page-after">{after.content}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export type { Props };
export default FullPageInfo;
