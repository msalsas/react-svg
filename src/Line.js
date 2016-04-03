var React = require('react');
var PropTypes = React.PropTypes;
var Component = React.Component;

class Line extends Component {
    static propTypes = {
        length: PropTypes.number,
        degrees: PropTypes.number,
        strokeWidth: PropTypes.number,
        strokeColor: PropTypes.string
    };
	static defaultProps = {
        lineLength: 150,
		degrees: 45,
		strokeWidth: 5,
		strokeColor: '#fff'
    };
    render() {
        var degreesInRadians = (this.props.degrees - 90) * Math.PI / 180.0;
        var offsetY = 0;
        if (this.props.degrees > 90 && this.props.degrees <= 180) {
            degreesInRadians = (this.props.degrees + 90) * Math.PI / 180.0;
            offsetY = Math.abs(this.props.lineLength * Math.sin(degreesInRadians));
        }
        var width = Math.abs(this.props.lineLength * Math.cos(degreesInRadians)) + this.props.strokeWidth * 2;
        var height = Math.abs(this.props.lineLength * Math.sin(degreesInRadians)) + this.props.strokeWidth * 2;
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
        var start = {
            x: strokeWidth,
            y: strokeWidth + offsetY
        };

        var end = {
            x: Math.abs(lineLength * Math.cos(degreesInRadians)) + strokeWidth,
            y: Math.abs(lineLength * Math.sin(degreesInRadians)) - offsetY + strokeWidth
        };

        return [
            "M", start.x, start.y,
            "L", end.x, end.y
        ].join(" ");
    };
}

export default Line;
