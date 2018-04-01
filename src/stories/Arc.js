import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Arc from '../Arc';

storiesOf('Arc', module)
    .add('orange 270º, 80px radius', () => {
        const props = {
            radius: 80,
            degreesOffset: 0,
            degrees: 270,
            strokeWidth: 3,
            strokeColor: 'orange',
            fillColor: 'none'
        };

        return renderArc(props);
    })
    .add('yellow 70º, 100px radius, 50º offset', () => {
        const props = {
            radius: 100,
            degreesOffset: 50,
            degrees: 70,
            strokeWidth: 3,
            strokeColor: 'yellow',
            fillColor: 'none'
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