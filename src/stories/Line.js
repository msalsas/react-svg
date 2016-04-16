import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Line from '../Line';

storiesOf('Line', module)
    .add('orange 100px length, 45º', () => {
        const props = {
            lineLength: 100,
            degrees: 45,
            strokeWidth: 3,
            strokeColor: 'orange'
        };

        return renderLine(props);
    })
    .add('yellow 50px length, 120º', () => {
        const props = {
            lineLength: 50,
            degrees: 120,
            strokeWidth: 3,
            strokeColor: 'yellow'
        };

        return renderLine(props);
    })
    .add('red 80px length, 290º', () => {
        const props = {
            lineLength: 80,
            degrees: 290,
            strokeWidth: 3,
            strokeColor: 'red'
        };

        return renderLine(props);
    })
    .add('green 130px length, 350º', () => {
        const props = {
            lineLength: 130,
            degrees: 350,
            strokeWidth: 3,
            strokeColor: 'green'
        };

        return renderLine(props);
    })
    .add('without options', () => {
        const props = {};

        return renderLine(props);
    });


function renderLine(props) {
    return (
        <div className="svg-wrapper" style={{ background: 'gray' }}>
            <Line {...props} />
        </div>
    );
}