import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {tableServiceHelper} from './../../_helpers';
import Paper from '@material-ui/core/Paper';
import {EnhancedTableToolbar} from './../../scenes';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {EnhancedTableHead} from './EnhancedTableHead';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
import {serviceActions} from './../../../../../_actions';
import {connect} from 'react-redux';

const {stableSort, getSorting} = tableServiceHelper;

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});


class EnhancedTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            services: [],
            page: 0,
            rowsPerPage: 5,
        };

        this.handleRequestSort = this.handleRequestSort.bind(this);
        this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.handleDeleteSelected = this.handleDeleteSelected.bind(this);
    }

    componentDidMount() {
        const {services} = this.props;

        this.setState({services: services});
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
            this.setState(state => ({ selected: state.services.map(n => n.id) }));
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

    handleDeleteSelected(event) {
        const {selected} = this.state;
        const {dispatch} = this.props;

        dispatch(serviceActions.deleteSelected(selected));
        dispatch(serviceActions.getList());
    }

    isSelected(id) {
        return this.state.selected.indexOf(id) !== -1;
    }

    render() {
        const { classes } = this.props;
        const { order, orderBy, selected, rowsPerPage, page, services } = this.state;

        return (
            <div>
                {services.length &&
                <Paper className={classes.root}>

                    <EnhancedTableToolbar
                        numSelected={selected.length}
                        onDeleteSelected={this.handleDeleteSelected}
                    />
                    <div className={classes.tableWrapper}>
                        <Table className={classes.table} aria-labelledby="tableTitle">
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={this.handleSelectAllClick}
                                onRequestSort={this.handleRequestSort}
                                rowCount={services.length}
                            />
                            <TableBody>
                                {stableSort(services, getSorting(order, orderBy))
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
                                                    {n.title}
                                                </TableCell>
                                                <TableCell align="right">{n.short_description}</TableCell>
                                                <TableCell align="right">{n.created_at}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </div>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={services.length}
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
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

EnhancedTable = withStyles(styles)(EnhancedTable);
EnhancedTable = connect(mapStateToProps)(EnhancedTable);

export {EnhancedTable};