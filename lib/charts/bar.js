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

var _reactD3Core = require('react-d3-core');

var _reactD3Shape = require('react-d3-shape');

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var _tooltipUpdate = require('../utils/tooltipUpdate');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarContainer = function (_Component) {
  _inherits(BarContainer, _Component);

  function BarContainer(props) {
    _classCallCheck(this, BarContainer);

    return _possibleConstructorReturn(this, (BarContainer.__proto__ || Object.getPrototypeOf(BarContainer)).call(this, props));
  }

  _createClass(BarContainer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _tooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onMouseOver = _props.onMouseOver,
          onMouseOut = _props.onMouseOut,
          chartSeries = _props.chartSeries,
          onClick = _props.onClick,
          showXGrid = _props.showXGrid,
          showYGrid = _props.showYGrid,
          barClassName = _props.barClassName,
          xAxisClassName = _props.xAxisClassName,
          yAxisClassName = _props.yAxisClassName,
          xWordWrap = _props.xWordWrap,
          xGridAxisLineStyle = _props.xGridAxisLineStyle,
          yGridAxisLineStyle = _props.yGridAxisLineStyle;


      var xgrid, ygrid;

      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, _extends({}, this.props, { gridAxisLineStyle: xGridAxisLineStyle }));
      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, _extends({}, this.props, { gridAxisLineStyle: yGridAxisLineStyle }));

      return _react2.default.createElement(
        'g',
        null,
        xgrid,
        ygrid,
        _react2.default.createElement(_reactD3Core.Xaxis, _extends({}, this.props, {
          xAxisClassName: xAxisClassName,
          xWordWrap: xWordWrap,
          xGridAxisLineStyle: xGridAxisLineStyle
        })),
        _react2.default.createElement(_reactD3Core.Yaxis, _extends({}, this.props, {
          yAxisClassName: yAxisClassName,
          yGridAxisLineStyle: yGridAxisLineStyle
        })),
        _react2.default.createElement(_reactD3Shape.Bar, _extends({}, this.props, {
          onClick: onClick,
          onMouseOver: onMouseOver,
          onMouseOut: onMouseOut,
          chartSeries: chartSeries,
          barClassName: barClassName
        }))
      );
    }
  }]);

  return BarContainer;
}(_react.Component);

BarContainer.defaultProps = _commonProps2.default;
exports.default = BarContainer;
module.exports = exports['default'];