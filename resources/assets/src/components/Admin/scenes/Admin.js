import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userActions} from './../../../_actions';

class Admin extends Component {

    constructor(props) {
        super(props);

        const {dispatch} = this.props;
    }

    render() {
        return (
            <div>
                Admin component page
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {loggingIn}
}

const connectedAdmin = connect(mapStateToProps)(Admin);


export {connectedAdmin as Admin};