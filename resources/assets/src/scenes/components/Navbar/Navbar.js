import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
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
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
            open: false
        };

        this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
        this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleMobileMenuOpen(event) {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose() {
        this.setState({ mobileMoreAnchorEl: null });
    };

    handleClose() {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    handleToggle() {
        this.setState(state => ({ open: !state.open }));
    }

    render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        const { open } = this.state;

        const renderPopoverMenu = (
            <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        id="menu-list-grow"
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={this.handleClose}>
                                <MenuList>
                                    <MenuItem onClick={this.handleClose}>
                                        <Link to="/service/1">Service item</Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        <Link to="/service/1">Service item</Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        <Link to="/service/1">Service item</Link>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
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
                                <Link to="/">Home</Link>
                            </Button>
                            <Button
                                buttonRef={node => {
                                    this.anchorEl = node;
                                }}
                                aria-owns={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleToggle}
                            >
                                Services
                            </Button>

                            <Button color="inherit">
                                <Link to="/gallery">Gallery</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/about">About</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/contact">Contact</Link>
                            </Button>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderPopoverMenu}
                {renderMobileMenu}
            </div>
        );
    }
}


export default withStyles(styles)(Navbar);