"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _reactD3Shape = require('react-d3-shape');

var _reactD3Core = require('react-d3-core');

var _tooltip = require('./utils/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _commonProps = require('./commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PieTooltip = function (_Component) {
  _inherits(PieTooltip, _Component);

  function PieTooltip(props) {
    _classCallCheck(this, PieTooltip);

    var _this = _possibleConstructorReturn(this, (PieTooltip.__proto__ || Object.getPrototypeOf(PieTooltip)).call(this, props));

    _this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    };
    return _this;
  }

  _createClass(PieTooltip, [{
    key: '_mouseOver',
    value: function _mouseOver(e, d) {
      var contentTooltip = {
        fieldTitle: d.data.name,
        value: d.value,
        color: d.color
      };
      var _state = {
        xTooltip: e.layerX,
        yTooltip: e.layerY,
        contentTooltip: contentTooltip
      };
      this.setState(_state);
      if (this.props.onTooltipShow) {
        this.props.onTooltipShow(_state);
      }
    }
  }, {
    key: '_mouseOut',
    value: function _mouseOut(e, d) {
      var _state = {
        xTooltip: null,
        yTooltip: null,
        contentTooltip: null
      };
      this.setState(_state);
      if (this.props.onTooltipHide) {
        this.props.onTooltipHide(_state);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          data = _props.data,
          chartSeries = _props.chartSeries,
          value = _props.value,
          name = _props.name,
          categoricalColors = _props.categoricalColors,
          showLegend = _props.showLegend;


      var radius = this.props.radius || Math.min(width - 120, height - 120) / 2;
      var outerRadius = radius - 10;

      var legend;
      if (showLegend) legend = _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
        width: width,
        chartSeries: chartSeries,
        categoricalColors: categoricalColors
      }));

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _tooltip2.default,
          _extends({}, this.props, this.state),
          this.props.children
        ),
        legend,
        _react2.default.createElement(
          _reactD3Shape.ChartPie,
          _extends({}, this.props, {
            width: width,
            height: height,
            data: data,
            chartSeries: chartSeries,
            value: value,
            name: name
          }),
          _react2.default.createElement(_reactD3Shape.Pie, _extends({}, this.props, {
            radius: radius,
            outerRadius: outerRadius,
            chartSeries: chartSeries,
            onMouseOver: this._mouseOver.bind(this),
            onMouseOut: this._mouseOut.bind(this)
          }))
        )
      );
    }
  }]);

  return PieTooltip;
}(_react.Component);

PieTooltip.defaultProps = _commonProps2.default;
exports.default = PieTooltip;
module.exports = exports['default'];