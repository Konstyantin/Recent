import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AlarmIcon from '@material-ui/icons/Alarm';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NearMeIcon from '@material-ui/icons/NearMe';

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
    img: {
        width: '100%',
        maxHeight: 600
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
                    <Grid item xs={6}>
                        <Grid container direction={'row'} justify={'flex-end'}>
                            <Grid item xs={8} className={classes.description}>
                                <div>
                                    <h2 className={classes.title}>Who we are</h2>
                                    <p>The first mate and his Skipper too will do their very best to make the others bee
                                        comfortable in their tropic island nest the love Boat promises something for the
                                        everyone michael Knight a young loner on a crusade to champion.</p>
                                    <p>The others comfortable in their tropic island nest the love Boat promises to have
                                        something for everyone michael Knight a young loner.</p>
                                </div>
                                <Grid container direction={'row'} justify={'space-between'}>
                                    <Grid item xs={4}>
                                        <AlarmIcon className={classes.icon} />
                                        <span>Lifetime Warranty</span>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <AssignmentIcon className={classes.icon} />
                                        <span>Certified Experts</span>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <NearMeIcon className={classes.icon} />
                                        <span>Fast Delivery</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <img className={classes.img} src="http://t.commonsupport.com/catania/images/resource/fullwidth-1.jpg" alt=""/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default withStyles(styles)(About);