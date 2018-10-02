import React from 'react';
import Rectangle from '../src/Rectangle';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Test Rectangle component', () => {
    const props = {
        width      : 100,
        height     : 200,
        strokeWidth: 5,
        strokeColor: 'orange',
        fillColor  : 'none'
    };
    const rectangle = shallow((<Rectangle {...props}/>));

    it('should be defined', () => {
        expect(rectangle).toBeDefined();
    });
    it('should render correctly', () => {
        expect(rectangle).toMatchSnapshot();
    });
});
