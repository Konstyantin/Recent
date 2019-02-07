import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    header: {
        height: 400,
        background: 'linear-gradient(rgba(127, 114, 114, 0.45), rgba(127, 114, 114, 0.45)), url(http://t.commonsupport.com/catania/images/background/4.jpg) no-repeat center',
        fontSize: 60,
        color: '#eee'
    }
});

/**
 * Header component
 */
class Header extends Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid className={classes.header} container justify={'center'} alignItems={'center'}>
                    <p>Services</p>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Header);