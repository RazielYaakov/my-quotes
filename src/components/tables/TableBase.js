import 'react-toastify/dist/ReactToastify.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);

    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    return stabilizedThis.map((el) => el[0]);
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#060606',
        color: theme.palette.common.white,
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '1em',
        padding: '5px',
        fontFamily: 'Heebo',
    },
    body: {
        fontSize: '1em',
        color: 'whitesmoke',
        textAlign: 'center',
        padding: '5px',
        fontFamily: 'Heebo',
    },
}))(TableCell);

const StyledTableSortLabel = withStyles(() => ({
    root: {
        color: 'white',
        '&$active': {
            color: 'white',
        },
        '&:focus': {
            color: 'white',
        },
        '&:hover': {
            color: '#ababab',
        },
        '& path':  {
            stroke: '#2ca915',
            strokeWidth: 2
        }
    },
    icon: {
        color: 'white !important',
        opacity: 1,
        '&$active': {
            color: 'white',
        },
        '&:focus': {
            color: 'white',
        },
    },
    active: {
        color: 'white',
    },
}))(TableSortLabel);


const StyledTableRow = withStyles(() => ({
    root: {
        color: 'white',
        transition: '200ms',
        '&$active': {
            color: '#504e4c',
        },
        '&:focus': {
            color: '#504e4c',
        },
        '&:hover': {
            backgroundColor: '#504e4c',
        },
    }
}))(TableRow);

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell
                    key={'name'}
                    align={'center'}
                    sortDirection={orderBy === 'name' ? order : false}>
                    <StyledTableSortLabel
                        active={orderBy === 'name'}
                        hideSortIcon={orderBy !== 'name'}
                        direction={orderBy === 'name' ? order : 'asc'}
                        onClick={createSortHandler('name')}
                    >שם</StyledTableSortLabel>
                </StyledTableCell>
                <StyledTableCell
                    key={'amountOfPeople'}
                    align={'center'}
                    sortDirection={orderBy === 'amountOfPeople' ? order : false}>
                    <StyledTableSortLabel
                        active={orderBy === 'amountOfPeople'}
                        hideSortIcon={orderBy !== 'amountOfPeople'}
                        direction={orderBy === 'amountOfPeople' ? order : 'asc'}
                        onClick={createSortHandler('amountOfPeople')}
                    >כמות אנשים שפגש</StyledTableSortLabel>
                </StyledTableCell>
            </TableRow>
        </TableHead>
    );
};

const TableHeadCell = ({ order, orderBy, createSortHandler, fieldName, fieldKey }) => {
    return (
        <StyledTableCell
            key={fieldKey}
            align={'center'}
            sortDirection={orderBy === fieldKey ? order : false}>
            <StyledTableSortLabel
                active={orderBy === fieldKey}
                hideSortIcon={orderBy !== fieldKey}
                direction={orderBy === fieldKey ? order : 'asc'}
                onClick={createSortHandler(fieldKey)}
            >{fieldName}</StyledTableSortLabel>
        </StyledTableCell>
    )
};

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    table: {
        width: '90%',
        padding: 0,
        margin: 0,
        marginTop: '1em',
    },
}));

const defaultOptions = (animationData) => {
    return {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        animType: 'svg',
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
};

const StyledDialog = styled.div`
flex: 1 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
min-height: 200px;
max-height: 80%;
padding: 20px;
overflow-x: hidden;
background: #e5e5e5;
`;

export { StyledDialog, defaultOptions, StyledTableSortLabel, StyledTableCell, stableSort, getComparator, useStyles, TableHeadCell, StyledTableRow };
