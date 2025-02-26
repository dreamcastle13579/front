import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Bubble } from "./";

import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { DigitText } from "../DigitText";
import { Button } from "../Button";

export default {
  title: "Sample/Bubble",
  component: Bubble,
} as ComponentMeta<typeof Bubble>;

const Template: ComponentStory<typeof Bubble> = (args: any) => (
  <Bubble {...args} />
);

export const BubbleInput = Template.bind({});
BubbleInput.args = {
  bubble: "input",
  children: <Input value="Name" onChange={(e) => {}} align="center" />,
};

export const BubbleTextarea = Template.bind({});
BubbleTextarea.args = {
  bubble: "textarea",
  children: (
    <>
      <Textarea value="Name" onChange={(e) => {}} />
      <DigitText total={250}>282</DigitText>
    </>
  ),
};

export const BubbleTextbox = Template.bind({});
BubbleTextbox.args = {
  bubble: "textbox",
  children: (
    <>
      <span className="textbox">
        [이름]의 꿈은 이런 내용이었다고 하꿈! 이런 내용은 보통 좋은 기운을 담은
        길몽이꿈!
      </span>
      <Button variant="primary">Btn</Button>
    </>
  ),
};
