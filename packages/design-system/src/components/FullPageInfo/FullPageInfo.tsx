import React from "react";

import "./FullPageInfo.scss";

import { Title } from "design-system";

interface Data {
  title?: React.ReactNode;
  img?: React.ReactNode;
  content?: React.ReactNode;
}

interface Props {
  info?: string;
  time?: number;
  before: Data;
  after?: Data;
  trigger?: boolean;
}

const FullPageInfo = (props: Props) => {
  const { info = "", trigger, before = {}, after } = props;
  const [currentState, setCurrentState] = React.useState<"before" | "after">(
    "before"
  );

  React.useEffect(() => {
    if (after && trigger) {
      setCurrentState("after");
    }
  }, [trigger]);

  const isAnimation = trigger && !!after;

  return (
    <>
      <div className={`ui-full-page-box info-${info}`}>
        <div className="ui-full-page-inner">
          <div className={`ui-full-page-title ${isAnimation ? "is-ani" : ""}`}>
            <div className="ui-full-page-before">
              <Title title="style">{before.title}</Title>
            </div>
            {currentState === "after" && (
              <div className="ui-full-page-after">
                <Title title="style">{after?.title}</Title>
              </div>
            )}
          </div>
          <div
            className={`ui-full-page-img ${
              after && before.img !== (after && after?.img) ? "is-ani" : ""
            }`}
          >
            {(!after ||
              currentState === "before" ||
              (currentState === "after" && before.img === after?.img)) && (
              <div className="ui-full-page-before">{before.img}</div>
            )}
            {currentState === "after" && before.img !== after?.img && (
              <div className="ui-full-page-after">{after?.img}</div>
            )}
          </div>
          <div
            className={`ui-full-page-content ${isAnimation ? "is-ani" : ""}`}
          >
            <div className="ui-full-page-before">{before.content}</div>
            {currentState === "after" && (
              <div className="ui-full-page-after">{after?.content}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export type { Props };
export default FullPageInfo;
