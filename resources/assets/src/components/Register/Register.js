import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({});
class Register extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Register component</div>
        );
    }
}

export default withStyles(styles)(Register);