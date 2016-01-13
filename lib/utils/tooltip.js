"use strict";
// Please check bottom propTypes to know which props is accepted.
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

var _tooltipTable = require('../tooltip/Table');

var _tooltipTable2 = _interopRequireDefault(_tooltipTable);

var Tooltip = (function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    _get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var xTooltip = _props.xTooltip;
      var yTooltip = _props.yTooltip;
      var contentTooltip = _props.contentTooltip;
      var dist = _props.dist;
      var tooltipClassName = _props.tooltipClassName;

      var contentTooltipTmpl = undefined;

      var style = {
        left: xTooltip ? xTooltip + dist : -100,
        top: yTooltip ? yTooltip + dist : -100,
        position: 'fixed'
      };

      if (contentTooltip) {
        if (this.props.children) {
          contentTooltipTmpl = _react2['default'].cloneElement(this.props.children, { contentTooltip: contentTooltip });
        } else {
          contentTooltipTmpl = _react2['default'].createElement(_tooltipTable2['default'], { contentTooltip: contentTooltip });
        }
      }

      return _react2['default'].createElement(
        'div',
        {
          style: style,
          className: tooltipClassName
        },
        contentTooltipTmpl
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      gravity: 's',
      dist: 15,
      tooltipClassName: 'react-d3-basics__tooltip_utils'
    },
    enumerable: true
  }]);

  return Tooltip;
})(_react.Component);

exports['default'] = Tooltip;
module.exports = exports['default'];