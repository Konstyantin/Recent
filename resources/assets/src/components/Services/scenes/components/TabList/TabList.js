import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DoneIcon from '@material-ui/icons/Done';

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

const TabContainer = ({children}) => {
    return children;
};

/**
 * TabList component
 */
class TabList extends Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    /**
     * Handle change tab
     *
     * @param event
     * @param value
     */
    handleChange(event, value) {
        this.setState({value});
    }

    /**
     * Handle change tab index
     * @param index
     */
    handleChangeIndex(index) {
        this.setState({value: index});
    }

    render() {

        const tabsList = [
            {
                imgSrc: 'http://t.commonsupport.com/catania/images/resource/service-single.jpg',
                title: 'Smart phone repairs'
            },
            {
                imgSrc: 'http://t.commonsupport.com/catania/images/resource/service-single.jpg',
                title: 'Tablet - iPad repairs'
            },
            {
                imgSrc: 'http://t.commonsupport.com/catania/images/resource/service-single.jpg',
                title: 'PC & Mac computers'
            },
            {
                imgSrc: 'http://t.commonsupport.com/catania/images/resource/service-single.jpg',
                title: 'Laptop MacBook repairs'
            },
            {
                imgSrc: 'http://t.commonsupport.com/catania/images/resource/service-single.jpg',
                title: 'Wifi - Network problem'
            },
            {
                imgSrc: 'http://t.commonsupport.com/catania/images/resource/service-single.jpg',
                title: 'Data recovery'
            }
        ];

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item xs={10} lg={8}>
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
                                    <Tab label="Smartphone"/>
                                    <Tab label="Tablet"/>
                                    <Tab label="PC"/>
                                    <Tab label="Laptop"/>
                                    <Tab label="Wifi"/>
                                    <Tab label="Data"/>
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                index={this.state.value}
                                onChangeIndex={this.handleChangeIndex}
                            >
                                {tabsList.map((item, index) => (
                                    <TabContainer index={index} key={index}>
                                        <div>
                                            <img src={item.imgSrc}
                                                 alt="" className={classes.image}/>
                                            <h2 className={classes.title}>{item.title}</h2>
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
                                            <List component="nav">
                                                <ListItem button>
                                                    <ListItemIcon>
                                                        <DoneIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Beats all you've ever saw been in trouble with the law since the day they was born" />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon>
                                                        <DoneIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Five passengers set sail that day for a three hour tour a three hour tour." />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon>
                                                        <DoneIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Took a whole lotta tryin' just to get up that hill." />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon>
                                                        <DoneIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Flying away on a wing and a prayer who could it be? Believe it or not its just me." />
                                                </ListItem>
                                                <ListItem button>
                                                    <ListItemIcon>
                                                        <DoneIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Love Boat soon will be making another run." />
                                                </ListItem>
                                            </List>
                                            <Divider />
                                        </div>
                                    </TabContainer>
                                ))}
                            </SwipeableViews>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(TabList)