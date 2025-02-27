import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Textarea } from "./";

export default {
  title: "Sample/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: any) => (
  <Textarea {...args} />
);

export const Exmaple = Template.bind({});
Exmaple.args = {
  value:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, et voluptatibus nemo excepturi mollitia unde, neque deserunt aspernatur ullam nobis incidunt, repellendus id nulla natus. Unde reiciendis commodi quia veniam!",
};

export const Adjustable = Template.bind({});
Adjustable.args = {
  value:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, et voluptatibus nemo excepturi mollitia unde, neque deserunt aspernatur ullam nobis incidunt, repellendus id nulla natus. Unde reiciendis commodi quia veniam!",
  adjustable: true,
};
