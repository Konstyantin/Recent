import React, {Component} from 'react';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import {withStyles} from "@material-ui/core/styles/index";

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    snack: {
        maxWidth: '100%',
        marginBottom: 20
    }
});

/**
 * Custom Snack Bar
 */
class CustomSnackBar extends Component {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            open: null
        };

        this.handleClose = this.handleClose.bind(this);
    }

    /**
     * Component did mount
     */
    componentDidMount() {
        const {open} = this.props;

        this.setState({open: open});
    }

    /**
     * Handle close
     */
    handleClose() {
        this.setState({
            open: false
        });
    }

    /**
     * Render component
     *
     * @returns {*}
     */
    render() {
        const { classes, className, message, variant, ...other } = this.props;
        const Icon = variantIcon[variant];
        const {open} = this.state;

        return (
            <div>
                {open &&
                <SnackbarContent
                    className={classNames(classes[variant], className, classes.snack)}
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar" className={classes.message}>
                            <Icon className={classNames(classes.icon, classes.iconVariant)}/>
                            {message}
                        </span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon className={classes.icon}/>
                        </IconButton>,
                    ]}
                    {...other}
                />
                }
            </div>
        );
    }
}

export default withStyles(styles)(CustomSnackBar);




