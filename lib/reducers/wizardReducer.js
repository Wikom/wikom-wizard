"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("../actions/actionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var wizardReducer = function wizardReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.INITIALIZE:
      return Object.assign({}, state, _defineProperty({}, action.name, {
        step: 1
      }));

    case types.DESTROY:
      {
        var nextState = Object.assign({}, state);
        delete nextState[action.name];
        return nextState;
      }

    case types.STEP_FORWARD:
      return Object.assign({}, state, _defineProperty({}, action.name, {
        step: state[action.name].step + 1
      }));

    case types.STEP_BACK:
      return Object.assign({}, state, _defineProperty({}, action.name, {
        step: state[action.name].step - 1
      }));

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

    case types.STEP_FORWARD_PRESERVING_ERRORS:
      {
        var _nextState2 = Object.assign({}, state);

        _nextState2[action.name].step = state[action.name].step + 1;
        return _nextState2;
      }

    default:
      return state;
  }
};

var _default = wizardReducer;
exports["default"] = _default;