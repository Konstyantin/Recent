import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },
});

const Statistics = (props) => {

    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={'text-center'}>
                        <h2>OUR STATISTICS</h2>
                        <p>
                            The first mate and his Skipper too will do their very best to make the others comfortable in
                            their tropic island nest
                        </p>
                    </div>
                </Grid>
            </Grid>
            <Grid container justify="center" className={'text-center'}>
                <Grid item xs={3}>
                    <span className={'value'}>25</span>
                    <span className={'dimension'}>+</span>
                    <p>Years of Experience</p>
                </Grid>
                <Grid item xs={3}>
                    <span className={'value'}>88</span>
                    <span className={'dimension'}>k</span>
                    <p>Happy Customers</p>
                </Grid>
                <Grid item xs={3}>
                    <span className={'value'}>100%</span>
                    <span className={'dimension'}>%</span>
                    <p>Satisfaction Guranteed</p>
                </Grid>
                <Grid item xs={3}>
                    <span className={'value'}>250</span>
                    <span className={'dimension'}>k</span>
                    <p>Total Components Repairs</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Statistics);