import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Line extends Component {
    static propTypes = {
        lineLength   : PropTypes.number,
        degrees      : PropTypes.number,
        strokeWidth  : PropTypes.number,
        strokeColor  : PropTypes.string,
        strokeLinecap: PropTypes.oneOf(["butt", "round", "square"]),
    };

    render() {
        const {lineLength, degrees, strokeWidth, strokeColor, strokeLinecap} = this.props;
        let degreesInRadians = (degrees - 90) * Math.PI / 180.0;
        let offsetY = 0;
        if (degrees > 90 && degrees <= 180) {
            degreesInRadians = (degrees + 90) * Math.PI / 180.0;
            offsetY = Math.abs(lineLength * Math.sin(degreesInRadians));
        }
        let width = Math.abs(lineLength * Math.cos(degreesInRadians)) + strokeWidth * 2;
        let height = Math.abs(lineLength * Math.sin(degreesInRadians)) + strokeWidth * 2;
        return (
            <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d={this.describeLine(lineLength, degreesInRadians, offsetY, strokeWidth)} className="msalsas-line"
                          fill="none" strokeWidth={strokeWidth} stroke={strokeColor} strokeLinecap={strokeLinecap}/>
                </g>
            </svg>
        );
    }

    describeLine = function(lineLength, degreesInRadians, offsetY, strokeWidth) {
        let start = {
            x: strokeWidth,
            y: strokeWidth + offsetY
        };

        let end = {
            x: Math.abs(lineLength * Math.cos(degreesInRadians)) + strokeWidth,
            y: Math.abs(lineLength * Math.sin(degreesInRadians)) - offsetY + strokeWidth
        };

        return [
            "M", start.x, start.y,
            "L", end.x, end.y
        ].join(" ");
    };
}

Line.defaultProps = {
    lineLength   : 150,
    degrees      : 45,
    strokeWidth  : 5,
    strokeColor  : '#fff',
    strokeLinecap: 'butt'
};
