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
import classNames from 'classnames';
import './style.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: '50px 0'
    },
    title: {
        textAlign: 'center',
        marginBottom: 10
    },
    list: {
        padding: 12
    },
    card: {
        maxWidth: 345,
        textAlign: 'center'
    },
    media: {
        height: 260,
    },
    learn: {
        margin: '0 auto'
    }
});

/**
 * Repairs component
 */
class Repairs extends Component {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props)
    }

    /**
     * Render component
     *
     * @returns {*}
     */
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container direction={'row'} justify={'center'}>
                    <Grid item xs={10} lg={8}>
                        <h2 className={classes.title}>What we repair</h2>
                        <p className={'text-center'}>The first mate and his Skipper too will do their very best to make the
                            others comfortable</p>
                        <Grid container direction={'row'} justify={'space-between'} spacing={24} className={classes.list}>
                            <Grid item md={4} sm={12}>
                                <Card className={classNames(classes.card, 'service-item')}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="http://t.commonsupport.com/catania/images/resource/service-2.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Water damage
                                            </Typography>
                                            <Typography component="p">
                                                The first mate and his Skipper too will do their very best to make the
                                                others bee comfortable in their tropic
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" className={classes.learn}>
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <Card className={classNames(classes.card, 'service-item')}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="http://t.commonsupport.com/catania/images/resource/service-3.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Screen broken
                                            </Typography>
                                            <Typography component="p">
                                                The first mate and his Skipper too will do their very best to make the
                                                others bee comfortable in their tropic.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" className={classes.learn}>
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item md={4} sm={12}>
                                <Card className={classNames(classes.card, 'repair-item')}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="http://t.commonsupport.com/catania/images/resource/service-4.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Speaker failure
                                            </Typography>
                                            <Typography component="p">
                                                The first mate and his Skipper too will do their very best to make the
                                                others bee comfortable in their tropic.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" className={classes.learn}>
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Repairs);