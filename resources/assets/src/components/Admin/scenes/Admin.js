import React, {Component} from 'react';
import {connect} from 'react-redux';
import renderRoutes from './../../../_components';

/**
 * Admin scene component
 */
class Admin extends Component {
    render() {
        const {routes} = this.props.route;
        return (
            renderRoutes(routes)
        )
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {loggingIn}
}

const connectedAdmin = connect(mapStateToProps)(Admin);


export {connectedAdmin as Admin};