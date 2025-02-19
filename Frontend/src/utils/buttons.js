import React from 'react'
import { colors, Icon } from "@material-ui/core";
import {ReactComponent as AddIcon} from '../assets/Path 18189.svg'
import {makeStyles, SvgIcon} from "@material-ui/core"

const useStyles = makeStyles({
    fontSize:"0.875rem",
    colors:"white"
})

export function Add(){
    const classes = useStyles()
    return(
        <SvgIcon className={classes.mySvgStyle}>
            <AddIcon/>
        </SvgIcon>
    )
}

