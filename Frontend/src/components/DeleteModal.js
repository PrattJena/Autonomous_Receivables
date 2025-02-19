import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Grid, Snackbar, IconButton } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import axios from 'axios';
import warningIcon from '../assets/Path 18298.svg'
import { pxToRem } from '../utils/theme';

const useStyles = makeStyles({
    dialogBox:{
        minWidth:"38.199rem",
        minHeight:"21.375rem",
        backgroundColor:"#2A3E4C",
        borderRadius:"0.375rem",
        
    },
    dialogTitle:{
        margin:"1.875rem",
        padding:"0px"
    },
    dialogContent:{
        textAlign: "left",
        font: "normal normal normal 1.25rem/1.5rem Ubuntu",
        letterSpacing: "0.012rem",
        opacity: 1,
        color:"#97A1A9",
    }
})

function DeleteModal(props) {

    const classes = useStyles()
    const selected = useSelector(state=>state.checkBox.checked)
    const [snackOpen, setSnackOpen] = React.useState(false)
    const [message, setMessage] = React.useState("")
    
    const deleteMsg = <div>
                        <div style={{height:pxToRem(20)}}>
                            <img src={warningIcon} alt="warning"/>
                            
                            <span style={{ marginLeft:pxToRem(11.26) }}>
                            {selected.length} items Deleted
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
    
    function handleSubmit(){
        const Bill_Id_array = `(${selected.toString()})`

        const user = {Bill_Id_array}
        axios
            .post("http://localhost:8080/Summer_Internship_Backend/deleteData",null, {params : {data: JSON.stringify(user)}})
            
            .catch((error)=>{
                console.log(error)
            })
        
            setMessage(deleteMsg)
        }
    

    const closeButton = () => {
        setDeletePopup(false)
        setSnackOpen(false)
        
    }




    console.log(selected.toString())
    console.log(`(${selected.toString()})`)

    const{title,deletePopup,setDeletePopup} = props
    return (
        <div>
            <Dialog open={deletePopup} classes = {{paper: classes.dialogBox}}>
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


                <form onSubmit={handleSubmit}>
                    <DialogContent className={classes.dialogContent} style={{overflow: "hidden"}} dividers>
                        <div>
                            <p>
                            You'll lose {selected.length} {(selected.length>1)?"records":"record"} after this action. We can't recover them once you delete. 
                            </p>
                            <p>
                            Are you sure you want to <span style={{color:"#FF5E5E"}}>permanently delete</span> them?
                            </p>
                        </div>
                    </DialogContent>
                    
                    <DialogActions style={{padding:"1.875rem"}} dividers>
                        <div>
                            <Button variant="outlined" style={{marginRight:"1.25rem"}} onClick={()=>{setDeletePopup(false)}}>
                                Cancel
                            </Button>

                            <Snackbar
                                anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                open={snackOpen}
                                autoHideDuration={3000}
                                style={{borderLeft: `${pxToRem(4.91)} solid #FF5B5B`}}
                                onClose={handleClose}
                                message={message}
                                action = {
                                    <IconButton onClick={handleClose}>
                                        <CloseIcon style={{color:"#FFFFFF"}}/>
                                    </IconButton>}
                                />

                            <Button variant="contained" type="submit" onClick={handleClick}>
                                Delete
                            </Button>
                        </div>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

export default DeleteModal
