import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {serviceActions} from './../../../../../_actions';
import {CircularIndeterminate} from './../../../../../components/CircularIndeterminate';
import {CustomSnackBar} from '../../../../../../../../scenes/components/CustomSnackBar';

const styles = themes => ({
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
        margin: themes.spacing.unit * 2,
    },
    circleContainer: {
        textAlign: 'center'
    },
    icon: {
        margin: themes.spacing.unit,
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

        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(e) {

        const {dispatch} = this.props;
        const id = e.target.getAttribute('id');

        if (id) {
            dispatch(serviceActions.remove(id));
            dispatch(serviceActions.getList());
        }
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
                            <Paper className={classes.paper}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Id</TableCell>
                                            <TableCell>Title</TableCell>
                                            <TableCell>Short description</TableCell>
                                            <TableCell>Created at</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {service.list.data.map(row => (
                                            <TableRow key={row.id}>
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell><Link to={`/admin/services/edit/${row.id}`}>{row.title}</Link></TableCell>
                                                <TableCell>{row.short_description}</TableCell>
                                                <TableCell>{row.created_at}</TableCell>
                                                <TableCell>
                                                    <DeleteOutlinedIcon id={row.id} className={classes.icon} onClick={this.onDelete} />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
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