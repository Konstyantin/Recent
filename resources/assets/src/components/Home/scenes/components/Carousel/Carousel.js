import React, {Component} from "react";
import Slider from "react-slick";
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './style.css';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    slideFirst: {
        height: 860,
        background: 'linear-gradient(rgba(127, 114, 114, 0.45), #495057), url(http://t.commonsupport.com/catania/images/main-slider/image-1.jpg) no-repeat center',
        fontSize: 60,
        color: '#eee',
    },
    slideSecond: {
        height: 860,
        background: 'linear-gradient(rgba(127, 114, 114, 0.45), #495057), url(http://t.commonsupport.com/catania/images/main-slider/image-2.jpg) no-repeat center',
        fontSize: 60,
        color: '#eee',
    },
    slideThird: {
        height: 860,
        background: 'linear-gradient(rgba(127, 114, 114, 0.45), #495057), url(http://t.commonsupport.com/catania/images/main-slider/image-3.jpg) no-repeat center',
        fontSize: 60,
        color: '#eee',
    },
    slideContainer: {
        height: '100%'
    },
    button: {
        margin: theme.spacing.unit,
    },
});

/**
 * Carousel component
 */
class Carousel extends Component {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render component
     *
     * @returns {*}
     */
    render() {

        const {classes} = this.props;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000
        };

        return (
            <div className={classes.root}>
                <Slider {...settings} className={'carousel-slider'}>
                    <div className={classes.slideFirst}>
                        <Grid container className={classes.slideContainer}>
                            <Grid item className={classes.header} container justify={'center'} alignItems={'center'}>
                                <div>
                                    <h3>Trusted Service Center Since 1990</h3>
                                    <h1>We diagnose and repair any problems</h1>
                                    <Button variant="contained" className={classes.button}>
                                        Read more
                                    </Button>
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Contact us
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.slideSecond}>
                        <Grid container className={classes.slideContainer}>
                            <Grid item className={classes.header} container justify={'center'} alignItems={'center'}>
                                <div>
                                    <h3>We are Recovery Center</h3>
                                    <h1>We will solve all types of smartphone issue</h1>
                                    <Button variant="contained" className={classes.button}>
                                        Read more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.slideThird}>
                        <Grid container className={classes.slideContainer}>
                            <Grid item className={classes.header} container justify={'center'} alignItems={'center'}>
                                <div>
                                    <h3>Welcome to Recovery Center</h3>
                                    <h1>What ever the PC/Mac we will fix it with care</h1>
                                    <Button variant="contained" className={classes.button}>
                                        Read more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default withStyles(styles)(Carousel);