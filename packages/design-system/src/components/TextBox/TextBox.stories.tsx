import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextBox } from "./";

export default {
  title: "Sample/TextBox",
  component: TextBox,
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args: any) => (
  <TextBox {...args} />
);

export const Exmaple = Template.bind({});
Exmaple.args = {
  children: (
    <>
      별명 위해 특별히
      <br /> 소원 구슬을 준비했꿈! <br />
      <br />
      원하는 것을 빌어봐라꿈
    </>
  ),
};
