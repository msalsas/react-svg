import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Arc extends Component {
    static propTypes = {
        radius       : PropTypes.number,
        degreesOffset: PropTypes.number,
        degrees      : PropTypes.number,
        strokeWidth  : PropTypes.number,
        strokeColor  : PropTypes.string,
        fillColor    : PropTypes.string,
        strokeLinecap: PropTypes.oneOf(["butt", "round", "square"]),
    };

    render() {
        const {radius, degreesOffset, degrees, strokeWidth, strokeColor, fillColor, strokeLinecap} = this.props;
        return (
            <svg width={radius * 2 + strokeWidth * 2} height={radius * 2 + strokeWidth * 2} xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d={this.describeArc(radius, strokeWidth, degreesOffset, degrees)} className="msalsas-arc"
                          fill={fillColor} strokeWidth={strokeWidth} stroke={strokeColor} strokeLinecap={strokeLinecap}/>
                </g>
            </svg>
        );
    }

    polarToCartesian = function(radius, angleInDegrees) {
        let angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

        return {
            x: radius + (radius * Math.cos(angleInRadians)),
            y: radius + (radius * Math.sin(angleInRadians))
        };
    };

    describeArc = function(radius, strokeWidth, startAngle, endAngle) {
        endAngle = endAngle === 360 ? 359.9 : endAngle;
        let start = this.polarToCartesian(radius, endAngle);
        let end = this.polarToCartesian(radius, startAngle);

        let largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        return [
            "M", start.x + strokeWidth, start.y + strokeWidth,
            "A", radius, radius, 0, largeArcFlag, 0, end.x + strokeWidth, end.y + strokeWidth
        ].join(" ");
    };
}

Arc.defaultProps = {
    radius       : 50,
    degreesOffset: 45,
    degrees      : 360,
    strokeWidth  : 5,
    strokeColor  : '#fff',
    fillColor    : 'none',
    strokeLinecap: 'butt'
};

