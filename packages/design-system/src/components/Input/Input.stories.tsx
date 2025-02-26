import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./";

export default {
  title: "Sample/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: any) => (
  <Input {...args} />
);

export const Exmaple = Template.bind({});
Exmaple.args = {
  value: "test",
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  value: "test",
  align: "center",
};
