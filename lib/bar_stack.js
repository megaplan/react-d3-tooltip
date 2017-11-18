"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _reactD3Core = require('react-d3-core');

var _reactD3Shape = require('react-d3-shape');

var _chartsBarStack = require('./charts/barStack');

var _chartsBarStack2 = _interopRequireDefault(_chartsBarStack);

var _utilsTooltip = require('./utils/tooltip');

var _utilsTooltip2 = _interopRequireDefault(_utilsTooltip);

var _utilsFocus = require('./utils/focus');

var _utilsFocus2 = _interopRequireDefault(_utilsFocus);

var _inheritBarEvt = require('./inherit/barEvt');

var _inheritBarEvt2 = _interopRequireDefault(_inheritBarEvt);

var _commonProps = require('./commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var BarGroupTooltip = (function (_BarEvt) {
  _inherits(BarGroupTooltip, _BarEvt);

  function BarGroupTooltip(props) {
    _classCallCheck(this, BarGroupTooltip);

    _get(Object.getPrototypeOf(BarGroupTooltip.prototype), 'constructor', this).call(this, props);
  }

  _createClass(BarGroupTooltip, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var width = _props.width;
      var height = _props.height;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _utilsTooltip2['default'],
          _extends({}, this.props, this.state),
          this.props.children
        ),
        _react2['default'].createElement(_reactD3Core.Legend, this.props),
        _react2['default'].createElement(
          _reactD3Shape.Chart,
          _extends({}, this.props, this.state, {
            stack: true
          }),
          _react2['default'].createElement(_chartsBarStack2['default'], _extends({}, this.props, this.state, {
            onMouseOver: this.mouseOver.bind(this),
            onMouseOut: this.mouseOut.bind(this)
          }))
        )
      );
    }
  }], [{
    key: 'defaultProps',
    value: _commonProps2['default'],
    enumerable: true
  }]);

  return BarGroupTooltip;
})(_inheritBarEvt2['default']);

exports['default'] = BarGroupTooltip;
module.exports = exports['default'];