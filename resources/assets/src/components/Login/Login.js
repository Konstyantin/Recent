import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
    textField: {
        marginRight: theme.spacing.unit,
    },
});

/**
 * Login component
 */
class Login extends Component {

    /**
     * Construct
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            remember: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Handle change
     *
     * @param event
     */
    handleChange(event) {
        this.setState({remember: event.target.checked});
    }

    /**
     * Render component
     */
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item xs={4}>
                        <h2>Login</h2>
                        <form action="">
                            <Grid container>
                                <Grid item xs={12}>
                                    <TextField
                                        id="login-name"
                                        label="Name"
                                        placeholder="Name"
                                        className={classes.textField}
                                        margin="normal"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="login-password"
                                        label="Password"
                                        placeholder="Password"
                                        type="password"
                                        className={classes.textField}
                                        margin="normal"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.remember}
                                                onChange={this.handleChange}
                                                value="remember"
                                                color="primary"
                                            />
                                        }
                                        label="Remember me"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained"  color="primary">Login</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Login)