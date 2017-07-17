'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by rouven on 13.06.17.
                                                                                                                                                                                                                   */

var wizardReducer = function wizardReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case types.INITIALIZE:

            return Object.assign({}, state, _defineProperty({}, action.name, { step: 1 }));
        case types.DESTROY:
            {
                var nextState = Object.assign({}, state);

                delete nextState[action.name];

                return nextState;
            }
        case types.STEP_FORWARD:

            return Object.assign({}, state, _defineProperty({}, action.name, { step: state[action.name].step + 1 }));
        case types.STEP_BACK:

            return Object.assign({}, state, _defineProperty({}, action.name, { step: state[action.name].step - 1 }));
        case types.SET_ERROR:
            {
                var _nextState = Object.assign({}, state);

                if (action.error !== null) {
                    _nextState[action.name].error = action.error;
                } else {
                    delete _nextState[action.name].error;
                }

                return _nextState;
            }
        default:

            return state;
    }
};

exports.default = wizardReducer;