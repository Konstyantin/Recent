import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {userActions} from '../../_actions';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {connect} from 'react-redux';
import {alertActions} from './../../_actions';
import {history} from "../../_helpers";
import {CustomSnackBar} from './../../scenes/components/CustomSnackBar'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
    textField: {
        marginRight: theme.spacing.unit,
        width: '100%'
    },
    paperLink: {
        ...theme.mixins.gutters(),
        marginTop: 30,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    }
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
            email: '',
            password: '',
            remember: false,
            submitted: false
        };

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handle change
     *
     * @param event
     */
    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    /**
     * Handle checkbox change
     *
     * @param e
     */
    handleCheckbox(e) {
        this.setState({remember: e.target.checked});
    }

    /**
     * Handle submit form
     *
     * @param e
     */
    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});

        const {email, password} = this.state;
        const {dispatch} = this.props;

        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    /**
     * Render component
     */
    render() {

        const {classes, alert} = this.props;

        const {email, password} = this.state;

        return (
            <div className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item xs={6}>
                        { !$.isEmptyObject(alert) &&
                        <CustomSnackBar message={alert.message} variant={alert.type} open={true}/>
                        }
                        <h2>Login</h2>
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <Grid container>
                                <Grid item xs={12} className={classes.field}>
                                    <TextValidator
                                        label="Email"
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        name="email"
                                        margin="normal"
                                        placeholder="Email"
                                        value={email}
                                        validators={['required', 'isEmail']}
                                        errorMessages={['this field is required', 'email is not valid']}
                                    />
                                </Grid>
                                <Grid item xs={12} className={classes.field}>
                                    <TextValidator
                                        label="Password"
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        name="password"
                                        type="password"
                                        margin="normal"
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        value={password}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.remember}
                                                onChange={this.handleCheckbox}
                                                value="remember"
                                                color="primary"
                                            />
                                        }
                                        label="Remember me"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" type="submit"  color="primary">Login</Button>
                                </Grid>
                            </Grid>
                        </ValidatorForm>

                        <Paper className={classes.paperLink} elevation={1}>
                            <Typography component="p">
                                New to Recovery Center? <Link to={'/register'}>Create an account</Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    const {alert} = state;

    return {loggingIn, alert}
}

const styledLogin = withStyles(styles)(Login);
const connectedLogin = connect(mapStateToProps)(styledLogin);

export {connectedLogin as Login};