import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rectangle extends Component {
    static propTypes = {
        width      : PropTypes.number,
        height     : PropTypes.number,
        strokeWidth: PropTypes.number,
        strokeColor: PropTypes.string,
        fillColor  : PropTypes.string
    };

    render() {
        const {strokeWidth, strokeColor, fillColor} = this.props;
        let width = this.props.width + strokeWidth * 2;
        let height = this.props.height + strokeWidth * 2;
        return (
            <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
                <g>
                    <rect x={strokeWidth} y={strokeWidth} width={this.props.width} height={this.props.height} className="msalsas-rectangle"
                          fill={fillColor} strokeWidth={strokeWidth} stroke={strokeColor}/>
                </g>
            </svg>
        );
    }
}

Rectangle.defaultProps = {
    width      : 150,
    height     : 45,
    strokeWidth: 5,
    strokeColor: '#fff',
    fillColor  : 'none'
};
