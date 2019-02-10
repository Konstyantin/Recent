import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({});

class MapContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>Map container</div>
        )
    }
}

export default withStyles(styles)(MapContainer);