import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './style.scss';

addDecorator (
  withOptions ({
    name: 'wizard ui',
    url: 'http://github.xsky.com/front-end/wizard',
    sidebarAnimations: true,
    sortStoriesByKind: true,
    // stories 根据字母，数组小到大排序，根据执行顺序排序
    sortStoriesByKind: true,
    showAddonPanel: false,
    hierarchyRootSeparator: /\|/,
  })
);

// automatically import all files ending in *.stories.js
const srcReq = require.context ('../src', true, /.stories.js$/);
const storiesReq = require.context ('../stories', true, /.stories.js$/);
function loadStories () {
  srcReq.keys().forEach (filename => srcReq (filename));
  storiesReq.keys().forEach (filename => storiesReq (filename));
}

configure (loadStories, module);
