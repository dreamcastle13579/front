import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FullPageInfo } from "./";

import ImgDummy from "./imgs/img-dummy.svg";
import ImgDummyAfter from "./imgs/img-dummy-after.svg";

export default {
  title: "Sample/FullPageInfo",
  component: FullPageInfo,
} as ComponentMeta<typeof FullPageInfo>;

const Template: ComponentStory<typeof FullPageInfo> = (args: any) => (
  <FullPageInfo {...args} />
);

export const OnlyBefore = Template.bind({});
OnlyBefore.args = {
  before: {
    title: "이전 타이틀",
    img: <img src={ImgDummy} alt="" />,
    content: "안내 텍스트",
  },
};

export const BeforeAfter = Template.bind({});
BeforeAfter.args = {
  before: {
    title: "이전 타이틀",
    img: <img src={ImgDummy} alt="" />,
    content: "안내 텍스트",
  },
  after: {
    title: "다음 타이틀",
    img: <img src={ImgDummyAfter} alt="" />,
    content: "안내 텍스트2",
  },
};

const beforeAfterSameImg = <img src={ImgDummy} alt="" />;
export const BeforeAfterSameImg = Template.bind({});
BeforeAfterSameImg.args = {
  before: {
    title: "이전 타이틀",
    img: beforeAfterSameImg,
    content: "안내 텍스트",
  },
  after: {
    title: "다음 타이틀",
    img: beforeAfterSameImg,
    content: "안내 텍스트2",
  },
};
