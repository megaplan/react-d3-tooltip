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

var _commonProps = require('./commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var _tooltip = require('./utils/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _areaEvt = require('./inherit/areaEvt');

var _areaEvt2 = _interopRequireDefault(_areaEvt);

var _voronoi = require('./utils/voronoi');

var _voronoi2 = _interopRequireDefault(_voronoi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaTooltip = function (_AreaEvt) {
  _inherits(AreaTooltip, _AreaEvt);

  function AreaTooltip(props) {
    _classCallCheck(this, AreaTooltip);

    return _possibleConstructorReturn(this, (AreaTooltip.__proto__ || Object.getPrototypeOf(AreaTooltip)).call(this, props));
  }

  _createClass(AreaTooltip, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          margins = _props.margins,
          data = _props.data,
          chartSeries = _props.chartSeries,
          showXGrid = _props.showXGrid,
          showYGrid = _props.showYGrid,
          xAxisClassName = _props.xAxisClassName,
          yAxisClassName = _props.yAxisClassName,
          xWordWrap = _props.xWordWrap,
          xGridAxisLineStyle = _props.xGridAxisLineStyle,
          yGridAxisLineStyle = _props.yGridAxisLineStyle,
          categoricalColors = _props.categoricalColors,
          showLine = _props.showLine,
          showScatter = _props.showScatter;


      var xgrid, ygrid, line, scatter;

      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, { gridAxisLineStyle: xGridAxisLineStyle });
      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, { gridAxisLineStyle: yGridAxisLineStyle });
      if (showLine) line = _react2.default.createElement(_reactD3Shape.Line, _extends({}, this.props, { chartSeries: chartSeries }));
      if (showScatter) scatter = _react2.default.createElement(_reactD3Shape.Scatter, _extends({}, this.props, { chartSeries: chartSeries }));

      var voronoi = _react2.default.createElement(_voronoi2.default, _extends({}, this.props, {
        onMouseOver: this.mouseOver.bind(this),
        onMouseOut: this.mouseOut.bind(this)
      }));

      return _react2.default.createElement(
        'div',
        { style: { position: 'relative' } },
        _react2.default.createElement(
          _tooltip2.default,
          _extends({}, this.props, this.state),
          this.props.children
        ),
        _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
          width: width,
          margins: margins,
          chartSeries: chartSeries,
          categoricalColors: categoricalColors
        })),
        _react2.default.createElement(
          _reactD3Shape.Chart,
          _extends({}, this.props, {
            width: width,
            height: height,
            data: data,
            chartSeries: chartSeries
          }),
          xgrid,
          ygrid,
          _react2.default.createElement(_reactD3Core.Xaxis, {
            xAxisClassName: xAxisClassName,
            xWordWrap: xWordWrap,
            xGridAxisLineStyle: xGridAxisLineStyle
          }),
          _react2.default.createElement(_reactD3Core.Yaxis, {
            yAxisClassName: yAxisClassName,
            yGridAxisLineStyle: yGridAxisLineStyle
          }),
          _react2.default.createElement(_reactD3Shape.Area, _extends({}, this.props, {
            chartSeries: chartSeries
          })),
          line,
          scatter,
          voronoi
        )
      );
    }
  }]);

  return AreaTooltip;
}(_areaEvt2.default);

AreaTooltip.defaultProps = Object.assign(_commonProps2.default, {
  showScatter: false,
  showLine: false
});
AreaTooltip.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margins: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  chartSeries: PropTypes.array.isRequired
};
exports.default = AreaTooltip;
module.exports = exports['default'];