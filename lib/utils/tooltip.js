"use strict";
// Please check bottom propTypes to know which props is accepted.

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _Table = require('../tooltip/Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          xTooltip = _props.xTooltip,
          yTooltip = _props.yTooltip,
          contentTooltip = _props.contentTooltip,
          dist = _props.dist;


      var contentTooltipTmpl = null;

      var style = {
        left: xTooltip ? xTooltip + dist : -100,
        top: yTooltip ? yTooltip + dist : -100,
        position: 'fixed'
      };

      if (contentTooltip) {
        if (this.props.children) {
          contentTooltipTmpl = _react2.default.cloneElement(this.props.children, { contentTooltip: contentTooltip,
            position: position });
        } else {
          contentTooltipTmpl = _react2.default.createElement(_Table2.default, { contentTooltip: contentTooltip, position: position });
        }
      }

      return contentTooltipTmpl;
    }
  }]);

  return Tooltip;
}(_react.Component);

Tooltip.defaultProps = {
  gravity: 's',
  dist: 15,
  tooltipClassName: 'react-d3-basics__tooltip_utils'
};
exports.default = Tooltip;
module.exports = exports['default'];