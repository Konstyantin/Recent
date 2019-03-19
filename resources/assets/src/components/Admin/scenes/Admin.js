import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import renderRoutes from './../../../_components';
import {NavBar} from './../layout/scenes/NavBar'
import SideBar from './../layout/scenes/SideBar'

const style = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
    },
});

/**
 * Admin scene component
 */
class Admin extends Component {
    render() {
        const {routes} = this.props.route;
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <SideBar/>
                <main className={classes.content}>
                    <NavBar/>
                    {renderRoutes(routes)}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    return {loggingIn}
}

const styleAdmin = withStyles(style)(Admin);
const connectedAdmin = connect(mapStateToProps)(styleAdmin);

export {connectedAdmin as Admin};