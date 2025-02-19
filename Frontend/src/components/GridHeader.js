import React from 'react'
import {makeStyles} from "@material-ui/core"

const useStyle= makeStyles({
    gridHeader:{
        textAlign: "left",
        font: "normal normal normal 1.75rem/2rem Ubuntu",
        letterSpacing: "0rem",
        color: "#FFFFFF",
        marginTop:"1.875rem",
        marginLeft:"1.875rem"
    }
})


function GridHeader() {
    const classes = useStyle()
    return (
        <div className={classes.gridHeader}>
            Bill Management App
        </div>
    )
}

export default GridHeader
