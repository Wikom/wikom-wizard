'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _wizardActions = require('../actions/wizardActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by rouven on 13.06.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Step = function (_Component) {
    _inherits(Step, _Component);

    function Step() {
        _classCallCheck(this, Step);

        return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
    }

    _createClass(Step, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (typeof this.props.onEnter === 'function') {
                this.props.onEnter(this.props);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (typeof this.props.onLeave === 'function') {
                this.props.onLeave(this.props);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(this.props.Component, this.props)
            );
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
        }
    };
};

var StepContainer = (0, _reactRedux.connect)(null, mapDispatch)(Step);

StepContainer.propTypes = {
    step: _propTypes2.default.number.isRequired,
    wizard: _propTypes2.default.string,
    Component: _propTypes2.default.func.isRequired,
    onEnter: _propTypes2.default.func,
    onLeave: _propTypes2.default.func
};

exports.default = StepContainer;