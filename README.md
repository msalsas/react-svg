# react-svg-components [![Build Status](https://travis-ci.org/msalsas/react-svg-components.svg?branch=master)](https://travis-ci.org/msalsas/react-svg-components)

SVG components built with [React][react].

## Docs

Installation:

`npm install react-svg-components`

Usage:

`import { Arc, Line, Rectangle } from 'react-svg-components';`

Here's an example for each component:

`<Arc radius={25} degreesOffset={15} degrees={270} strokeWidth={2} strokeColor={'#fff'} fillColor={'none'} strokeLinecap={'round'}/>`

`<Line lineLength={150} degrees={15} strokeWidth={5} strokeColor={'#fff'} strokeLinecap={'square'}/>`

`<Rectangle width={150} height={15} strokeWidth={5} strokeColor={'#fff'} fillColor={'#fff'}/>`

## Contributions

Yes please!

Development:

You can use [react-storybook](https://github.com/kadirahq/react-storybook) for developing components.

`git clone https://github.com/msalsas/react-svg-components.git`

`cd react-svg-components`

`npm install`

`npm run storybook`

Go to [localhost:9001](http://localhost:9001)

To run tests:

`npm run test`

Deployment:

To build all components into `dist` directory run:

`gulp build`


[react]: http://facebook.github.io/react/
