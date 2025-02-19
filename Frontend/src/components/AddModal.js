import { Snackbar, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, makeStyles, Grid, IconButton } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import theme, { pxToRem } from '../utils/theme'
import DatePicker from './DatePicker'
import warningIcon from '../assets/Path 18298.svg'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';



const useStyles = makeStyles((theme)=>({
    root: {
        '& .MuiFormControl-root': {
            width: '94',
            margin: theme.spacing(2),
        }
    },
    entries: {
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between"
    },
    label:{
        textAlign: "left",
        font: "normal normal normal 1.2rem/1.5rem Ubuntu",
        letterSpacing: 0,
        opacity: 1,
        color:"#97A1A9"
    },
    dialogBox:{
        minWidth:"69.125rem",
        minHeight:"31.813rem",
        backgroundColor:"#2A3E4C",
        borderRadius:"0.375rem",
        
    },
    dialogTitle:{
        margin:"1.875rem",
        padding:"0px"
    },

}))


const AddModal= (props)=> {

    const classes = useStyles()

    const{title,addPopup,setAddPopup} = props
    const [values,setValues] = React.useState({customerName:"",
                                                customerNo:"",
                                                billId:"",
                                                billCurrency:"",
                                                dueDate:new Date(),
                                                notes:""
                                            })
    
    const [error,setErrors] = React.useState({})
    const [message, setMessage] = React.useState("")
    const [snackOpen, setSnackOpen] = React.useState(false)
    const [style, setStyle] = React.useState({})
    
    const errorMsg = <div>
                    <div style={{height:pxToRem(20)}}>
                        <img src={warningIcon} alt="warning"/>
                        
                        <span style={{ marginLeft:pxToRem(11.26) }}>
                        Mandatory fields can't be empty
                        </span>   
                    </div>
                    </div>

    const nanMsg = <div>
                    <div style={{height:pxToRem(20)}}>
                        <img src={warningIcon} alt="warning"/>
                        
                        <span style={{ marginLeft:pxToRem(11.26) }}>
                        Field(s) should be a number
                        </span>   
                    </div>
                    </div>
                    
    const successMsg = <div>
                        <div style={{height:pxToRem(20)}}>
                            <CheckBoxOutlinedIcon style={{color:"#35CD96",fontSize:"large"}}/>
                            
                            <span style={{ marginLeft:pxToRem(11.26) }}>
                            Addition Successful
                            </span>   
                        </div>
                        </div>

    
    
    const handleClick=()=>{
        setSnackOpen(true)
    }

    const handleClose = (reason) =>{
        if (reason==="clickaway"){
            return
        }
        setSnackOpen(false)
    }


    const handleInputChange= e=>{
        const{name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    function handleSubmit(){
        const Cust_name = values.customerName
        const Cust_No = values.customerNo
        const Bill_Id = values.billId
        const Bill_Currency = values.billCurrency
        const Due_Date = values.dueDate
        const Note = values.notes

        const user = {Cust_name,Cust_No,Bill_Id,Bill_Currency,Due_Date,Note}

        if (Cust_name===""||Cust_No===""||Bill_Id===""||Bill_Currency===""||Due_Date===""){
            console.log("Parameters cant be empty")
        }
        else{
              axios.post("http://localhost:8080/Summer_Internship_Backend/addData",null, {params : {data: JSON.stringify(user)}})
        }
    }

    const handleClear=()=>{
        setValues({
            customerName:"",
            customerNo : "",
            billId : "",
            billCurrency : "",
            dueDate : new Date(),
            notes : ""
        })
    }

    const validate = () =>{
        let temp = {}
        temp.customerName = values.customerName?"":"This field is required"
        temp.customerNo = values.customerNo?"":"This field is required"
        temp.billId = (values.billId)&&(!isNaN(values.billId))?"":"This field is required"
        temp.billCurrency = (values.billCurrency)&&(!isNaN(values.billCurrency))?"":"This field is required"
        temp.dueDate = values.dueDate?"":"This field is required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x=="")
    }


    const validateSubmit = (e)=>{
        if(validate()){
            handleSubmit()
            setMessage(successMsg)
            setStyle({borderLeft: `${pxToRem(4.91)} solid #35CD96`})
        }
        else{
            setMessage((isNaN(values.billId)||isNaN(values.billCurrency))?nanMsg:errorMsg)
            setStyle({borderLeft: `${pxToRem(4.91)} solid #FF5B5B`})
            e.preventDefault()
        }
    }

    const closeButton = () => {
        handleClear()
        setErrors({})
        setAddPopup(false)
        setSnackOpen(false)
        
    }


   
    return (
        <div>
            <Dialog open={addPopup} classes = {{paper: classes.dialogBox}}>
                <DialogTitle className = {classes.dialogTitle}>
                    <div style={{display:"flex"}}>
                        <div style={{flexGrow:1}}>
                            {title}
                        </div>


                        <Button onClick={closeButton}>
                            <CloseIcon/>
                        </Button>
                    </div>
                </DialogTitle>


                <form className = {classes.root} onSubmit={validateSubmit}>
                    <DialogContent style={{ overflow: "hidden" }} dividers>
                        <Grid container spacing = {10}>
                            <Grid item xs = {6} alignItems="baseline">
                                <div className={classes.entries}>
                                <label className = {classes.label}>Customer Name <span style={{color:"#FF5B5B"}}>*</span></label>
                                <TextField
                                    variant="outlined"
                                    name="customerName"
                                    autoComplete="off"
                                    value={values.customerName}
                                    onChange = {handleInputChange}
                                    error = {error.customerName}
                                />
                                </div> 

                                <div className={classes.entries}>
                                <label className = {classes.label}>Customer No <span style={{color:"#FF5B5B"}}>*</span></label>
                                <TextField
                                    variant="outlined"
                                    name="customerNo"
                                    autoComplete="off"
                                    value={values.customerNo}
                                    onChange = {handleInputChange}
                                    error = {error.customerNo}
                                />  
                                </div>

                                <div className={classes.entries}>
                                <label className = {classes.label}>Bill Id <span style={{color:"#FF5B5B"}}>*</span></label>
                                <TextField
                                    variant="outlined"
                                    name="billId"
                                    autoComplete="off"
                                    value={values.billId}
                                    onChange = {handleInputChange}
                                    error = {error.billId}
                                    
                                />
                                </div>

                                <div className={classes.entries}>
                                <label className = {classes.label}>Invoice Amount <span style={{color:"#FF5B5B"}}>*</span></label>
                                <TextField
                                    variant="outlined"
                                    name="billCurrency"
                                    autoComplete="off"
                                    value={values.billCurrency}
                                    onChange = {handleInputChange}
                                    error = {error.billCurrency}
                                />
                                </div>
                            </Grid>
                            <Grid item xs = {6}>
                                <div className={classes.entries}>
                                <label className = {classes.label}>Due Date <span style={{color:"#FF5B5B"}}>*</span></label>   
                                <DatePicker
                                    name="dueDate"
                                    value={values.dueDate}
                                    onChange = {handleInputChange}
                                    error = {error.dueDate}
                                />
                                </div>

                                <div className={classes.entries}>
                                <label className = {classes.label}>Notes</label>
                                <TextField
                                    variant="outlined"
                                    name="notes"
                                    multiline
                                    autoComplete="off"
                                    value={values.notes}
                                    onChange = {handleInputChange}
                                    placeholder = "Lorem Ipsum dolor..."
                                />
                                </div>
                            </Grid>
                        </Grid>                        
                    </DialogContent>


                    <DialogActions style={{padding:"1.875rem"}} dividers>
                        <Grid justify="space-between" container spacing={0}>
                            <Grid item>
                                <Button onClick={()=>{setAddPopup(false)}} style={{color:"#14AFF1"}} >
                                    Cancel
                                </Button>
                            </Grid>

                            <Grid item justify="space-between">
                                <div>
                                
                                
                                <Snackbar
                                    anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",
                                        }}
                                        open={snackOpen}
                                        style={style}
                                        autoHideDuration={3000}
                                        onClose={handleClose}
                                        message={message}
                                        action = {
                                            <IconButton onClick={handleClose}>
                                                <CloseIcon style={{color:"#FFFFFF"}}/>
                                            </IconButton>
                                        }/>


                                    <Button variant="contained" style={{marginRight:"1.25rem"}} type = "submit" onClick={handleClick}>
                                        Add
                                    </Button>
                                    <Button variant="outlined" onClick={handleClear}>
                                        Clear
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

export default AddModal
