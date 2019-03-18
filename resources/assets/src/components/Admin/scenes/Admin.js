import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import renderRoutes from './../../../_components';
import Grid from '@material-ui/core/Grid';

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
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Grid>
                    <Grid item xs={10}>
                        <p>Lorem ipsum dolor sit amet.</p>
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