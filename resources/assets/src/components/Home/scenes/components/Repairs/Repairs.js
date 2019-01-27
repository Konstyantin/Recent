import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    card: {
        maxWidth: 345,
        margin: '0 auto'
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
});

const Repairs = (props) => {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <div className='text-center'>
                        <h2>What we repair</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ipsum.</p>
                    </div>
                </Grid>
            </Grid>
            <Grid container justify="center" className={'text-center'}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={classes.media}
                                height="140"
                                image="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={classes.media}
                                height="140"
                                image="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={classes.media}
                                height="140"
                                image="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Repairs);