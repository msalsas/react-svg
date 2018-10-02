'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_Component) {
    _inherits(Line, _Component);

    function Line() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Line);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Line.__proto__ || Object.getPrototypeOf(Line)).call.apply(_ref, [this].concat(args))), _this), _this.describeLine = function (lineLength, degreesInRadians, offsetY, strokeWidth) {
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
            var _props = this.props,
                lineLength = _props.lineLength,
                degrees = _props.degrees,
                strokeWidth = _props.strokeWidth,
                strokeColor = _props.strokeColor,
                strokeLinecap = _props.strokeLinecap;

            var degreesInRadians = (degrees - 90) * Math.PI / 180.0;
            var offsetY = 0;
            if (degrees > 90 && degrees <= 180) {
                degreesInRadians = (degrees + 90) * Math.PI / 180.0;
                offsetY = Math.abs(lineLength * Math.sin(degreesInRadians));
            }
            var width = Math.abs(lineLength * Math.cos(degreesInRadians)) + strokeWidth * 2;
            var height = Math.abs(lineLength * Math.sin(degreesInRadians)) + strokeWidth * 2;
            return _react2.default.createElement(
                'svg',
                { width: width, height: height, xmlns: 'http://www.w3.org/2000/svg' },
                _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { d: this.describeLine(lineLength, degreesInRadians, offsetY, strokeWidth), className: 'msalsas-line',
                        fill: 'none', strokeWidth: strokeWidth, stroke: strokeColor, strokeLinecap: strokeLinecap })
                )
            );
        }
    }]);

    return Line;
}(_react.Component);

Line.propTypes = {
    lineLength: _propTypes2.default.number,
    degrees: _propTypes2.default.number,
    strokeWidth: _propTypes2.default.number,
    strokeColor: _propTypes2.default.string,
    strokeLinecap: _propTypes2.default.oneOf(["butt", "round", "square"])
};
exports.default = Line;


Line.defaultProps = {
    lineLength: 150,
    degrees: 45,
    strokeWidth: 5,
    strokeColor: '#fff',
    strokeLinecap: 'butt'
};