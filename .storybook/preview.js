import { addDecorator, addParameters, configure } from '@storybook/html';
import { withCssResources } from '@storybook/addon-cssresources';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
  cssresources: [
    {
      id: 'fiori3 css variables',
      code: `<link rel="stylesheet" type="text/css" href="./css_variables.css"></link>`,
      picked: true,
    },
    {
        id: 'unnormalize',
        code: `<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"></link>`,
        picked: false,
    },
    {
        id: 'normalize',
        code: `<link rel="stylesheet" type="text/css" href="./unnormalize.css"></link>`,
        picked: false,
    },
    {
      id: 'theme-ugly',
      code: `<link rel="stylesheet" type="text/css" href="./theme-ugly.css"></link>`,
      picked: false,
  },
  ],
});

addDecorator(withCssResources);
addDecorator(withA11y);

configure(require.context('./stories', true, /\.stories\.js$/), module);