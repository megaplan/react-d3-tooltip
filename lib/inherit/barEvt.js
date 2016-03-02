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

var BarEvt = (function (_Component) {
  _inherits(BarEvt, _Component);

  function BarEvt(props) {
    _classCallCheck(this, BarEvt);

    _get(Object.getPrototypeOf(BarEvt.prototype), 'constructor', this).call(this, props);

    this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    };
  }

  _createClass(BarEvt, [{
    key: 'mouseOut',
    value: function mouseOut(d, i) {
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
    key: 'mouseOver',
    value: function mouseOver(d, i) {
      var contentTooltip = { title: d.name, value: d.y, fieldTitle: d.x, color: d.color };
      var _state = {
        xTooltip: _d32['default'].event.layerX,
        yTooltip: _d32['default'].event.layerY,
        contentTooltip: contentTooltip
      };
      this.setState(_state);
      if (this.props.onTooltipShow) {
        this.props.onTooltipShow(_state);
      }
    }
  }]);

  return BarEvt;
})(_react.Component);

exports['default'] = BarEvt;
module.exports = exports['default'];