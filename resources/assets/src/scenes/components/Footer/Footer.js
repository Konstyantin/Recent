import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
});

import './style.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                Footer component
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);
