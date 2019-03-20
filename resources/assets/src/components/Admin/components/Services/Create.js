import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        padding: 20,
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Create extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={8}>
                        <TextField
                            id="service-title"
                            label="Title"
                            className={classes.textField}
                            type="text"
                            autoComplete="service title"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id="service-description"
                            label="Description"
                            className={classes.textField}
                            type="text"
                            multiline
                            autoComplete="service description"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const styledCreate = withStyles(styles)(Create);

export {styledCreate as Create};