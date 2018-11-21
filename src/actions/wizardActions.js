/**
 * Created by rouven on 13.06.17.
 */

import * as types from './actionTypes';

export const initializeWizard = (name) => ({
    type: types.INITIALIZE,
    name
});

export const destroyWizard = (name) => ({
    type: types.DESTROY,
    name
});

export const stepForward = (name) => ({
    type: types.STEP_FORWARD,
    name
});

export const stepBack = (name) => ({
    type: types.STEP_BACK,
    name
});

export const setError = (name, error) => ({
    type: types.SET_ERROR,
    name,
    error
});

export const stepForwardPreservingErrors = (name) => ({
    type: types.STEP_FORWARD_PRESERVING_ERRORS,
    name
});