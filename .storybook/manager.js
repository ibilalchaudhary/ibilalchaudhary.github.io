import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://ibilalchaudhary.me/icon.svg',
    brandTitle: 'Muhammad Bilal Components',
    brandUrl: 'https://ibilalchaudhary.me',
  },
});
