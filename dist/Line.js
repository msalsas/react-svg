'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = React.PropTypes;
var Component = React.Component;

var Line = function (_Component) {
    _inherits(Line, _Component);

    function Line() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, Line);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Line)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.describeLine = function (lineLength, degreesInRadians, offsetY, strokeWidth) {
            var start = {
                x: strokeWidth,
                y: strokeWidth + offsetY
            };

            var end = {
                x: Math.abs(lineLength * Math.cos(degreesInRadians)) + strokeWidth,
                y: Math.abs(lineLength * Math.sin(degreesInRadians)) - offsetY + strokeWidth
            };

            return ["M", start.x, start.y, "L", end.x, end.y].join(" ");
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Line, [{
        key: 'render',
        value: function render() {
            var degreesInRadians = (this.props.degrees - 90) * Math.PI / 180.0;
            var offsetY = 0;
            if (this.props.degrees > 90 && this.props.degrees <= 180) {
                degreesInRadians = (this.props.degrees + 90) * Math.PI / 180.0;
                offsetY = Math.abs(this.props.lineLength * Math.sin(degreesInRadians));
            }
            var width = Math.abs(this.props.lineLength * Math.cos(degreesInRadians)) + this.props.strokeWidth * 2;
            var height = Math.abs(this.props.lineLength * Math.sin(degreesInRadians)) + this.props.strokeWidth * 2;
            return React.createElement(
                'svg',
                { width: width, height: height, xmlns: 'http://www.w3.org/2000/svg' },
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: this.describeLine(this.props.lineLength, degreesInRadians, offsetY, this.props.strokeWidth), className: 'msalsas-line',
                        fill: 'none', strokeWidth: this.props.strokeWidth, stroke: this.props.strokeColor })
                )
            );
        }
    }]);

    return Line;
}(Component);

Line.propTypes = {
    length: PropTypes.number,
    degrees: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeColor: PropTypes.string
};
Line.defaultProps = {
    lineLength: 150,
    degrees: 45,
    strokeWidth: 5,
    strokeColor: '#fff'
};
exports.default = Line;