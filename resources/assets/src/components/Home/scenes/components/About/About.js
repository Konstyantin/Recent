import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

import './style.css';

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

const About = (props) => {

    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={8}>
                            <h2>Who we are</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi distinctio, dolorem
                                numquam officia perferendis tempore. Accusamus accusantium, adipisci consequuntur cumque
                                cupiditate delectus ducimus ea eligendi exercitationem id inventore ipsam itaque
                                mollitia natus neque obcaecati officiis quae quaerat quia quibusdam repellat rerum sequi
                                similique sit temporibus unde, vero. Aperiam, corporis?</p>
                            <Grid container>
                                <Grid item xs={4}>
                                    <ThreeDRotationIcon className={classes.icon} />
                                    <span>Fast delivery</span>
                                </Grid>
                                <Grid item xs={4}>
                                    <FourKIcon className={classes.icon} />
                                    <span>Lifetime warranty</span>
                                </Grid>
                                <Grid item xs={4}>
                                    <ThreeSixtyIcon className={classes.icon} />
                                    <span>Certified experts</span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item/>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                         alt="Card image cap"/>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(About);