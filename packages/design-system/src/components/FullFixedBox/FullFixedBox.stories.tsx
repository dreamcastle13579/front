import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FullFixedBox } from "./";

export default {
  title: "Sample/FullFixedBox",
  component: FullFixedBox,
} as ComponentMeta<typeof FullFixedBox>;

const Template: ComponentStory<typeof FullFixedBox> = (args: any) => (
  <FullFixedBox {...args} />
);

const lorem = (
  <>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iure
    ratione cum reprehenderit molestias, suscipit aperiam iste itaque et
    perspiciatis commodi molestiae! Sequi, dolorem obcaecati. Animi sed deserunt
    quos delectus.
  </>
);

export const Exmaple = Template.bind({});
Exmaple.args = {
  children: <>{Array.from({ length: 6 }).map(() => lorem)}</>,
  bottom: <div style={{ border: "10px solid red" }}>bottom</div>,
};

export const Space = Template.bind({});
Space.args = {
  space: 100,
  children: <>{Array.from({ length: 6 }).map(() => lorem)}</>,
  bottomSpace: 150,
  bottom: <div style={{ border: "10px solid red" }}>bottom</div>,
};
