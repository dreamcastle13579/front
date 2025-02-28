import React from "react";

interface Props {
  initVisible?: boolean;
  delay: number;
}

const useAppearEffect = ({ delay, initVisible }: Props) => {
  const [visible, setVisible] = React.useState(initVisible);

  React.useEffect(() => {
    setTimeout(() => {
      setVisible((visible) => !visible);
    }, delay);
  }, []);

  return {
    visible,
  };
};

export default useAppearEffect;
