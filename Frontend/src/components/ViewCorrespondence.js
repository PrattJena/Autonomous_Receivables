import React from 'react'
import { Select, MenuItem, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, makeStyles, Grid, IconButton, TableContainer, TableCell, TableHead, TableRow, Table, TableBody, FormControl } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { pxToRem } from '../utils/theme';
import { formatter } from '../utils/formatter';
import CorrespondenceDetails from './CorrespondenceDetails';
import jsPDF from 'jspdf';
import AltCorrespondenceDetails from './AltCorrespondenceDetails';
import { useSelector } from 'react-redux';


const useStyles = makeStyles(theme=>({
    dialogBoxPaper:{
        minWidth:pxToRem(1761),
        minHeight:pxToRem(755),
        backgroundColor:"#2A3E4C",
        borderRadius:pxToRem(6),
    },
    DialogContent: {
        margin:pxToRem(20),
        '&::-webkit-scrollbar': {
            width: pxToRem(10),
            height:pxToRem(278)
            
          },
        '&::-webkit-scrollbar-thumb':{
            background: "#61707B 0% 0% no-repeat padding-box",
            borderRadius: pxToRem(8),
            marginRight: pxToRem(18) 
        },
        '&::-webkit-scrollbar-track':{
            boxShadow:"0rem"
        }
    },

    dialogTitle:{
        margin:pxToRem(30),
        padding:"0px"
    },
    dropDown:{
        backgroundColor:"#283A46",
        borderRadius:pxToRem(10),
        border: `${pxToRem(1)} solid #14AFF1` ,
    },
    view:{
        textAlign: "left",
        font: `normal normal normal ${pxToRem(16)}/${pxToRem(21)} Ubuntu`,
        letterSpacing: pxToRem(0.33),
        color: "#C0C6CA",
        opacity: 1
    },

}))

const ViewCorrespondence = (props) => {

    const classes = useStyles()
    const [template, setTemplate] = React.useState("Template 1")
     const selectedRows = useSelector(state=>state.checkBox.selectedRows)

    console.log(template)

    let total=0
    selectedRows.map((row)=>{
        total+=row.total_open_amount
    })

    function jspdfMaker(){
        
        const doc = new jsPDF();
        doc.setFontSize(10);
        var heading = 
            `Subject : Order Details 
            \nDear Sir/Madam,
            \nGreetings!\n
            This is to remind you that there are one or more open invoices in
            your account, please provide at your earliest convenience an update
            on the payment details or clarify the reason for the delay. If you
            have any specific issue with the invoice(s) , please let us know so
            that so that we can address it correct department.
            \n
            \n
            Please find the details of the invoices below.\n`

        var string = ''

        function details() {
            string = string + (`Invoice Number     `)
            string = string + (` PO Number      `)
            string = string + (`  Invoice Date                  `)
            string = string + (`    Due Date                             `)
            string = string + (`Currency          `)
            string = string + (`Open Amount($)   \n`)
      
            selectedRows.map((item) => {
              string = string + (`${String(item.doc_id)}   `)
              string = string + (`        ${String(item.doc_id)}        `)
              string = string + (`${(item.clear_date)}        `)
              string = string + (`          ${String(item.due_in_date)}          `)
              string = string + (`                     ${String(item.invoice_currency)}       `)
              string = string + (`        $${String(formatter(item.total_open_amount))}   \n`)
            })
            return string;
          }

        var totalOpenAmount = `\n
            Total Amount To be Paid :$ ${formatter(total)}\n
            In case you have already made a payment for the above items,\n
            please send us the details to ensure the payment is posted.\n
            Let us know if we can be of any assistance. \n
            Looking forward to hearing from you.`
        var footer = `\n
            In case you have already made a payment for the above items,\n
            please send us the details to ensure the payment is posted.\n
            Let us know if we can be of any assistance. \n
            Looking forward to hearing from you.`
        let temp = '1'
        if (temp === '1')
        doc.text(heading + details() + totalOpenAmount, 5, 5);
        else
        doc.text(heading + details() + footer, 5, 5);
        doc.save("Invoice_Details.pdf")
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    const handleChange = (event) => {
        setTemplate(event.target.value);
    };



    const {title,viewCorrespondence,setViewCorrespondence}=props
    return (
        <div>
            <Dialog open={viewCorrespondence} classes = {{paper: classes.dialogBoxPaper}}>
                <DialogTitle className = {classes.dialogTitle} >
                    <div style={{display:"flex"}}>
                        <div style={{flexGrow:1}}>
                            {title}
                        </div>

                        <div>
                        <span className={classes.view}>View:</span>&nbsp;
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={template}
                            onChange={handleChange}
                            style={{width:pxToRem(180),  border: `${pxToRem(1)} solid #14AFF1` }}
                            MenuProps={{classes:{paper:classes.dropDown}}}
                            variant="outlined"
                            >
                            <MenuItem value={"Template 1"}>Template 1</MenuItem>
                            <MenuItem value={"Template 2"}>Template 2</MenuItem>
                        
                        </Select>
                        <Button onClick={()=>{setViewCorrespondence(false)}}>
                            <CloseIcon/>
                        </Button>
                        </div>
                    </div>
                </DialogTitle>

                <DialogContent className={classes.DialogContent} dividers>
                    {template=="Template 1"?<CorrespondenceDetails/> : <AltCorrespondenceDetails/>}
                </DialogContent>
                <DialogActions style={{paddingBottom:pxToRem(20)}}>
                    <Button onClick={()=>{setViewCorrespondence(false)}} style={{color:"#14AFF1", marginRight:pxToRem(20)}}>
                        Cancel
                    </Button>
                    <Button variant="contained" style={{marginRight:"1.25rem"}} onClick={jspdfMaker}>
                        Download
                    </Button>
                </DialogActions>
            </Dialog> 
        </div>
    )
}

export default ViewCorrespondence
