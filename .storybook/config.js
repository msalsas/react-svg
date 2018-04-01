import { configure } from '@storybook/react';

function loadStories() {
    require('../src/stories/Arc');
    require('../src/stories/Line');
    require('../src/stories/Rectangle');
    // require as many stories as you need.
}

configure(loadStories, module);