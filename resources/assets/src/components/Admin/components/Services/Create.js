import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    root: {
        display: 'flex',
        padding: 20
    }
});

class Create extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <div>Create service component</div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const styledCreate = withStyles(styles)(Create);

export {styledCreate as Create};