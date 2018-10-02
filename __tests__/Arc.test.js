import React from 'react';
import Arc from '../src/Arc';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Test Arc component', () => {
    const props = {
        radius       : 80,
        degreesOffset: 0,
        degrees      : 270,
        strokeWidth  : 20,
        strokeColor  : 'orange',
        fillColor    : 'none',
        strokeLinecap: 'butt'
    };
    const arc = shallow((<Arc {...props}/>));

    it('should be defined', () => {
        expect(arc).toBeDefined();
    });
    it('should render correctly', () => {
        expect(arc).toMatchSnapshot();
    });
});
