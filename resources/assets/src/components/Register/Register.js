import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
    textField: {
        marginRight: theme.spacing.unit,
    },
    form: {
        paddingLeft: 50,
        paddingBottom: 50
    },
    field: {
        marginLeft: 0
    }
});

/**
 * Register component
 */
class Register extends Component{

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render component
     * @returns {*}
     */
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item xs={6}>
                        <h2>Registration</h2>
                        <form action="">
                            <Grid container spacing={16}>
                                <Grid item xs={6} className={classes.field}>
                                    <TextField
                                        id="register-first-name"
                                        label="First Name"
                                        placeholder="First Name"
                                        className={classes.textField}
                                        margin="normal"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
                                    <TextField
                                        id="register-last-name"
                                        label="Last Name"
                                        placeholder="Last Name"
                                        className={classes.textField}
                                        margin="normal"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
                                    <TextField
                                        id="register-email"
                                        label="Email"
                                        type="email"
                                        placeholder="Email"
                                        className={classes.textField}
                                        margin="normal"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
                                    <TextField
                                        id="register-phone"
                                        label="Phone"
                                        placeholder="Phone"
                                        className={classes.textField}
                                        margin="normal"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
                                    <TextField
                                        id="register-password"
                                        label="Password"
                                        placeholder="Password"
                                        type="password"
                                        className={classes.textField}
                                        margin="normal"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
                                    <TextField
                                        id="register-confirm-password"
                                        label="Confirm Password"
                                        placeholder="Confirm Password"
                                        type="password"
                                        className={classes.textField}
                                        margin="normal"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Register);