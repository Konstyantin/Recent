import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        margin: '50px 0',
        textAlign: 'center'
    }
});

/**
 * Works component
 */
class Works extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.title}>
                    <h2>Our gallery</h2>
                    <p>These men promptly escaped from a maximum security stockade to the Los Angeles underground texas
                        tea.</p>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Works)