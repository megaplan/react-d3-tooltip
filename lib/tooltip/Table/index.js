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

var SimpleTooltipStyle = (function (_Component) {
  _inherits(SimpleTooltipStyle, _Component);

  function SimpleTooltipStyle(props) {
    _classCallCheck(this, SimpleTooltipStyle);

    _get(Object.getPrototypeOf(SimpleTooltipStyle.prototype), 'constructor', this).call(this, props);
  }

  _createClass(SimpleTooltipStyle, [{
    key: 'render',
    value: function render() {
      var contentTooltip = this.props.contentTooltip;

      var cv = Object.keys(contentTooltip).map(function (d, i) {
        if (d === 'color') {
          var colorStyle = {
            backgroundColor: contentTooltip[d],
            color: '#FFF'
          };
        }

        var trStyle = {
          display: 'table-row',
          backgroundImage: 'linear-gradient(#FFF, #EEE)',
          padding: '3px',
          height: '30px'
        };

        var tdStyle = {
          display: 'table-cell',
          padding: '3px',
          verticalAlign: 'middle',
          whiteSpace: 'normal',
          border: '1px solid #D3D3D3'
        };

        var tdHeadStyle = {
          display: 'table-cell',
          padding: '3px',
          verticalAlign: 'middle',
          whiteSpace: 'normal',
          border: '1px solid #D3D3D3',
          backgroundColor: '#555',
          color: '#FFF',
          textTransform: 'capitalize'
        };

        if (colorStyle) {
          var tdColorStyle = Object.assign(tdStyle, colorStyle);
        }

        return _react2['default'].createElement(
          'div',
          { className: 'tooltip_tr', style: trStyle, key: i },
          _react2['default'].createElement(
            'div',
            { className: 'tooltip_td', style: tdHeadStyle, key: i },
            d
          ),
          _react2['default'].createElement(
            'div',
            { className: 'tooltip_td', style: colorStyle ? tdColorStyle : tdStyle, key: i.i },
            contentTooltip[d]
          )
        );
      });

      return _react2['default'].createElement(
        'div',
        null,
        cv
      );
    }
  }]);

  return SimpleTooltipStyle;
})(_react.Component);

exports['default'] = SimpleTooltipStyle;
module.exports = exports['default'];