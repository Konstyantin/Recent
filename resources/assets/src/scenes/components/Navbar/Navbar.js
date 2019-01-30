import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    },
    link: {
        color: '#000',
        '&:hover': {
            color: '#000'
        }
    }
});

/**
 * Navbar component
 */
class Navbar extends Component {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            left: false,
        };

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    /**
     * Open left sidebar
     */
    openDrawer() {
        this.setState({
            left: true
        });
    }

    /**
     * Close left sidebar
     */
    closeDrawer() {
        this.setState({
            left: false
        });
    }

    /**
     * Render func
     * @returns {*}
     */
    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button key={'home'}>
                        <ListItemText>
                            <Link to="/" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button key={'services'}>
                        <ListItemText>
                            <Link to="/services" className={classes.link}>Services</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button key={'gallery'}>
                        <ListItemText>
                            <Link to="/gallery" className={classes.link}>Gallery</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button key={'about'}>
                        <ListItemText>
                            <Link to="/about" className={classes.link}>About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button key={'contact'}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>Contact</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static" color='default'>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Recovery Center
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Button color="inherit">
                                <Link to="/" className={classes.link}>Home</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/services" className={classes.link}>Services</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/gallery" className={classes.link}>Gallery</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/about" className={classes.link}>About</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/contact" className={classes.link}>Contact</Link>
                            </Button>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.openDrawer} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.closeDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.closeDrawer}
                        onKeyDown={this.closeDrawer}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}


export default withStyles(styles)(Navbar);