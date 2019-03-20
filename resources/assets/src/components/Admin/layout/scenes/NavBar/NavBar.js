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
    title: {
        padding: '8px 20px',
        fontSize: 20,
        fontWeight: 300
    }
});

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    }

    capitalizeFirstLetter(letter) {
        return letter.charAt(0).toUpperCase() + letter.slice(1);
    }

    render() {

        const {classes, title} = this.props;

        const sectionTitle = this.capitalizeFirstLetter(title);

        return (
            <div className={classes.root}>
                <Grid container direction={'row'}>
                    <Grid item xs={6}>
                        <p className={classes.title}>{sectionTitle}</p>
                    </Grid>
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