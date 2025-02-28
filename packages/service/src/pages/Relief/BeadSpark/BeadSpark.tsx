import "./BeadSpark.scss";

import BeadImg from "./imgs/bead-relief.svg";
import BeadSparkImg from "./imgs/bead-relief-spark.svg";

interface Props {
  step: number;
  onStep: () => void;
}

const BeadSpark = ({ step, onStep }: Props) => {
  return (
    <div
      className={`bead-relief-img`}
      onClick={() => {
        onStep();
      }}
    >
      <img src={BeadImg} alt="" className="bead-relief" />
      {step !== 0 && (
        <img src={BeadSparkImg} alt="" className="bead-relief-spark" />
      )}
    </div>
  );
};

export default BeadSpark;
