import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import renderRoutes from './../../../_components';
import Grid from '@material-ui/core/Grid';
import {NavBar} from './../layout/scenes/NavBar'
import SideBar from './../layout/scenes/SideBar'

const style = theme => ({
    root: {
        flexGrow: 1,
    }
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
                <Grid container>
                    <Grid item xs={2}>
                        <SideBar/>
                    </Grid>
                    <Grid item xs={10}>
                        <NavBar/>
                        {renderRoutes(routes)}
                    </Grid>
                </Grid>
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