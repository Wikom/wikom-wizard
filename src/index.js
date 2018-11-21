/**
 * Created by rouven on 13.06.17.
 */

import {initializeWizard, stepForward, stepBack, setError, stepForwardPreservingErrors} from './actions/wizardActions';
import {INITIALIZE, DESTROY, STEP_FORWARD, STEP_BACK, SET_ERROR} from './actions/actionTypes';
import wizardReducer from './reducers/wizardReducer';
import Wizard from './components/Wizard';
import Step from './components/Step';

export default Wizard;

export {
    Wizard,
    Step,
    initializeWizard,
    stepForward,
    stepForwardPreservingErrors,
    stepBack,
    setError,
    INITIALIZE,
    DESTROY,
    STEP_FORWARD,
    STEP_BACK,
    SET_ERROR,
    wizardReducer
};