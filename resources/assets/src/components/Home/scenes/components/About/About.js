import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AlarmIcon from '@material-ui/icons/Alarm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NearMeIcon from '@material-ui/icons/NearMe';
import './style.css';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#000',
        color: '#eee',
        margin: '50px 0'
    },
    title: {
        paddingBottom: 10
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },

    description: {
        paddingRight: 100
    }
});

/**
 * About component
 */
class About extends Component {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container alignItems={'center'}>
                    <Grid item lg={6} md={12}>
                        <Grid container direction={'row'} justify={'flex-end'}>
                            <Grid item xl={8} md={11} className={classNames(classes.description, 'about-description')}>
                                <div>
                                    <h2 className={classes.title}>Who we are</h2>
                                    <p>The first mate and his Skipper too will do their very best to make the others bee
                                        comfortable in their tropic island nest the love Boat promises something for the
                                        everyone michael Knight a young loner on a crusade to champion.</p>
                                    <p>The others comfortable in their tropic island nest the love Boat promises to have
                                        something for everyone michael Knight a young loner.</p>
                                </div>
                                <Grid container direction={'row'} justify={'space-between'}>
                                    <Grid item xl={4} lg={6} md={6}>
                                        <AlarmIcon className={classes.icon} />
                                        <span>Lifetime Warranty</span>
                                    </Grid>
                                    <Grid item xl={4} lg={6} md={6}>
                                        <AssignmentIcon className={classes.icon} />
                                        <span>Certified Experts</span>
                                    </Grid>
                                    <Grid item xl={4} lg={6} md={6}>
                                        <NearMeIcon className={classes.icon} />
                                        <span>Fast Delivery</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6} md={12} className={'about-image'}>
                        <img src="http://t.commonsupport.com/catania/images/resource/fullwidth-1.jpg" alt=""/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default withStyles(styles)(About);