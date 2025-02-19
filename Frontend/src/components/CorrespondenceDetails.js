import React from 'react'
import { Paper, makeStyles, TableContainer, TableCell, TableHead, TableRow, Table, TableBody } from '@material-ui/core'
import { pxToRem } from '../utils/theme';
import { formatter } from '../utils/formatter';
import { useSelector } from 'react-redux';


const useStyles = makeStyles(()=>({
    message:{
        textAlign: "left",
        font: `normal normal normal ${pxToRem(20)}/${pxToRem(28)} Ubuntu`,
        letterSpacing: pxToRem(0.36),
        opacity: 1,
        color:"#C0C6CA",
    }
}))


const CorrespondenceDetails=()=> {

    const selectedRows = useSelector(state=>state.checkBox.selectedRows)
    const classes = useStyles()

    let totalPay=0
    selectedRows.map((row)=>{
        totalPay+=row.total_open_amount
    })

    console.log(totalPay)

    return (
        <div className={classes.message}>
        <p>
            Subject: <span style={{color:"#FFFFFF"}}>{`Invoice Details - {Account Name}`}</span> 
        </p>
        <p>
            Dear Sir/Madam,<br/>
            Greetings!
        </p>
        <p>
            This is to remind you that there are one or more open invoices on your account. 
            Please provide at your earliest convenience an update on the payment details or clarify the reason
            for the delay. If you have any specific issue with the invoice(s), please let us know so that we can address it to the correct Department.
        </p>
        <p>
            Please find the details of the invoices below:
        </p>
        <TableContainer
            id="test-table"
            component={Paper}
            style={{
            width: "96.77%",
            marginRight: pxToRem(20),
            // marginLeft:pxToRem(5)
            }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Bill Id</TableCell> 
                        <TableCell>PO Number</TableCell>   
                        <TableCell align="right">Invoice Date</TableCell>
                        <TableCell align="right">Due date</TableCell> 
                        <TableCell align="right">Bill Currency</TableCell>  
                        <TableCell align="right">Open Amount($)</TableCell> 
                    </TableRow>  
                </TableHead>

                <TableBody>
                    {selectedRows.map((row,index)=>{
                        return (
                        <TableRow 
                        key={index} 
                        hover>
                            <TableCell>{row.doc_id}</TableCell>
                            <TableCell >{row.doc_id}</TableCell>
                            <TableCell align="right">{row.document_create_date}</TableCell>  
                            <TableCell align="right">{(row.due_in_date<row.clear_date)?row.due_in_date: <span style={{color:"#FF5B5B"}}>{row.due_in_date}</span>}</TableCell>
                            <TableCell align="right">{row.invoice_currency}</TableCell>
                            <TableCell align="right">{formatter(row.total_open_amount)}</TableCell>
                        </TableRow>
                    )
                    })} 
                </TableBody>
            </Table>
        </TableContainer>
        <p>
            Total Open Amount: <span style={{color:"#FFFFFF"}}>{`${totalPay}$`}</span>
        </p>
        <p>
        In case you have already made a payment for the above items,
        please send us the details to ensure the payment is posted.<br/>
        Let us know if we can be of further assistance. Looking forward to hear from you.
        </p>
        <p>
            Kind Regards,<br/>
            <span style={{color:"#FFFFFF"}}>Pratyush Jena</span><br/>
            Phone: <span style={{color:"#FFFFFF"}}>9425015403</span><br/>
            Email: <span style={{color:"#FFFFFF"}}>1805793@gmail.com</span><br/>
            HighRadius
        </p>
    </div>
    )
}

export default CorrespondenceDetails
