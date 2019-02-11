import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RouterIcon from '@material-ui/icons/Router';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import StorageIcon from '@material-ui/icons/Storage';
import DesctopWindowsIcon from '@material-ui/icons/DesktopWindows';
import classNames from 'classnames';

import './style.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: '50px 0'
    },
    header: {
        textAlign: 'center'
    },
    headerDescription: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    card: {
        maxWidth: 345,
        textAlign: 'center'
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },
    learn: {
        margin: '0 auto'
    },
    title: {
        padding: '10px 0'
    },
    list: {
        padding: 12
    },
    item: {
        textAlign: 'center'
    }
});

/**
 * Services card
 */
class ServicesCard extends Component {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container direction={'row'} justify={'center'}>
                    <Grid item lg={8} xs={10}>
                        <div className={classes.header}>
                            <h2>Our extreme services</h2>
                            <p className={classes.headerDescription}>The first mate and his Skipper too will do their very best
                                to make the others comfortable in
                                their tropic island nest</p>
                        </div>
                        <Grid container direction={'row'} justify={'center'} spacing={24} className={classes.list}>
                            <Grid item lg={4} md={6} xs={8} className={classes.item}>
                                <Card className={classNames(classes.card, 'service-item')}>
                                    <CardActionArea>
                                        <CardContent>
                                            <PhoneIphoneIcon className={classes.icon} />
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                                Smart phone repair
                                            </Typography>
                                            <Typography component="p">
                                                The first mate and his Skipper too will do their best to make comfortable.
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
                            <Grid item lg={4} md={6} xs={8} className={classes.item}>
                                <Card className={classNames(classes.card, 'service-item')}>
                                    <CardActionArea>
                                        <CardContent>
                                            <TabletMacIcon className={classes.icon} />
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                                Tablet - iPad repair
                                            </Typography>
                                            <Typography component="p">
                                                The first mate and his Skipper too will do their best to make comfortable.
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
                            <Grid item lg={4} md={6} xs={8} className={classes.item}>
                                <Card className={classNames(classes.card, 'service-item')}>
                                    <CardActionArea>
                                        <CardContent>
                                            <DesctopWindowsIcon className={classes.icon} />
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                                PC & Mac computers
                                            </Typography>
                                            <Typography component="p">
                                                The first mate and his Skipper too will do their best to make comfortable.
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
                            <Grid item lg={4} md={6} xs={8} className={classes.item}>
                                <Card className={classNames(classes.card, 'service-item')}>
                                    <CardActionArea>
                                        <CardContent>
                                            <LaptopMacIcon className={classes.icon} />
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                                Laptop - Macbook repair
                                            </Typography>
                                            <Typography component="p">
                                                The first mate and his Skipper too will do their best to make comfortable.
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
                            <Grid item lg={4} md={6} xs={8} className={classes.item}>
                                <Card className={classNames(classes.card, 'service-item')}>
                                    <CardActionArea>
                                        <CardContent>
                                            <RouterIcon className={classes.icon} />
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                                Wifi - Network problem
                                            </Typography>
                                            <Typography component="p">
                                                The first mate and his Skipper too will do their best to make comfortable.
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
                            <Grid item lg={4} md={6} xs={8} className={classes.item}>
                                <Card className={classNames(classes.card, 'service-item')}>
                                    <CardActionArea>
                                        <CardContent>
                                            <StorageIcon className={classes.icon} />
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                                Data recovery
                                            </Typography>
                                            <Typography component="p">
                                                The first mate and his Skipper too will do their best to make comfortable.
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

export default withStyles(styles)(ServicesCard);