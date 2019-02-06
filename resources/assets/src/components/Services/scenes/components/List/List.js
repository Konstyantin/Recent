import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({});

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Service list component</div>
        )
    }
}

export default withStyles(styles)(List)