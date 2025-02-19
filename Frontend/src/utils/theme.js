import { createMuiTheme } from '@material-ui/core/styles';


export const pxToRem = px => `${px / 18}rem`;
export const pxToVw = px =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = px =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

const theme =  createMuiTheme({
  palette: {
    primary: {
      main: '#1B1F38',
      light: 'rgb(93,175,240,0.5)',
      dark: 'rgb(93,175,240,0.2)'
    }
  },
  props:{
    MuiButton:{
      disableElevation: true,
    },
  },
  overrides:{
    MuiButton:{
      root:{
        borderRadius:"0.625rem",
        textTransform:"none",
        fontStyle:"normal",
        fontVariant:"normal",
        fontWeight:"normal",
        fontSize:"1.25rem",
        lineHeight:"1.5rem",
        fontFamily:"Ubuntu",
        letterSpacing: "0rem",
        color: "#FFFFFF",
        '&.Mui-disabled':{
          border: "0.0625rem solid #97A1A9",
          padding:"0.625rem 1.25rem",
          color: "#97A1A9",
        }
      },
      outlined:{
        border: "0.0625rem solid #14AFF1",
        padding:"0.625rem 1.25rem",
        color: "#FFFFFF"
      },
      contained:{
        border: "0.0625rem solid #14AFF1",
        padding:"0.625rem 1.25rem",
        color: "#FFFFFF",
        backgroundColor: "#14AFF1"
      },
      startIcon:{
        color: "#FFFFFF",
        marginRight: "0.637rem",
        marginLeft:"-0.25rem"
      }
    },
    MuiOutlinedInput:{
      root:{
        width:"18.75rem",
        height:"2.8125rem",
        font:`normal normal normal ${pxToRem(18)}/${pxToRem(21)} Ubuntu`,
        color: "#FFFFFF",
        borderRadius: "0.625rem",
        borderWidth:"0.0625rem",
        borderColor:"#356680",
        backgroundColor: "#283A46",
        '&$focused $notchedOutline':{
          borderColor: "#14AFF1",
        },
        '&:hover $notchedOutline':{
          borderColor:"#14AFF1"
        }
      },
      multiline:{
        height: "11.9375rem"
      }
    },
    MuiDialogTitle:{
      root:{
        '& .MuiTypography-h6':{
          font: "normal normal normal 1.75rem/2rem Ubuntu",
          letterSpacing: "0px",
          color: "#FFFFFF"          
        }
      }
    },
    MuiTableCell:{
      stickyHeader:{
        backgroundColor: "#2A3F4D",
        borderBottom: `${pxToRem(2)} solid #283A46`
      },
      head:{
        textAlign: "left",
        font: "normal normal normal 1.125rem/1.313rem Ubuntu",
        letterSpacing: "0rem",
        color: "#97A1A9",
        opacity: 1
      },
      body:{
        borderBottom:"0rem",
        textAlign: "left",
        font: `normal normal normal 1.225rem/1.5rem Ubuntu`,
        letterSpacing: "0rem",
        color: "#FFFFFF",
        opacity: 1
      },
      '&$checked':{
        color:"#14AFF1"
      },
    },
    MuiTableContainer:{
      root:{
        '&.MuiPaper-elevation1':{
          boxShadow:"0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0)"
        },
        '&.MuiPaper-root':{
          backgroundColor: "transparent"
        },
        '&::-webkit-scrollbar': {
          width: "0.375rem",
        },
        '&::-webkit-scrollbar-thumb':{
          background: "#61707B 0% 0% no-repeat padding-box",
          borderRadius: "0.5rem", 
        },
        '&::-webkit-scrollbar-track':{
          boxShadow:"0rem"
        }
      }
    },
    MuiTableBody: {
      root: {
        '& tr:nth-child(even)': { 
          backgroundColor: '#283A46' 
        },
      }
    },
    MuiCheckbox: {
      root:{
        color: "#97A1A9",
        borderRadius: "0.19rem"
      },
      colorSecondary:{
        '&$checked':{
          color:"#14AFF1"
        }
      }
    },
    MuiTableRow: {
      root:{
        "&$selected": {
          backgroundColor: '#2A5368 !important'
        },
      }
    },
    MuiSnackbarContent: {
      root:{
        width:`${pxToRem(600)}`,
        height:`${pxToRem(60)}`,
        backgroundColor: "#21303B",
        boxShadow: `0px ${pxToRem(5)} ${pxToRem(20)} #0000004D`,
        borderRadius: `0 ${pxToRem(10)} ${pxToRem(10)} 0`,
        
        
      },
      message:{
        textAlign: "left",
        font: `normal normal normal ${pxToRem(20)}/${pxToRem(24)} Ubuntu`,
        letterSpacing: "0rem",
        color: "#FFFFFF",
        opacity: 1

      }
    },
    MuiSelect:{
      icon:{
        color:"#97A1A9"
      }
    },
    MuiMenuItem:{
      root:{
        fontFamily: "Ubuntu" ,
        color: "#FFFFFF"
      }
    },
    MuiListItem:{
      root:{
        "&.Mui-selected":{
          backgroundColor:"#2A5368"
        },
        "&:hover":{
          backgroundColor:"#2A5368"
        }
      }
    }
}
})

export default theme