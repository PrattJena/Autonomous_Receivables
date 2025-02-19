import React from 'react'
import {makeStyles, Button} from "@material-ui/core"
import Paper from '@material-ui/core/Paper';
import GridPanelHeader from './GridPanelHeader';
import InvoiceTable from './InvoiceTable';
// import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import NoResults from './NoResults';

const useStyles = makeStyles({
    container:{
        margin:"1.875rem",

    },
    paper:{
        display:"inline-block",
        backgroundColor:"#273D49CC",
        borderRadius:"0.625rem",
        width:"100%",
        height:"80.7vh",
        // overflow:"hidden"
    },

})


function GridTable() {

    const classes = useStyles()
    const responseData = useSelector(state=>state.fetchData.responseData)
    const searchTerm = useSelector(state=>state.searchBar.searchTerm)

    return (
        <div className = {classes.container}>
            <Paper elevation={0} className={classes.paper}>

                <GridPanelHeader/>
                {(responseData.filter((val)=>{return String(val.doc_id).includes(searchTerm)}).length===0)&&(searchTerm.length>0)?<NoResults/> : <InvoiceTable/>}     
            </Paper>  
        </div>
    )
}

export default GridTable
