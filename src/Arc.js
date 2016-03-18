var React = require('react');

var Arc = React.createClass({
    propTypes: {
        radius: React.PropTypes.number,
        degreesOffset: React.PropTypes.number,
        degrees: React.PropTypes.number,
        strokeWidth: React.PropTypes.number,
        strokeColor: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            radius: 50,
            degreesOffset: 45,
            degrees: 360,
            strokeWidth: 5,
            strokeColor: '#fff'
        };
    },
    render: function() {
        return (
            <svg width={this.props.radius * 2 + this.props.strokeWidth * 2} height={this.props.radius * 2 + this.props.strokeWidth * 2} xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d={this.describeArc(this.props.radius, this.props.strokeWidth, this.props.degreesOffset, this.props.degrees)} className="msalsas-arc"
                    fill="none" strokeWidth={this.props.strokeWidth} stroke={this.props.strokeColor}/>
                </g>
            </svg>
        );


    },

    polarToCartesian: function(radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

        return {
            x: radius + (radius * Math.cos(angleInRadians)),
            y: radius + (radius * Math.sin(angleInRadians))
        };
    },

    describeArc: function(radius, strokeWidth, startAngle, endAngle) {
        endAngle = endAngle === 360 ? 359.9 : endAngle;
        var start = this.polarToCartesian(radius, endAngle);
        var end = this.polarToCartesian(radius, startAngle);

        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        return [
            "M", start.x + strokeWidth, start.y + strokeWidth,
            "A", radius, radius, 0, largeArcFlag, 0, end.x + strokeWidth, end.y + strokeWidth
        ].join(" ");
    }

});

export default Arc;