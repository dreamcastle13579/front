import React from "react";

interface Props {
  initVisible?: boolean;
  delay: number;
  callback?: Function;
}

const useAppearEffect = ({ delay, initVisible, callback }: Props) => {
  const [visible, setVisible] = React.useState(initVisible);

  React.useEffect(() => {
    setTimeout(() => {
      setVisible((visible) => !visible);
      callback?.();
    }, delay);
  }, []);

  return {
    visible,
  };
};

export default useAppearEffect;
