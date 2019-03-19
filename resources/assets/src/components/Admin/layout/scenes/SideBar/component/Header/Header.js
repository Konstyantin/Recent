import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const style = theme => ({
    header: {
        textAlign: 'center',
        padding: 7
    }
});

class Header extends Component {
    render() {

        const {classes} = this.props;

        return (
            <h3 className={classes.header}>Admin Recovery</h3>
        );
    }
}

export default withStyles(style)(Header);
