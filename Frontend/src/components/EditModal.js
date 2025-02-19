import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, makeStyles, Grid, IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { useSelector } from 'react-redux';
import warningIcon from '../assets/Path 18298.svg'
import { pxToRem } from '../utils/theme';
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
        font: "normal normal normal 1.25rem/1.5rem Ubuntu",
        letterSpacing: "0.19px",
        opacity: 1,
        color:"#97A1A9"
    },
    dialogBox:{
        minWidth:"33.938rem",
        minHeight:"31.938rem",
        backgroundColor:"#2A3E4C",
        borderRadius:"0.375rem",
        
    },
    dialogTitle:{
        margin:"1.875rem",
        padding:"0px"
    },

}))


const EditModal= (props)=> {

    const classes = useStyles()
    const responseData = useSelector(state=>state.fetchData.responseData)
    const selected = useSelector(state=>state.checkBox.checked)

    const [values,setValues] = React.useState({ billCurrency:"",
                                                notes:""})
    const{title,editPopup,setEditPopup} = props
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
                            Editing Successful
                            </span>   
                        </div>
                        </div>


    const handleClick=()=>{
        setSnackOpen(true)
    }

    const handleClose = (event,reason) =>{
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
        const Bill_Currency = values.billCurrency
        const Note = values.notes
        const Bill_Id = selected[0]
        

        const user = {Bill_Currency,Note,Bill_Id}

        console.log(user)
        console.log(JSON.stringify(user))
        if (Bill_Currency===""){
            console.log("Parameters cant be empty")
        }
        else{
              axios.post("http://localhost:8080/Summer_Internship_Backend/editData",null, {params : {data: JSON.stringify(user)}})
        }
    }

    const handleClear=()=>{
        setValues({
            billCurrency : "",
            notes : ""
        })
    }


    const validate = () =>{
        let temp = {}
        temp.billCurrency = (values.billCurrency)&&(!isNaN(values.billCurrency))?"":"This field is required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x=="")
    }


    const validateSubmit = (e)=>{
        if(validate()){
            handleSubmit()
            setStyle({borderLeft: `${pxToRem(4.91)} solid #35CD96`})
            setMessage(successMsg)}
        else{
            setMessage(isNaN(values.billCurrency)?nanMsg:errorMsg)
            setStyle({borderLeft: `${pxToRem(4.91)} solid #FF5B5B`})
            e.preventDefault()
        }
    }

    const closeButton = () => {
        handleClear()
        setErrors({})
        setEditPopup(false)
        setSnackOpen(false)
        
    }
    // console.log(selected[0])


    
    return (
        <div>
            <Dialog open={editPopup} classes = {{paper: classes.dialogBox}}>
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
                        <div className={classes.entries}>
                            <label className = {classes.label}>Invoice Amount</label>
                                <TextField
                                    variant="outlined"
                                    name="billCurrency"
                                    autoComplete="off"
                                    value={values.billCurrency}
                                    onChange = {handleInputChange}
                                    placeholder = {(selected.length===1)?((responseData.find(o=>o.doc_id===selected[0])).total_open_amount):""}
                                    error = {error.billCurrency}
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
                    </DialogContent>


                    
                    
                    
                    <DialogActions style={{padding:"1.875rem"}} dividers>
                        <Grid justify="space-between" container spacing={0}>
                            <Grid item>
                                <Button onClick={()=>{setEditPopup(false)}} style={{color:"#14AFF1"}}>
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
                                    autoHideDuration={3000}
                                    style={style}
                                    onClose={handleClose}
                                    message={message}
                                    action = {
                                        <IconButton onClick={handleClose}>
                                            <CloseIcon style={{color:"#FFFFFF"}}/>
                                        </IconButton>}
                                    />


                                    <Button variant="contained" style={{marginRight:"1.25rem"}} type = "submit" onClick={handleClick}>
                                        Edit
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

export default EditModal

