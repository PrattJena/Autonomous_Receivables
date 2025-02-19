import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../actions/searchBarAction'
import noResultsFound from '../assets/error_outline-24px.svg'
import { pxToRem } from '../utils/theme'

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",  
        height:"80%"
    },
    header:{
        font: `normal normal normal ${pxToRem(22)}/${pxToRem(28)} Ubuntu`,
        letterSpacing: "0px",
        color: "#FFFFFF",
        opacity: 1,
        
    },
    message:{
        textAlign: "center",
    },
    tryAgain:{
        font: `normal normal normal ${pxToRem(16)}/${pxToRem(24)} Ubuntu`,
        letterSpacing: "0px",
        color: "#C0C6CA",
        opacity: 1
    }


})



const NoResults = ()=> {

    const classes = useStyles()
    const dispatch = useDispatch()

    const handleClear =()=>{
        dispatch(search(""))
    }

    return (
        <React.Fragment>
            <div className = {classes.container}>
                <div className={classes.message}>
                    <img src={noResultsFound}/>
                    <br/>      
                    <p className={classes.header}>
                        No results found
                    </p>
                    <p className={classes.tryAgain}>
                    Try adjusting your search to find what you are looking for.
                    </p>
                    <Button onClick={handleClear} style={{color:"#14AFF1"}} >
                        Clear Search
                    </Button>
                </div>
            </div>
        </React.Fragment>  
        
    )
}

export default NoResults
