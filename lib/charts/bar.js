"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactD3Core = require('react-d3-core');

var _reactD3Shape = require('react-d3-shape');

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var _utilsTooltipUpdate = require('../utils/tooltipUpdate');

var BarContainer = (function (_Component) {
  _inherits(BarContainer, _Component);

  function BarContainer(props) {
    _classCallCheck(this, BarContainer);

    _get(Object.getPrototypeOf(BarContainer.prototype), 'constructor', this).call(this, props);
  }

  _createClass(BarContainer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _utilsTooltipUpdate.isTooltipUpdate)(nextProps, nextState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var onMouseOver = _props.onMouseOver;
      var onMouseOut = _props.onMouseOut;
      var chartSeries = _props.chartSeries;
      var showXGrid = _props.showXGrid;
      var showYGrid = _props.showYGrid;
      var barClassName = _props.barClassName;
      var xAxisClassName = _props.xAxisClassName;
      var yAxisClassName = _props.yAxisClassName;
      var xWordWrap = _props.xWordWrap;
      var xGridAxisLineStyle = _props.xGridAxisLineStyle;
      var yGridAxisLineStyle = _props.yGridAxisLineStyle;

      var xgrid, ygrid;

      if (showXGrid) xgrid = _react2['default'].createElement(_reactD3Core.Xgrid, _extends({}, this.props, { gridAxisLineStyle: xGridAxisLineStyle }));
      if (showYGrid) ygrid = _react2['default'].createElement(_reactD3Core.Ygrid, _extends({}, this.props, { gridAxisLineStyle: yGridAxisLineStyle }));

      return _react2['default'].createElement(
        'g',
        null,
        xgrid,
        ygrid,
        _react2['default'].createElement(_reactD3Core.Xaxis, _extends({}, this.props, {
          xAxisClassName: xAxisClassName,
          xWordWrap: xWordWrap,
          xGridAxisLineStyle: xGridAxisLineStyle
        })),
        _react2['default'].createElement(_reactD3Core.Yaxis, _extends({}, this.props, {
          yAxisClassName: yAxisClassName,
          yGridAxisLineStyle: yGridAxisLineStyle
        })),
        _react2['default'].createElement(_reactD3Shape.Bar, _extends({}, this.props, {
          onMouseOver: onMouseOver,
          onMouseOut: onMouseOut,
          chartSeries: chartSeries,
          barClassName: barClassName
        }))
      );
    }
  }], [{
    key: 'defaultProps',
    value: _commonProps2['default'],
    enumerable: true
  }]);

  return BarContainer;
})(_react.Component);

exports['default'] = BarContainer;
module.exports = exports['default'];