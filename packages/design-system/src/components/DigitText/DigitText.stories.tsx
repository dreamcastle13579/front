import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DigitText } from "./";

export default {
  title: "Sample/DigitText",
  component: DigitText,
} as ComponentMeta<typeof DigitText>;

const Template: ComponentStory<typeof DigitText> = (args: any) => (
  <DigitText {...args} />
);

export const Exmaple = Template.bind({});
Exmaple.args = {
  children: "282",
  total: "250",
};
