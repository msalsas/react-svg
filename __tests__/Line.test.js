import React from 'react';
import Line from '../src/Line';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Test Line component', () => {
    const props = {
        lineLength   : 50,
        degrees      : 120,
        strokeWidth  : 10,
        strokeColor  : 'yellow',
        strokeLinecap: 'round'
    };
    const line = shallow((<Line {...props}/>));

    it('should be defined', () => {
        expect(line).toBeDefined();
    });
    it('should render correctly', () => {
        expect(line).toMatchSnapshot();
    });
});
