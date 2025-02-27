import React from "react";

import "./BeadSpark.scss";

import BeadImg from "./imgs/bead-relief.svg";
import BeadSparkImg from "./imgs/bead-relief-spark.svg";

const BeadSpark = () => {
  return (
    <div className={`bead-relief-img`}>
      <img src={BeadImg} alt="" className="bead-relief" />
      <img src={BeadSparkImg} alt="" className="bead-relief-spark" />
    </div>
  );
};

export default BeadSpark;
