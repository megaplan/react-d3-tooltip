"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var _reactFauxDom = require('react-faux-dom');

var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

var _reactD3Shape = require('react-d3-shape');

var Voronoi = (function (_Component) {
  _inherits(Voronoi, _Component);

  function Voronoi(props) {
    _classCallCheck(this, Voronoi);

    _get(Object.getPrototypeOf(Voronoi.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Voronoi, [{
    key: '_mkVoronoi',
    value: function _mkVoronoi(dom) {
      var _props = this.props;
      var x = _props.x;
      var y = _props.y;
      var xScaleSet = _props.xScaleSet;
      var yScaleSet = _props.yScaleSet;
      var onMouseOut = _props.onMouseOut;
      var onMouseOver = _props.onMouseOver;
      var stack = _props.stack;
      var height = _props.height;

      // because d3.geom.voronoi does not handle coincident points (and this data from the government comes pre-rounded to a tenth of a degree), d3.nest is used to collapse coincident points before constructing the Voronoi.
      // see example: http://bl.ocks.org/mbostock/8033015
      var mkSeries = (0, _reactD3Shape.series)(this.props);

      if (stack) {
        var _setStack = this._setStack();
        var dataset = _setStack(mkSeries);
      } else {
        var dataset = mkSeries;
      }

      var nestData = _d32['default'].nest().key(function (d) {
        return d.x + "," + d.y + "," + d.y0;
      }).rollup(function (v) {
        return v[0];
      }).entries(_d32['default'].merge(dataset.map(function (d) {
        return d.data;
      }))).map(function (d) {
        return d.values;
      });

      var voronoiPolygon = this._setGeomVoronoi().call(this, nestData);

      // make voronoi
      var voronoiChart = _d32['default'].select(dom);

      var voronoiPath = voronoiChart.selectAll('path').data(voronoiPolygon).enter().append("path").attr("d", function (d) {
        return "M" + d.join("L") + "Z";
      }).on("mouseover", function (d, i) {
        onMouseOver(d, i, xScaleSet, yScaleSet, stack);
      }).on("mouseout", function (d, i) {
        onMouseOut(d, i, stack);
      }).datum(function (d) {
        return d.point;
      }).style('fill', 'none').style('pointer-events', 'all');

      return voronoiChart;
    }
  }, {
    key: '_setStack',
    value: function _setStack() {
      var chartSeries = this.props.chartSeries;

      var buildOut = function buildOut(len) {
        // baseline for positive and negative bars respectively.
        var currentXOffsets = [];
        var currentXIndex = 0;

        return function (d, y0, y) {

          if (currentXIndex++ % len === 0) {
            currentXOffsets = [0, 0];
          }

          if (y >= 0) {
            d.y0 = currentXOffsets[1];
            d.y = y;
            currentXOffsets[1] += y;
          } else {
            d.y0 = currentXOffsets[0] + y;
            d.y = -y;
            currentXOffsets[0] += y;
          }
        };
      };

      return _d32['default'].layout.stack().values(function (d) {
        return d.data;
      }).out(buildOut(chartSeries.length));
    }
  }, {
    key: '_setGeomVoronoi',
    value: function _setGeomVoronoi() {
      var _props2 = this.props;
      var width = _props2.width;
      var height = _props2.height;
      var margins = _props2.margins;
      var initVoronoi = _props2.initVoronoi;
      var x = _props2.x;
      var xScaleSet = _props2.xScaleSet;
      var y = _props2.y;
      var yScaleSet = _props2.yScaleSet;
      var stack = _props2.stack;

      var voronoi = initVoronoi().x(function (d) {
        return xScaleSet(d.x);
      }).y(function (d) {
        return stack ? yScaleSet(d.y + d.y0) : yScaleSet(d.y);
      }).clipExtent([[-margins.left, -margins.top], [width + margins.right, height + margins.bottom]]);

      return voronoi;
    }
  }, {
    key: 'render',
    value: function render() {

      var voronoiPath = _reactFauxDom2['default'].createElement('g');
      voronoiPath.setAttribute("class", "react-d3-basics__voronoi_utils");

      var voronoi = this._mkVoronoi(voronoiPath);

      return voronoi.node().toReact();
    }
  }], [{
    key: 'defaultProps',
    value: {
      initVoronoi: _d32['default'].geom.voronoi,
      onMouseOver: function onMouseOver(d) {},
      onMouseOut: function onMouseOut(d) {}
    },
    enumerable: true
  }]);

  return Voronoi;
})(_react.Component);

exports['default'] = Voronoi;
module.exports = exports['default'];