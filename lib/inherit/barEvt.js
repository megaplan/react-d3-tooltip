"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarEvt = function (_Component) {
  _inherits(BarEvt, _Component);

  function BarEvt(props) {
    _classCallCheck(this, BarEvt);

    var _this = _possibleConstructorReturn(this, (BarEvt.__proto__ || Object.getPrototypeOf(BarEvt)).call(this, props));

    _this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    };
    return _this;
  }

  _createClass(BarEvt, [{
    key: 'mouseOut',
    value: function mouseOut(e, d) {
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
    value: function mouseOver(e, d) {

      var contentTooltip = { title: d.name, value: d.y, fieldTitle: d.x, color: d.color };
      var _state = {
        xTooltip: e.layerX,
        yTooltip: e.layerY,
        contentTooltip: contentTooltip
      };
      this.setState(_state);
      if (this.props.onTooltipShow) {
        this.props.onTooltipShow(_state);
      }
    }
  }]);

  return BarEvt;
}(_react.Component);

exports.default = BarEvt;
module.exports = exports['default'];