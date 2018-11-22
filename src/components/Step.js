/**
 * Created by rouven on 13.06.17.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {stepForward, stepBack, stepForwardPreservingErrors} from '../actions/wizardActions';

class Step extends Component {

    componentDidMount() {
        if (typeof this.props.onEnter === 'function') {
            this.props.onEnter(this.props);
        }
    }

    componentWillUnmount() {
        if (typeof this.props.onLeave === 'function') {
            this.props.onLeave(this.props);
        }
    }

    render() {
        return (
            <div>
                {
                    React.createElement(this.props.Component, this.props)
                }
            </div>
        );
    }

}

const mapDispatch = (dispatch, {wizard}) => ({
    stepForward: () => dispatch(stepForward(wizard)),
    stepBack: () => dispatch(stepBack(wizard)),
    stepForwardPreservingErrors: () => dispatch(stepForwardPreservingErrors(wizard))
});

const StepContainer = connect(null, mapDispatch)(Step);

StepContainer.propTypes = {
    step: PropTypes.number.isRequired,
    wizard: PropTypes.string,
    Component: PropTypes.func.isRequired,
    onEnter: PropTypes.func,
    onLeave: PropTypes.func
};

export default StepContainer;