import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlarmIcon from '@material-ui/icons/Alarm';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#000',
        color: '#eee',
    },
    list: {
        padding: '25px 0',
        margin: 0
    },
    card: {
        minWidth: 275,
        color: '#eee',
        backgroundColor: '#000',
        border: '1px solid #eee'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 72,
    },
});

import './style.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <footer>
                <div className={classes.root}>
                    <Grid container direction={'row'} justify={'center'}>
                        <Grid item xs={8}>
                            <Grid container direction={'row'} spacing={24} justify={'space-between'} className={classes.list}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sequi.</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);
