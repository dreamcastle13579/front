import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EffectSwitcher } from "./";

export default {
  title: "Sample/EffectSwitcher",
  component: EffectSwitcher,
} as ComponentMeta<typeof EffectSwitcher>;

const Template: ComponentStory<typeof EffectSwitcher> = (args: any) => (
  <EffectSwitcher {...args} />
);

export const Exmaple = Template.bind({});
Exmaple.args = {
  items: ["1one", "2two", "3three"],
  effect: "fade",
  interval: 3000,
};
