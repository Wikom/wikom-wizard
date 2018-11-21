/**
 * Created by rouven on 13.06.17.
 */

import * as types from '../actions/actionTypes';

const wizardReducer = (state = {}, action) => {
    switch (action.type) {
        case types.INITIALIZE:

            return Object.assign({}, state, {[action.name]: {step: 1}});
        case types.DESTROY: {
            const nextState = Object.assign({}, state);

            delete nextState[action.name];

            return nextState;
        }
        case types.STEP_FORWARD:

            return Object.assign({}, state, {[action.name]: {step: (state[action.name].step + 1)}});
        case types.STEP_BACK:

            return Object.assign({}, state, {[action.name]: {step: (state[action.name].step - 1)}});
        case types.SET_ERROR: {
            const nextState = Object.assign({}, state);

            if (action.error !== null) {
                nextState[action.name].error = action.error;
            } else {
                delete nextState[action.name].error;
            }

            return nextState;
        }
        case types.STEP_FORWARD_PRESERVING_ERRORS: {
            const nextState = Object.assign({}, state);
            nextState[action.name].step = state[action.name].step + 1;
            return nextState;
        }
        default:

            return state;
    }
};

export default wizardReducer;