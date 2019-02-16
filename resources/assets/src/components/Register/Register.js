import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {userActions} from "../../_actions";

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

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {firstName, lastName, email, phone, password, password_confirmation} = this.state;
        const {dispatch} = this.props;

        if (firstName && lastName && email && phone && password && password_confirmation) {
            dispatch(userActions.register(firstName, lastName, email, phone, password, password_confirmation));
        }
    }

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
                        <form action="" onSubmit={this.handleSubmit}>
                            <Grid container spacing={16}>
                                <Grid item xs={6} className={classes.field}>
                                    <TextField
                                        id="register-first-name"
                                        label="First Name"
                                        placeholder="First Name"
                                        className={classes.textField}
                                        margin="normal"
                                        name={'firstName'}
                                        fullWidth={true}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
                                    <TextField
                                        id="register-last-name"
                                        label="Last Name"
                                        placeholder="Last Name"
                                        className={classes.textField}
                                        margin="normal"
                                        name={'lastName'}
                                        fullWidth={true}
                                        onChange={this.handleChange}
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
                                        name={'email'}
                                        fullWidth={true}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.field}>
                                    <TextField
                                        id="register-phone"
                                        label="Phone"
                                        placeholder="Phone"
                                        className={classes.textField}
                                        margin="normal"
                                        name={'phone'}
                                        fullWidth={true}
                                        onChange={this.handleChange}
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
                                        name={'password'}
                                        fullWidth={true}
                                        onChange={this.handleChange}
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
                                        name={'password_confirmation'}
                                        fullWidth={true}
                                        onChange={this.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" className={classes.button} type={'submit'}>
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

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const styledRegister = withStyles(styles)(Register);
const connectedRegister = connect(mapStateToProps)(styledRegister);

export { connectedRegister as Register};