import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonBox } from "./";

import { Button } from "../Button";

export default {
  title: "Sample/ButtonBox",
  component: ButtonBox,
} as ComponentMeta<typeof ButtonBox>;

const Template: ComponentStory<typeof ButtonBox> = (args: any) => (
  <ButtonBox {...args} />
);

export const Exmaple = Template.bind({});
Exmaple.args = {
  children: (
    <>
      <Button variant="secondary">secondary</Button>
      <Button variant="primary">primary</Button>
    </>
  ),
};
