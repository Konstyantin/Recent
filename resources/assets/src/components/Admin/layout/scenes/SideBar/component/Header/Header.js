import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const style = theme => ({
    header: {
        textAlign: 'center',
        padding: '10px 7px',
        marginBottom: 0,
    }
});

class Header extends Component {
    render() {

        const {classes} = this.props;

        return (
            <h4 className={classes.header}>Admin Recovery</h4>
        );
    }
}

export default withStyles(style)(Header);
