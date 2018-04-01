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

var Arc = function (_Component) {
    _inherits(Arc, _Component);

    function Arc() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Arc);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Arc.__proto__ || Object.getPrototypeOf(Arc)).call.apply(_ref, [this].concat(args))), _this), _this.polarToCartesian = function (radius, angleInDegrees) {
            var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

            return {
                x: radius + radius * Math.cos(angleInRadians),
                y: radius + radius * Math.sin(angleInRadians)
            };
        }, _this.describeArc = function (radius, strokeWidth, startAngle, endAngle) {
            endAngle = endAngle === 360 ? 359.9 : endAngle;
            var start = this.polarToCartesian(radius, endAngle);
            var end = this.polarToCartesian(radius, startAngle);

            var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

            return ["M", start.x + strokeWidth, start.y + strokeWidth, "A", radius, radius, 0, largeArcFlag, 0, end.x + strokeWidth, end.y + strokeWidth].join(" ");
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Arc, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'svg',
                { width: this.props.radius * 2 + this.props.strokeWidth * 2, height: this.props.radius * 2 + this.props.strokeWidth * 2, xmlns: 'http://www.w3.org/2000/svg' },
                _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { d: this.describeArc(this.props.radius, this.props.strokeWidth, this.props.degreesOffset, this.props.degrees), className: 'msalsas-arc',
                        fill: this.props.fillColor, strokeWidth: this.props.strokeWidth, stroke: this.props.strokeColor })
                )
            );
        }
    }]);

    return Arc;
}(_react.Component);

Arc.propTypes = {
    radius: _propTypes2.default.number,
    degreesOffset: _propTypes2.default.number,
    degrees: _propTypes2.default.number,
    strokeWidth: _propTypes2.default.number,
    strokeColor: _propTypes2.default.string,
    fillColor: _propTypes2.default.string
};
exports.default = Arc;


Arc.defaultProps = {
    radius: 50,
    degreesOffset: 45,
    degrees: 360,
    strokeWidth: 5,
    strokeColor: '#fff',
    fillColor: 'none'
};