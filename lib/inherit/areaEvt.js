"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var AreaEvt = (function (_Component) {
  _inherits(AreaEvt, _Component);

  function AreaEvt(props) {
    _classCallCheck(this, AreaEvt);

    _get(Object.getPrototypeOf(AreaEvt.prototype), 'constructor', this).call(this, props);

    this.state = {
      xTooltip: -100,
      yTooltip: -100,
      contentTooltip: null
    };
  }

  _createClass(AreaEvt, [{
    key: 'mouseOut',
    value: function mouseOut(d, i) {
      this.setState({
        xTooltip: -100,
        yTooltip: -100,
        contentTooltip: null
      });
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver(d, i, xScaleSet, yScaleSet, stack) {
      var newY = stack ? yScaleSet(d.y + d.y0) : yScaleSet(d.y);
      var fieldTitle = d.name.toString();
      if (this.props.xTickFormat) {
        fieldTitle = this.props.xTickFormat(d.x);
      }
      var contentTooltip = {
        title: d.x.toString(),
        fieldTitle: fieldTitle,
        value: d.y.toString(),
        color: d.color
      };
      var leftMargin = 0;
      var topMargin = 0;
      if (this.props.margins) {
        leftMargin = this.props.margins.left;
        topMargin = this.props.margins.top;
      }
      this.setState({
        xTooltip: xScaleSet(d.x) + leftMargin,
        yTooltip: newY + topMargin,
        contentTooltip: contentTooltip
      });
    }
  }]);

  return AreaEvt;
})(_react.Component);

exports['default'] = AreaEvt;
module.exports = exports['default'];