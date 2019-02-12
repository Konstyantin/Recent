import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({});

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Login component</div>
        );
    }
}

export default withStyles(styles)(Login)