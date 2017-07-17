/**
 * Created by rouven on 13.06.17.
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {initializeWizard, destroyWizard} from '../actions/wizardActions'

class Wizard extends Component {

    componentDidMount () {
        this.props.initialize();
    }

    componentWillUnmount () {
        this.props.destroy();
    }

    render () {
        return <div>{this.props.activeStep}</div>;
    }

}

const mapState = ({wizard}, {name, children}) => ({
    activeStep: React.Children
        .map(children, Child =>
            wizard[name] && wizard[name].step === Child.props.step
                ? React.cloneElement(Child, {wizard: name})
                : null
        )
        .filter(el => el !== null)
});

const mapDispatch = (dispatch, {name}) => ({
    initialize: () => dispatch(initializeWizard(name)),
    destroy: () => dispatch(destroyWizard(name))
});

const WizardContainer = connect(mapState, mapDispatch)(Wizard);

WizardContainer.propTypes = {
    name: PropTypes.string.isRequired
};

export default WizardContainer