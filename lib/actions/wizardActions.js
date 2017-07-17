'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setError = exports.stepBack = exports.stepForward = exports.destroyWizard = exports.initializeWizard = undefined;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initializeWizard = exports.initializeWizard = function initializeWizard(name) {
    return {
        type: types.INITIALIZE,
        name: name
    };
}; /**
    * Created by rouven on 13.06.17.
    */

var destroyWizard = exports.destroyWizard = function destroyWizard(name) {
    return {
        type: types.DESTROY,
        name: name
    };
};

var stepForward = exports.stepForward = function stepForward(name) {
    return {
        type: types.STEP_FORWARD,
        name: name
    };
};

var stepBack = exports.stepBack = function stepBack(name) {
    return {
        type: types.STEP_BACK,
        name: name
    };
};

var setError = exports.setError = function setError(name, error) {
    return {
        type: types.SET_ERROR,
        name: name,
        error: error
    };
};