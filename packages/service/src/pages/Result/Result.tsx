import { useParams } from "react-router-dom";

import "./Result.scss";

import { Layout, Main } from "../../frame";
import { ContentBox } from "design-system";

import ResultNum from "./ResultNum";
import ResultLast from "./ResultLast";

const Result = () => {
  const { id } = useParams();

  return (
    <Layout>
      <Main>
        <ContentBox>
          {Number.isInteger(Number(id)) ? <ResultNum /> : <ResultLast />}
        </ContentBox>
      </Main>
    </Layout>
  );
};

export default Result;
