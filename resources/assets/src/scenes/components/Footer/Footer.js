import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


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
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    addressItem: {
        margin: '0 auto'
    },
    card: {
        minWidth: 275,
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
});

import './style.css';

/**
 * Footer component
 */
const Footer = (props) => {

    const {classes} = props;

    return (
        <footer className="footer">
            <div className={classes.root}>
                <Grid container justify='center' className={'text-center'}>
                    <Grid item xs={3} className={classes.addressItem}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography component="p">
                                    well meaning and kindly.
                                    <br/>
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3} className={classes.addressItem}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography component="p">
                                    well meaning and kindly.
                                    <br/>
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3} className={classes.addressItem}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography component="p">
                                    well meaning and kindly.
                                    <br/>
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Grid item xs={5}>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eligendi iusto omnis,
                            rem rerum sunt vero. Ab aut, cupiditate facere impedit officia repellendus unde. Doloremque
                            exercitationem harum libero quibusdam quod?</p>
                    </Grid>
                    <Grid item xs={3}>
                        <h2>Our services</h2>
                        <List className={classes.root}>
                            <ListItem>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Work" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Vacation" secondary="July 20, 2014" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </div>
        </footer>
    )
};

export default withStyles(styles)(Footer);
