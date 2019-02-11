import React, {Component} from "react";
import Slider from "react-slick";
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import './style.css';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    item: {
        height: 860,
        fontSize: 60,
        color: '#eee',
    },
    slideFirst: {
        background: 'linear-gradient(rgba(127, 114, 114, 0.45), #495057), url(http://t.commonsupport.com/catania/images/main-slider/image-1.jpg) no-repeat center',
    },
    slideSecond: {
        background: 'linear-gradient(rgba(127, 114, 114, 0.45), #495057), url(http://t.commonsupport.com/catania/images/main-slider/image-2.jpg) no-repeat center',
    },
    slideThird: {
        background: 'linear-gradient(rgba(127, 114, 114, 0.45), #495057), url(http://t.commonsupport.com/catania/images/main-slider/image-3.jpg) no-repeat center',
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
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            // autoplay: true,
            // autoplaySpeed: 3000
        };

        return (
            <div className={classes.root}>
                <Slider {...settings} className={'carousel-slider'}>
                    <div className={classNames(classes.slideFirst, classes.item, 'slick-slide-item')}>
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
                    <div className={classNames(classes.slideSecond, classes.item, 'slick-slide-item')}>
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
                    <div className={classNames(classes.slideThird, classes.item, 'slick-slide-item')}>
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