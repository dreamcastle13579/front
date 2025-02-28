import "./Bead.scss";

import BeadImg from "./imgs/bead-result.svg";

const Bead = () => {
  return (
    <div className={`bead-result-img`}>
      <img src={BeadImg} alt="" />
    </div>
  );
};

export default Bead;
