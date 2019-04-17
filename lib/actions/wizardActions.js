"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stepForwardPreservingErrors = exports.setError = exports.stepBack = exports.stepForward = exports.destroyWizard = exports.initializeWizard = void 0;

var types = _interopRequireWildcard(require("./actionTypes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

/**
 * Created by rouven on 13.06.17.
 */
var initializeWizard = function initializeWizard(name) {
  return {
    type: types.INITIALIZE,
    name: name
  };
};

exports.initializeWizard = initializeWizard;

var destroyWizard = function destroyWizard(name) {
  return {
    type: types.DESTROY,
    name: name
  };
};

exports.destroyWizard = destroyWizard;

var stepForward = function stepForward(name) {
  return {
    type: types.STEP_FORWARD,
    name: name
  };
};

exports.stepForward = stepForward;

var stepBack = function stepBack(name) {
  return {
    type: types.STEP_BACK,
    name: name
  };
};

exports.stepBack = stepBack;

var setError = function setError(name, error) {
  return {
    type: types.SET_ERROR,
    name: name,
    error: error
  };
};

exports.setError = setError;

var stepForwardPreservingErrors = function stepForwardPreservingErrors(name) {
  return {
    type: types.STEP_FORWARD_PRESERVING_ERRORS,
    name: name
  };
};

exports.stepForwardPreservingErrors = stepForwardPreservingErrors;