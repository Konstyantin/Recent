import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles/index";
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'http://t.commonsupport.com/catania/images/main-slider/image-3.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            'http://t.commonsupport.com/catania/images/main-slider/image-2.jpg',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'http://t.commonsupport.com/catania/images/main-slider/image-1.jpg',
    }
];

const styles = theme => ({
    root: {
        maxWidth: '100%',
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: '100%',
        maxHeight: 890,
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        width: '100%',
    },
});

/**
 * Carousel
 * @returns {*}
 * @constructor
 */
class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 0
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
    }

    handleNext() {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1
        }));
    }

    handleBack() {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1
        }));
    }

    handleStepChange(activeStep) {
        this.setState({activeStep});
    }

    render() {

        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = tutorialSteps.length;

        return(
            <div className={classes.root}>
                <AutoPlaySwipeableViews
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="middle"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                            <KeyboardArrowLeft />
                        </Button>
                    }
                />
            </div>
        );
    }
};

export default withStyles(styles)(Carousel);