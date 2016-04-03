var React = require('react');
var PropTypes = React.PropTypes;
var Component = React.Component;

class Rectangle extends Component {
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        strokeWidth: PropTypes.number,
        strokeColor: PropTypes.string,
        fillColor: PropTypes.string
    };
	static defaultProps = {
        width: 150,
        height: 45,
		strokeWidth: 5,
		strokeColor: '#fff',
        fillColor: 'none'
    };
    render() {
        var width = this.props.width + this.props.strokeWidth * 2;
        var height = this.props.height + this.props.strokeWidth * 2;
        return (
            <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
                <g>
                    <rect x={this.props.strokeWidth} y={this.props.strokeWidth} width={this.props.width} height={this.props.height} className="msalsas-square"
                          fill={this.props.fillColor} strokeWidth={this.props.strokeWidth} stroke={this.props.strokeColor}/>
                </g>
            </svg>
        );
    }
}

export default Rectangle;
