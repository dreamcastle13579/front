import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Character } from "./";

export default {
  title: "Sample/Character",
  component: Character,
} as ComponentMeta<typeof Character>;

const Template: ComponentStory<typeof Character> = (args: any) => (
  <Character {...args} />
);

export const CharaterChimchak = Template.bind({});
CharaterChimchak.args = {
  character: "chimchak",
};
export const CharaterDubeok = Template.bind({});
CharaterDubeok.args = {
  character: "dubeok",
};
export const CharaterHeemang = Template.bind({});
CharaterHeemang.args = {
  character: "heemang",
};
export const CharaterJangnan = Template.bind({});
CharaterJangnan.args = {
  character: "jangnan",
};
export const CharaterMemori = Template.bind({});
CharaterMemori.args = {
  character: "memori",
};
export const CharaterPogun = Template.bind({});
CharaterPogun.args = {
  character: "pogun",
};
