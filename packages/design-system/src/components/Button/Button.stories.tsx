import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./";

export default {
  title: "Sample/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Default",
  variant: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "secondary",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: "Primary disabled",
  variant: "primary",
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: "Secondary disabled",
  variant: "secondary",
  disabled: true,
};
