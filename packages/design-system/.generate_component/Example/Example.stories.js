const component = (name) => `import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ${name} } from "./";

export default {
  title: "Sample/${name}",
  component: ${name},
} as ComponentMeta<typeof ${name}>;

const Template: ComponentStory<typeof ${name}> = (args: any) => (
  <${name} {...args} />
);

export const Exmaple = Template.bind({});
Exmaple.args = {};`;

export { component };
