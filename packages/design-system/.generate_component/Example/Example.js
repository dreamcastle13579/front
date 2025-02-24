const component = (name) => `import React from 'react';

import './${name}.scss';

interface Props {}

const ${name} = (props: Props) => {
  return <div>Hello ${name}</div>
}

export type { Props };
export default ${name};`;

export { component };
