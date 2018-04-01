import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Rectangle from '../Rectangle';

storiesOf('Rectangle', module)
    .add('orange 100x200px, no fill color', () => {
        const props = {
            width: 100,
            height: 200,
            strokeWidth: 5,
            strokeColor: 'orange',
            fillColor: 'none'
        };

        return renderRectangle(props);
    })
    .add('yellow 200x100px, orange fill color', () => {
        const props = {
            width: 200,
            height: 100,
            strokeWidth: 5,
            strokeColor: 'yellow',
            fillColor: 'orange'
        };

        return renderRectangle(props);
    })
    .add('red 100x100px, no fill color', () => {
        const props = {
            width: 100,
            height: 100,
            strokeWidth: 5,
            strokeColor: 'red',
            fillColor: 'none'
        };

        return renderRectangle(props);
    })
    .add('without options', () => {
        const props = {};

        return renderRectangle(props);
    });


function renderRectangle(props) {
    return (
        <div className="svg-wrapper" style={{ background: 'gray' }}>
            <Rectangle {...props} />
        </div>
    );
}