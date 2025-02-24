const component = (name) => `import ${name} from './${name}';
import type { Props } from './${name}';

export type { Props };
export { ${name} }`;

export { component };
