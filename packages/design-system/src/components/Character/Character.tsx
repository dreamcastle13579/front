import "./Character.scss";

import CharaterChimchak from "./imgs/character-chimchak.svg";
import CharaterDubeok from "./imgs/character-dubeok.svg";
import CharaterHeemang from "./imgs/character-heemang.svg";
import CharaterJangnan from "./imgs/character-jangnan.svg";
import CharaterMemori from "./imgs/character-memori.svg";
import CharaterPogun from "./imgs/character-pogun.svg";

const characters = {
  chimchak: CharaterChimchak,
  dubeok: CharaterDubeok,
  heemang: CharaterHeemang,
  jangnan: CharaterJangnan,
  memori: CharaterMemori,
  pogun: CharaterPogun,
};

interface Props {
  character: keyof typeof characters;
}

const Character = (props: Props) => {
  const { character } = props;
  const current = characters[character];

  return (
    <div className={`ui-character`}>
      {current && <img src={current} alt="" />}
    </div>
  );
};

export type { Props };
export default Character;
