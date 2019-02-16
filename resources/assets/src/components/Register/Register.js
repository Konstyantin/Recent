import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {userActions} from "../../_actions";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
    textField: {
        marginRight: theme.spacing.unit,
        width: '100%'
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

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
            submitted: false
        };

        this.props.dispatch(userActions.logout());

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handle submit form
     *
     * @param e
     */
    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {firstName, lastName, email, phone, password, password_confirmation} = this.state;
        const {dispatch} = this.props;

        console.log(firstName, lastName, email, phone, password, password_confirmation);

        if (firstName && lastName && email && phone && password && password_confirmation) {
            dispatch(userActions.register(firstName, lastName, email, phone, password, password_confirmation));
        }
    }

    /**
     * Component did mount
     */
    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.password) {
                return false;
            }
            return true;
        });
    }

    /**
     * Handle change
     *
     * @param e
     */
    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    /**
     * Render component
     * @returns {*}
     */
    render() {

        const {classes} = this.props;

        const {firstName, lastName, email, phone, password, password_confirmation, submitted} = this.state;

        return (
            <div className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item xs={6}>
                        <h2>Registration</h2>
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <Grid container spacing={16}>
                                <Grid item xs={6} className={classes.field}>
                                    <TextValidator
                                        label="First Name"
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        name="firstName"
                                        margin="normal"
                                        placeholder="First Name"
                                        value={firstName}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
                                    <TextValidator
                                        label="Last Name"
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        name="lastName"
                                        margin="normal"
                                        placeholder="Last Name"
                                        value={lastName}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
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
                                <Grid item xs={6} className={classes.field}>
                                    <TextValidator
                                        label="Phone"
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        name="phone"
                                        margin="normal"
                                        placeholder="Phone"
                                        value={phone}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
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
                                <Grid item xs={6} className={classes.field}>
                                    <TextValidator
                                        label="Repeat password"
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        name="password_confirmation"
                                        type="password"
                                        margin="normal"
                                        validators={['isPasswordMatch', 'required']}
                                        errorMessages={['password mismatch', 'this field is required']}
                                        value={password_confirmation}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" className={classes.button} type={'submit'}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const styledRegister = withStyles(styles)(Register);
const connectedRegister = connect(mapStateToProps)(styledRegister);

export { connectedRegister as Register};