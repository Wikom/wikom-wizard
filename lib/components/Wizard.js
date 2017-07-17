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

var Wizard = function (_Component) {
    _inherits(Wizard, _Component);

    function Wizard() {
        _classCallCheck(this, Wizard);

        return _possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).apply(this, arguments));
    }

    _createClass(Wizard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.initialize();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.activeStep
            );
        }
    }]);

    return Wizard;
}(_react.Component);

var mapState = function mapState(_ref, _ref2) {
    var wizard = _ref.wizard;
    var name = _ref2.name,
        children = _ref2.children;
    return {
        activeStep: _react2.default.Children.map(children, function (Child) {
            return wizard[name] && wizard[name].step === Child.props.step ? _react2.default.cloneElement(Child, { wizard: name }) : null;
        }).filter(function (el) {
            return el !== null;
        })
    };
};

var mapDispatch = function mapDispatch(dispatch, _ref3) {
    var name = _ref3.name;
    return {
        initialize: function initialize() {
            return dispatch((0, _wizardActions.initializeWizard)(name));
        },
        destroy: function destroy() {
            return dispatch((0, _wizardActions.destroyWizard)(name));
        }
    };
};

var WizardContainer = (0, _reactRedux.connect)(mapState, mapDispatch)(Wizard);

WizardContainer.propTypes = {
    name: _propTypes2.default.string.isRequired
};

exports.default = WizardContainer;