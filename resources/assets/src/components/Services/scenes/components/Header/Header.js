import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

});

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>Service header component</div>
        );
    }
}

export default withStyles(styles)(Header);