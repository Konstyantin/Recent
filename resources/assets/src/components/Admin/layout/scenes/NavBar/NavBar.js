import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 3,
    },
});

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container direction={'row'}>
                    <Grid item xs={6}>Dashboard</Grid>
                    <Grid item xs={6}>
                        <Grid container justify={'flex-end'} direction={'row'}>
                            <Badge className={classes.margin} badgeContent={99} color="primary">
                                <PersonIcon />
                            </Badge>
                            <Badge className={classes.margin} badgeContent={100} color="primary">
                                <MessageIcon />
                            </Badge>
                            <Badge className={classes.margin} badgeContent={1000} max={999} color="primary">
                                <MailIcon />
                            </Badge>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const styledNavBar = withStyles(styles)(NavBar);

export {styledNavBar as NavBar};