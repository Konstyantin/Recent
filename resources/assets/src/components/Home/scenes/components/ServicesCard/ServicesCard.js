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

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 80
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    header: {
        textAlign: 'center'
    },
    headerDescription: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    serviceList: {
        width: '75%',
        margin: '0 auto'
    },
    card: {
        maxWidth: 345,
        textAlign: 'center'
    },
    media: {
        height: 140,
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
    }
});

class ServicesCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.header}>
                    <h2>Our extreme services</h2>
                    <p className={classes.headerDescription}>The first mate and his Skipper too will do their very best to make the others comfortable in
                        their tropic island nest</p>
                </div>

                <Grid container spacing={40} className={classes.serviceList}>
                    <Grid item xs={4}>
                        <Card className={classes.card}>
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
                    <Grid item xs={4}>
                        <Card className={classes.card}>
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
                    <Grid item xs={4}>
                        <Card className={classes.card}>
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
                    <Grid item xs={4}>
                        <Card className={classes.card}>
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
                    <Grid item xs={4}>
                        <Card className={classes.card}>
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
                    <Grid item xs={4}>
                        <Card className={classes.card}>
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
            </div>
        );
    }
}

export default withStyles(styles)(ServicesCard);