import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Header from './component/Header'
import {MenuList} from './component/MenuList'

const style = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
});

class SideBar extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Header/>
                <MenuList/>
            </div>
        );
    }
};

export default withStyles(style)(SideBar);