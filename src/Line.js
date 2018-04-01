import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Line extends Component {
    static propTypes = {
        length: PropTypes.number,
        degrees: PropTypes.number,
        strokeWidth: PropTypes.number,
        strokeColor: PropTypes.string
    };

    render() {
        let degreesInRadians = (this.props.degrees - 90) * Math.PI / 180.0;
        let offsetY = 0;
        if (this.props.degrees > 90 && this.props.degrees <= 180) {
            degreesInRadians = (this.props.degrees + 90) * Math.PI / 180.0;
            offsetY = Math.abs(this.props.lineLength * Math.sin(degreesInRadians));
        }
        let width = Math.abs(this.props.lineLength * Math.cos(degreesInRadians)) + this.props.strokeWidth * 2;
        let height = Math.abs(this.props.lineLength * Math.sin(degreesInRadians)) + this.props.strokeWidth * 2;
        return (
            <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d={this.describeLine(this.props.lineLength, degreesInRadians, offsetY, this.props.strokeWidth)} className="msalsas-line"
                    fill="none" strokeWidth={this.props.strokeWidth} stroke={this.props.strokeColor}/>
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
    lineLength: 150,
    degrees: 45,
    strokeWidth: 5,
    strokeColor: '#fff'
};
