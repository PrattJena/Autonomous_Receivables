import { Checkbox, TableHead, TableCell, TableRow } from '@material-ui/core';
import React from 'react'

export default function EnhancedTableHead(props) {
    const {
        classes,
        onSelectAllClick,
        rowCount,
        numSelected} = props;

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ "aria-label": "select all Invoices" }}
                    />
                </TableCell>
                <TableCell>Name Customer</TableCell> 
                <TableCell>Customer #</TableCell>   
                <TableCell>Bill #</TableCell>
                <TableCell align="right">Invoice Amount</TableCell>  
                <TableCell>Due date</TableCell> 
                <TableCell align="right">Predicted Payment Date</TableCell>
                <TableCell>Predicted Aging Bucket</TableCell> 
                <TableCell>Notes</TableCell> 
            </TableRow>  
        </TableHead>
    )
}
