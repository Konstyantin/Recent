import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Header from './component/Header';
import {MenuList} from './component/MenuList';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 240;

const style = theme => ({
    root: {
        display: 'fixed',
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    }
});

class SideBar extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <Header title={'Dashboard'}/>
                    <MenuList/>
                </Drawer>
            </div>
        );
    }
};

export default withStyles(style)(SideBar);