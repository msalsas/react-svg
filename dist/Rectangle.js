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

var Rectangle = function (_Component) {
    _inherits(Rectangle, _Component);

    function Rectangle() {
        _classCallCheck(this, Rectangle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).apply(this, arguments));
    }

    _createClass(Rectangle, [{
        key: 'render',
        value: function render() {
            var width = this.props.width + this.props.strokeWidth * 2;
            var height = this.props.height + this.props.strokeWidth * 2;
            return React.createElement(
                'svg',
                { width: width, height: height, xmlns: 'http://www.w3.org/2000/svg' },
                React.createElement(
                    'g',
                    null,
                    React.createElement('rect', { x: this.props.strokeWidth, y: this.props.strokeWidth, width: this.props.width, height: this.props.height, className: 'msalsas-rectangle',
                        fill: this.props.fillColor, strokeWidth: this.props.strokeWidth, stroke: this.props.strokeColor })
                )
            );
        }
    }]);

    return Rectangle;
}(Component);

Rectangle.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeColor: PropTypes.string,
    fillColor: PropTypes.string
};
Rectangle.defaultProps = {
    width: 150,
    height: 45,
    strokeWidth: 5,
    strokeColor: '#fff',
    fillColor: 'none'
};
exports.default = Rectangle;