"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaEvt = function (_Component) {
  _inherits(AreaEvt, _Component);

  function AreaEvt(props) {
    _classCallCheck(this, AreaEvt);

    var _this = _possibleConstructorReturn(this, (AreaEvt.__proto__ || Object.getPrototypeOf(AreaEvt)).call(this, props));

    _this.state = {
      xTooltip: -100,
      yTooltip: -100,
      contentTooltip: null
    };
    return _this;
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
}(_react.Component);

exports.default = AreaEvt;
module.exports = exports['default'];