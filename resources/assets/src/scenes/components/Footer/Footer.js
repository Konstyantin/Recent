import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Input from '@material-ui/core/Input';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOn from '@material-ui/icons/LocationOn';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Mail from '@material-ui/icons/Mail';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#000',
        color: '#eee',
    },
    content: {
        padding: '50px 0'
    },
    description: {
        paddingRight: 50
    },
    header: {
        marginBottom: 20
    },
    itemText: {
        color: '#eee',
        paddingLeft: 5,
        paddingTop: 0
    },
    list: {
        padding: 0
    },
    input: {
        color: '#eee',
        backgroundColor: '#212529',
        padding: '4px 6px 5px',
        margin: 0
    },
});

import './style.css';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dense: false,
        }
    }

    render() {

        const {classes} = this.props;

        const {dense} = this.state;

        return (
            <footer>
                <div className={classes.root}>
                    <Grid container direction={'row'} justify={'center'}>
                        <Grid item xs={8}>
                            <Grid container direction={'row'} className={classes.content}>
                                <Grid item xs={4} className={classes.description}>
                                    <h3 className={classes.header}>Recovery Center</h3>
                                    <p>Repairplus brings 41 years of Digital Repairs experience right to your Device.
                                        Our Texhnicians are equipped to help you that work best.</p>
                                    <p>Our commitment to bring professionalism, good service & trust to the Phone repair
                                        service & maintenance business.</p>
                                </Grid>
                                <Grid item xs={8}>
                                    <Grid container direction={'row'} justify={'space-between'}>
                                        <Grid item xs={4}>
                                            <h3 className={classes.header}>Our Services</h3>
                                            <List dense={dense} className={classes.list}>
                                                <ListItem className={classes.itemText}>
                                                    <span>Desktop</span>
                                                </ListItem>
                                                <ListItem className={classes.itemText}>
                                                    <span>Laptop</span>
                                                </ListItem>
                                                <ListItem className={classes.itemText}>
                                                    <span>Smartphones</span>
                                                </ListItem>
                                                <ListItem className={classes.itemText}>
                                                    <span>Tablets</span>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <h3 className={classes.header}>Subscribe us</h3>
                                            <p>Subscribe to our newsletter!</p>
                                            <Input
                                                placeholder="Placeholder"
                                                className={classes.input}
                                                inputProps={{
                                                    'aria-label': 'Description',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <h3 className={classes.header}>Contact info</h3>
                                            <List dense={dense}>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <LocationOn/>
                                                    </ListItemAvatar>
                                                    <ListItemText>
                                                        <span className={classes.itemText}>Pushkinska street 64</span>
                                                    </ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <PhoneIphone/>
                                                    </ListItemAvatar>
                                                    <ListItemText>
                                                        <span className={classes.itemText}>+380771231123</span>
                                                    </ListItemText>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Mail/>
                                                    </ListItemAvatar>
                                                    <ListItemText>
                                                        <span className={classes.itemText}>recovery_center@mail.com</span>
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);
