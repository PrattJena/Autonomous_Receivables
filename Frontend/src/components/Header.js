import React from 'react'
import {makeStyles} from "@material-ui/core"
import highradiusLogo from "../assets/logo.svg"
import customerLogo from "../assets/Group 20399.svg"


const useStyles = makeStyles({
    container:{
        height:"5.5%",
        marginTop: "1.375rem",
        marginLeft:"1.875rem",
        marginRight:"1.875rem",
    },
    highradius:{
        display:"inline",
        paddingLeft:"26.93%",
        width:"12.6%",
        opacity: 1,
    },
    customerLogo:{
        display:"inline",
        width:"16.72%",
        opacity: 1,
    },
})


function Header() {

    const classes = useStyles()
    return (
        <>
            <div className={classes.container}>
                <img className={classes.customerLogo} src = {customerLogo}/>
                {/* <p className={classes.customerName}>ABCProducts</p> */}
                <img className={classes.highradius} src = {highradiusLogo}/>
                
                
            </div>
        </>
    )
}

export default Header
