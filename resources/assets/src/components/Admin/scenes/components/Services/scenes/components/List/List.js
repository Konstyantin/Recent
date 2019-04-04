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
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';


let counter = 0;

const createData = (name, calories, fat, carbs, protein) => {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
}

const desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

const getSorting = (order, orderBy) => {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

class EnhancedTableHead extends React.Component {
    // createSortHandler = property => event => {
    //     this.props.onRequestSort(event, property);
    // };

    render() {
        const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {rows.map(
                        row => (
                            <TableCell
                                key={row.id}
                                align={row.numeric ? 'right' : 'left'}
                                padding={row.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === row.id ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === row.id}
                                        direction={order}
                                        // onClick={this.createSortHandler(row.id)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        ),
                        this,
                    )}
                </TableRow>
            </TableHead>
        );
    }
}

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

let EnhancedTableToolbar = props => {
    const { numSelected, classes } = props;

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subtitle1">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography variant="h6" id="tableTitle">
                        Nutrition
                    </Typography>
                )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="Filter list">
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

class EnhancedTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            data: [
                createData('Cupcake', 305, 3.7, 67, 4.3),
                createData('Donut', 452, 25.0, 51, 4.9),
                createData('Eclair', 262, 16.0, 24, 6.0),
                createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
                createData('Gingerbread', 356, 16.0, 49, 3.9),
                createData('Honeycomb', 408, 3.2, 87, 6.5),
                createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                createData('Jelly Bean', 375, 0.0, 94, 0.0),
                createData('KitKat', 518, 26.0, 65, 7.0),
                createData('Lollipop', 392, 0.2, 98, 0.0),
                createData('Marshmallow', 318, 0, 81, 2.0),
                createData('Nougat', 360, 19.0, 9, 37.0),
                createData('Oreo', 437, 18.0, 63, 4.0),
            ],
            page: 0,
            rowsPerPage: 5,
        };

        this.handleRequestSort = this.handleRequestSort.bind(this);
        this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.isSelected = this.isSelected.bind(this);
    }

    handleRequestSort(event, property) {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    }

    handleSelectAllClick(event) {
        if (event.target.checked) {
            this.setState(state => ({ selected: state.data.map(n => n.id) }));
            return;
        }
        this.setState({ selected: [] });
    }

    handleClick (event, id){
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({ selected: newSelected });
    };

    handleChangePage(event, page) {
        this.setState({ page });
    };

    handleChangeRowsPerPage(event) {
        this.setState({ rowsPerPage: event.target.value });
    };

    isSelected(id) {
        this.state.selected.indexOf(id) !== -1;
    }

    render() {
        const { classes } = this.props;
        const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={this.handleSelectAllClick}
                            onRequestSort={this.handleRequestSort}
                            rowCount={data.length}
                        />
                        <TableBody>
                            {stableSort(data, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(n => {
                                    const isSelected = this.isSelected(n.id);
                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => this.handleClick(event, n.id)}
                                            role="checkbox"
                                            aria-checked={isSelected}
                                            tabIndex={-1}
                                            key={n.id}
                                            selected={isSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={isSelected} />
                                            </TableCell>
                                            <TableCell component="th" scope="row" padding="none">
                                                {n.name}
                                            </TableCell>
                                            <TableCell align="right">{n.calories}</TableCell>
                                            <TableCell align="right">{n.fat}</TableCell>
                                            <TableCell align="right">{n.carbs}</TableCell>
                                            <TableCell align="right">{n.protein}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
}

EnhancedTable = withStyles(styles)(EnhancedTable);


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

                        <EnhancedTable/>
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