import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Title } from "./";

export default {
  title: "Sample/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args: any) => (
  <Title {...args} />
);

export const Info = Template.bind({});
Info.args = {
  title: "info",
  children: "Title",
};

export const Style = Template.bind({});
Style.args = {
  title: "style",
  children: "제목",
};
