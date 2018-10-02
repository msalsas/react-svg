import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Arc from '../Arc';

storiesOf('Arc', module)
    .add('orange 270º, 80px radius, butt stroke linecap', () => {
        const props = {
            radius: 80,
            degreesOffset: 0,
            degrees: 270,
            strokeWidth: 20,
            strokeColor: 'orange',
            fillColor: 'none',
            strokeLinecap: 'butt'
        };

        return renderArc(props);
    })
    .add('yellow 70º, 100px radius, 50º offset, round stroke linecap', () => {
        const props = {
            radius: 100,
            degreesOffset: 50,
            degrees: 70,
            strokeWidth: 10,
            strokeColor: 'yellow',
            fillColor: 'none',
            strokeLinecap: 'round'
        };

        return renderArc(props);
    })
    .add('red circle', () => {
        const props = {
            radius: 50,
            degreesOffset: 0,
            degrees: 360,
            strokeWidth: 1,
            strokeColor: 'red',
            fillColor: 'red'
        };

        return renderArc(props);
    })
    .add('without options', () => {
        const props = {};

        return renderArc(props);
    });


function renderArc(props) {
    return (
        <div className="svg-wrapper" style={{ background: 'gray' }}>
            <Arc {...props} />
        </div>
    );
}