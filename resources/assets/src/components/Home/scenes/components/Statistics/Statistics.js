import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#eee',
        padding: '30px 0'
    },
    title: {
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        margin: '30px 0'
    },
    list: {
        padding: 12
    },
    item: {
        textAlign: 'center'
    },
    value: {
        fontSize: 50,
        marginBottom: 0
    },
    dimension: {
        fontSize: 25,
        paddingLeft: 10
    }
});

/**
 * Statistics component
 */
class Statistics extends Component {

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
                <Grid container direction={'row'} justify={'center'}>
                    <Grid item xs={8}>
                        <h2 className={classes.title}>Our statistics</h2>
                        <p className={classes.description}>
                            The first mate and his Skipper too will do their very best to make the others comfortable in
                            their tropic island nest</p>
                        <Grid container direction={'row'} justify={'space-between'} spacing={24} className={classes.list}>
                            <Grid item xs={3} className={classes.item}>
                                <p className={classes.value}>25<span className={classes.dimension}>+</span></p>
                                <p>Years of experience</p>
                            </Grid>
                            <Grid item xs={3} className={classes.item}>
                                <p className={classes.value}>88<span className={classes.dimension}>k</span></p>
                                <p>Happy customers</p>
                            </Grid>
                            <Grid item xs={3} className={classes.item}>
                                <p className={classes.value}>100<span className={classes.dimension}>%</span></p>
                                <p>Satisfaction Guranteed</p>
                            </Grid>
                            <Grid item xs={3} className={classes.item}>
                                <p className={classes.value}>250<span className={classes.dimension}>k</span></p>
                                <p>Total Components Repairs</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Statistics);