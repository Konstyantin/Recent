import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    header: {
        textAlign: 'center',
        margin: '50px 0'
    },
    tabs: {
        margin: '50px 0'
    },
    image: {
        width: '100%',
        marginBottom: 20
    }
});

const TabContainer = ({children, dir}) => {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    handleChange(event, value) {
        this.setState({value});
    }

    handleChangeIndex(index) {
        this.setState({value: index});
    }

    render() {

        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item xs={8}>
                        <div className={classes.header}>
                            <h2>Our extreme services</h2>
                            <p>The first mate and his Skipper too will do their very best to make the others comfortable
                                in their tropic island nest</p>
                        </div>
                        <div className={classes.tabs}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="fullWidth"
                                >
                                    <Tab label="Item One"/>
                                    <Tab label="Item Two"/>
                                    <Tab label="Item Three"/>
                                    <Tab label="Item Four"/>
                                    <Tab label="Item Five"/>
                                    <Tab label="Item Six"/>
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                index={this.state.value}
                                onChangeIndex={this.handleChangeIndex}
                            >
                                <TabContainer>
                                    <div>
                                        <img src="http://t.commonsupport.com/catania/images/resource/service-single.jpg"
                                             alt="" className={classes.image}/>
                                        <h2 className={classes.title}>Smart phone repairs</h2>
                                        <p>The first mate and his Skipper too will do their best to make comfortable
                                            these are voyages of the need no welfare states starship enterprise the
                                            Brady Bunch that's the way we all became the Brady Bunch these days are all
                                            Happy and Free these days are all share them with me oh baby so lets make
                                            the most of this beautiful day since we are together the Love Boat soon will
                                            be making another run the Love Boat promises something for everyone at some
                                            food and up through the ground.</p>
                                        <p>The need no welfare states starship enterprise the Brady Bunch that's the
                                            way we all became the Brady won Bunch these days are all Happy and Free
                                            these days are all share them with me oh baby so lets make the bit most of
                                            this beautiful day since we are together the Love Boat.</p>
                                        <h2>Service repairs</h2>
                                        <p>The need no welfare states starship enterprise the Brady Bunch that's the way
                                            we all became the Brady mes Bunch these days are all Happy and Free these
                                            days are all share.</p>
                                    </div>
                                </TabContainer>
                                <TabContainer>Item Two</TabContainer>
                                <TabContainer>Item Three</TabContainer>
                                <TabContainer>Item Four</TabContainer>
                                <TabContainer>Item Five</TabContainer>
                                <TabContainer>Item Six</TabContainer>
                            </SwipeableViews>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(List)