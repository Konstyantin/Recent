import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {serviceActions} from './../../../../../_actions';
import {CustomSnackBar} from '../../../../../../../../scenes/components/CustomSnackBar';
import {EnhancedTable} from './EnhancedTable';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {CircularIndeterminate} from './../../../../../components/CircularIndeterminate';

const styles = theme => ({
    root: {
        display: 'flex',
        padding: 20
    },
    paper: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    button: {
        marginBottom: 15
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
    circleContainer: {
        textAlign: 'center'
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    }
});

const ServiceListSnackBar = ({alert}) => {

    const {type, message} = alert;

    if (!$.isEmptyObject(alert)) {
        return <CustomSnackBar key={type} message={message} variant={type}/>
    }

    return null;
};

/**
 * List component
 */
class List extends Component {

    /**
     * Component did mount default method
     */
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(serviceActions.getList());
    }

    /**
     * Render component
     * @returns {*}
     */
    render() {

        const {classes, service, alert} = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <ServiceListSnackBar alert={alert}/>
                        <Link to={'/admin/services/create'}>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Add new
                            </Button>
                        </Link>
                        {service.requested &&
                            <div className={classes.circleContainer}>
                                <CircularIndeterminate classes={classes}/>
                            </div>
                        }

                        {!service.requested && service.list &&
                            <EnhancedTable services={service.list.data}/>
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

/**
 * Mapped data from redux
 * @param state
 * @returns {{service: *}}
 */
function mapStateToProps(state) {
    const {service, alert} = state;

    return {service, alert};
}

const styledList = withStyles(styles)(List);
const connectedList = connect(mapStateToProps)(styledList);

export {connectedList as List};