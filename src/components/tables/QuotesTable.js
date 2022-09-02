import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getComparator, stableSort, StyledTableCell, StyledTableRow, TableHeadCell, useStyles } from './TableBase';

const createYearDate = (date) => {
    var dateObj = new Date(date);

    return dateObj.getFullYear();
};

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        console.log(event);
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {TableHeadCell({ order, orderBy, createSortHandler, fieldName: 'Author', fieldKey: 'Author' })}
                {TableHeadCell({ order, orderBy, createSortHandler, fieldName: 'The quote', fieldKey: 'QuoteData' })}
                {TableHeadCell({ order, orderBy, createSortHandler, fieldName: 'Origin', fieldKey: 'OriginName' })}
                {TableHeadCell({ order, orderBy, createSortHandler, fieldName: 'Origin Type', fieldKey: 'OriginType' })}
                {TableHeadCell({ order, orderBy, createSortHandler, fieldName: 'Page', fieldKey: 'Page' })}
                {TableHeadCell({ order, orderBy, createSortHandler, fieldName: 'Year', fieldKey: 'Year' })}
                {TableHeadCell({ order, orderBy, createSortHandler, fieldName: 'Labels', fieldKey: 'Labels' })}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const QuotesTable = ({ quotes, criteria }) => {
    let history = useHistory();
    const classes = useStyles();
    // const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('firstName');
    // const [quotesRows, setQuotesRows] = useState(undefined);

    // const createRowsOfQuotes = () => {
    //     setIsLoading(true);

    //     if (quotes !== undefined) {
    //         const rows = createRows(quotes);
    //         setIsLoading(false);
    //         setQuotesRows(rows);
    //     }
    // };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    // const handleDeleteQuote = async () => {
    //     console.log(deleteQuoteId);
    //     const deleteIntructionResponse = await DeleteQuoteRequest(deleteQuoteId);

    //     if (deleteIntructionResponse.status === OK_RESPONSE) {
    //         toast.success(`ההנחיה נמחקה!`);
    //         deletedQuotes.push(deleteQuoteId);
    //         setDeletedQuotes(deletedQuotes);
    //     } else {
    //         toast.warn('הייתה בעיה עם המחיקה...נסה שוב');
    //     }

    //     closeDeleteDialog();
    // };

    // const handleUpdateQuote = async () => {
    //     const updateQuoteResponse = await
    //         UpdateQuoteRequest(updateQuoteId, updateQuoteData, updateQuoteDate);

    //     if (updateQuoteResponse.status === OK_RESPONSE) {
    //         toast.info(`ההנחיה עודכנה!`);
    //     } else {
    //         toast.warn('הייתה בעיה עם העדכון...נסה שוב');
    //     }

    //     closeEditDialog();
    // };

    // if (quotesRows === undefined) {
    //     if (isLoading) {
    //         createRowsOfQuotes();
    //     }

    //     return <Lottie height={250}
    //         width={250}
    //         options={defaultOptions(animationData)} />
    // }

    return (
        <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
        >
            <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
            />
            <TableBody>
                {stableSort(quotes, getComparator(order, orderBy))
                    .filter(quote => criteria !== undefined ? quote.author.includes(criteria) : quote)
                    .map((quote) => {
                        return (
                            <StyledTableRow
                                key={quote.id}
                            >
                                <StyledTableCell>{quote.author}</StyledTableCell>
                                <StyledTableCell>{quote.data}</StyledTableCell>
                                <StyledTableCell>{quote.origin}</StyledTableCell>
                                <StyledTableCell>{quote.originType}</StyledTableCell>
                                <StyledTableCell>{quote.page}</StyledTableCell>
                                <StyledTableCell>{createYearDate(quote.date)}</StyledTableCell>
                                <StyledTableCell>{quote.labels}</StyledTableCell>
                            </StyledTableRow>
                        );
                    })}
            </TableBody>
        </Table>
    );
}

export default QuotesTable;
