import React from 'react'
import {IconButton, InputBase, makeStyles} from "@material-ui/core"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AddModal from './AddModal';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../actions/searchBarAction';
import CloseIcon from '@material-ui/icons/Close';
import ViewCorrespondence from './ViewCorrespondence';

const useStyles = makeStyles({
    
    container:{
        margin:"1.875rem",
    },

    buttonSpacing:{
        marginLeft:"1.25rem"
    },
    searchBox:{
        width:"21.25rem",
        height:"2.813rem",
        font:"normal normal normal 1.125rem/1.3125rem Ubuntu",
        color: "#FFFFFF",
        borderRadius: "0.625rem",
        border: "0.0625rem solid #356680",
        backgroundColor: "#283A46",
        paddingLeft:"0.938rem",
        paddingTop:"0.75rem",
        paddingBottom:"0.75rem",
        marginLeft:"1.25rem",
        '&:hover':{
            border: "0.0625rem solid #14AFF1"
        },
        '&$focused':{
            border: "0.0625rem solid #14AFF1"
        }
    },

})

function GridPanelHeader() {

    const classes = useStyles()
    const [addPopup,setAddPopup] = React.useState(false)
    const [deletePopup,setDeletePopup] = React.useState(false)
    const [editPopup, setEditPopup] = React.useState(false)
    const [viewCorrespondence, setViewCorrespondence] = React.useState(false)
    
    const dispatch = useDispatch()
    const searchTerm = useSelector(state=>state.searchBar.searchTerm)
    const selected = useSelector(state=>state.checkBox.checked)
    // const delayFuncExec = ()=>


    // const debounce=(func,delay)=>{
    //     let indebounce
    //     return()=>{
    //         clearTimeout(indebounce)
    //         indebounce(e.target.value)
    //     }
    // }

    // const handleSearchBar = (e) =>{
        

    // }
    console.log(searchTerm)  

    const handleSearchClear =()=>{
        dispatch(search(""))
    }  

    if (selected.length===0){
        return (
            <>
            <div className={classes.container}>
                <Grid justify="space-between" container spacing={0}>
                    <Grid item>
                        <Button variant = "disabled" style={{backgroundColor:"#97A1A9", color:"#FFFFFF"}}>
                            Predict
                        </Button> 
                        <Button variant = "disabled" className={classes.buttonSpacing} onClick={()=>setViewCorrespondence(true)}>
                            View Correspondance
                        </Button>
                    </Grid>
    
                    <Grid item>
                        <div>
                            <Button variant = "outlined" startIcon={<AddIcon style={{fontSize:"1rem"}}/>} onClick={()=>setAddPopup(true)}>
                                Add
                            </Button>
                            <Button variant = "disabled" className={classes.buttonSpacing} startIcon={<EditIcon style={{fontSize:"1rem"}}/>} onClick={()=>setEditPopup(true)} >
                                Edit
                            </Button>
                            <Button variant = "disabled" className={classes.buttonSpacing} startIcon={<RemoveIcon style={{fontSize:"1rem"}}/>} onClick={()=>setDeletePopup(true)}>
                                Delete
                            </Button>
                            <InputBase style={{fontSize:"1.125rem"}} placeholder="Search by Invoice Number" value={searchTerm} onChange={(event)=>{dispatch(search(event.target.value))}} className={classes.searchBox}
                                     endAdornment={searchTerm?<IconButton onClick={handleSearchClear}><CloseIcon style={{color:"#FF5B5B"}}/></IconButton> : <SearchIcon style={{marginRight:"0.625rem"}}/>}/>
                        </div>
                    </Grid>
    
                </Grid>
            </div>
            
            <AddModal title="Add Invoices" addPopup={addPopup} setAddPopup={setAddPopup}/>
            <DeleteModal title="Delete Invoice(s)" deletePopup={deletePopup} setDeletePopup={setDeletePopup}/>
            <EditModal title = "Edit Invoice" editPopup={editPopup} setEditPopup={setEditPopup}/>
            <ViewCorrespondence title={`View Correspondence (${selected.length})`} viewCorrespondence={viewCorrespondence} setViewCorrespondence={setViewCorrespondence}/>
            </>
        )
    }

//                        <Button onClick={closeButton}>
//<CloseIcon/>
//</Button> 

    else if (selected.length===1){
        return(
        <>
            <div className={classes.container}>
            <Grid justify="space-between" container spacing={0}>
                <Grid item>
                    <Button variant = "contained">
                        Predict
                    </Button> 
                    <Button variant = "outlined" className={classes.buttonSpacing} onClick={()=>setViewCorrespondence(true)}>
                            View Correspondance
                    </Button>
                </Grid>

                <Grid item>
                    <div>
                        <Button variant = "disabled" startIcon={<AddIcon style={{fontSize:"1rem"}}/>} onClick={()=>setAddPopup(true)}>
                            Add
                        </Button>
                        <Button variant = "outlined" className={classes.buttonSpacing} startIcon={<EditIcon style={{fontSize:"1rem"}}/>} onClick={()=>setEditPopup(true)} >
                            Edit
                        </Button>
                        <Button variant = "outlined" className={classes.buttonSpacing} startIcon={<RemoveIcon style={{fontSize:"1rem"}}/>} onClick={()=>setDeletePopup(true)}>
                            Delete
                        </Button>
                        <InputBase style={{fontSize:"1.125rem"}} placeholder="Search by Invoice Number" value={searchTerm} onChange={(event)=>{dispatch(search(event.target.value))}} className={classes.searchBox}
                                 endAdornment={searchTerm?<IconButton onClick={handleSearchClear}><CloseIcon style={{color:"#FF5B5B"}}/></IconButton> : <SearchIcon style={{marginRight:"0.625rem"}}/>}/>
                    </div>
                </Grid>

            </Grid>
        </div>
        
        <AddModal title="Add Invoices" addPopup={addPopup} setAddPopup={setAddPopup}/>
        <DeleteModal title="Delete Invoice(s)" deletePopup={deletePopup} setDeletePopup={setDeletePopup}/>
        <EditModal title = "Edit Invoice" editPopup={editPopup} setEditPopup={setEditPopup}/>
        <ViewCorrespondence title={`View Correspondence (${selected.length})`} viewCorrespondence={viewCorrespondence} setViewCorrespondence={setViewCorrespondence}/>
        </>
        )
    }


    else {
        return(
            <>
            <div className={classes.container}>
            <Grid justify="space-between" container spacing={0}>
                <Grid item>
                    <Button variant = "contained">
                        Predict
                    </Button> 
                    <Button variant = "outlined" className={classes.buttonSpacing} onClick={()=>setViewCorrespondence(true)}>
                            View Correspondance
                    </Button>
                </Grid>

                <Grid item>
                    <div>
                        <Button variant = "disabled" startIcon={<AddIcon style={{fontSize:"1rem"}}/>} onClick={()=>setAddPopup(true)}>
                            Add
                        </Button>
                        <Button variant = "disabled" className={classes.buttonSpacing} startIcon={<EditIcon style={{fontSize:"1rem"}}/>} onClick={()=>setEditPopup(true)} >
                            Edit
                        </Button>
                        <Button variant = "outlined" className={classes.buttonSpacing} startIcon={<RemoveIcon style={{fontSize:"1rem"}}/>} onClick={()=>setDeletePopup(true)}>
                            Delete
                        </Button>
                        <InputBase style={{fontSize:"1.125rem"}} placeholder="Search by Invoice Number" value={searchTerm} onChange={(event)=>{dispatch(search(event.target.value))}} className={classes.searchBox}
                                     endAdornment={searchTerm?<IconButton onClick={handleSearchClear}><CloseIcon style={{color:"#FF5B5B"}}/></IconButton> : <SearchIcon style={{marginRight:"0.625rem"}}/>}/>
                    </div>
                </Grid>

            </Grid>
        </div>
        
        <AddModal title="Add Invoices" addPopup={addPopup} setAddPopup={setAddPopup}/>
        <DeleteModal title="Delete Invoice(s)" deletePopup={deletePopup} setDeletePopup={setDeletePopup}/>
        <EditModal title = "Edit Invoice" editPopup={editPopup} setEditPopup={setEditPopup}/>
        <ViewCorrespondence title={`View Correspondence (${selected.length})`} viewCorrespondence={viewCorrespondence} setViewCorrespondence={setViewCorrespondence}/>
        </>
        )
    }


}

export default GridPanelHeader
