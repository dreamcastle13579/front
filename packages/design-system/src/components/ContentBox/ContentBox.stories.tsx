import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ContentBox } from "./";

export default {
  title: "Sample/ContentBox",
  component: ContentBox,
} as ComponentMeta<typeof ContentBox>;

const Template: ComponentStory<typeof ContentBox> = (args: any) => (
  <ContentBox {...args} />
);

export const Exmaple = Template.bind({});
Exmaple.args = {
  children:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, et voluptatibus nemo excepturi mollitia unde, neque deserunt aspernatur ullam nobis incidunt, repellendus id nulla natus. Unde reiciendis commodi quia veniam!",
};
