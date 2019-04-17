"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _wizardActions = require("../actions/wizardActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Step =
/*#__PURE__*/
function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, _getPrototypeOf(Step).apply(this, arguments));
  }

  _createClass(Step, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.onEnter === 'function') {
        this.props.onEnter(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof this.props.onLeave === 'function') {
        this.props.onLeave(this.props);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(this.props.Component, this.props));
    }
  }]);

  return Step;
}(_react.Component);

var mapDispatch = function mapDispatch(dispatch, _ref) {
  var wizard = _ref.wizard;
  return {
    stepForward: function stepForward() {
      return dispatch((0, _wizardActions.stepForward)(wizard));
    },
    stepBack: function stepBack() {
      return dispatch((0, _wizardActions.stepBack)(wizard));
    },
    stepForwardPreservingErrors: function stepForwardPreservingErrors() {
      return dispatch((0, _wizardActions.stepForwardPreservingErrors)(wizard));
    }
  };
};

var StepContainer = (0, _reactRedux.connect)(null, mapDispatch)(Step);
StepContainer.propTypes = {
  step: _propTypes["default"].number.isRequired,
  wizard: _propTypes["default"].string,
  Component: _propTypes["default"].func.isRequired,
  onEnter: _propTypes["default"].func,
  onLeave: _propTypes["default"].func
};
var _default = StepContainer;
exports["default"] = _default;