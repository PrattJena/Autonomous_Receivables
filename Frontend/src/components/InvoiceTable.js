import React from 'react'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component"
import {Checkbox,TableContainer,Table,TableRow,TableCell,TableBody,CircularProgress,Paper,makeStyles} from "@material-ui/core";
import { fetchData } from '../services/fetchApi';
import { useSelector, useDispatch } from 'react-redux';
import { checkNextPage, increasePage, display } from '../actions/fetchActions';
import EnhancedTableHead from './EnhancedTableHead';
import { checked, rows } from '../actions/checkboxActions';
import { formatter } from '../utils/formatter';
import FacebookCircularProgress from '../utils/FacebookLoader';
import { pxToRem } from '../utils/theme';



EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
  numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles({
  scrollBox:{
    width: "4.063rem",
    height: "5.063rem",
    margin: "auto",
    padding: "3.125rem",
  },
  loading:{
    font: "normal normal normal 1.125rem/1.313rem Ubuntu",
    letterSpacing: "0rem",
    color: "#C0C6CA",
    opacity: 1
  },
})


const InvoiceTable = () => {
    
    const classes = useStyles()

    // const [selected,setSelected] = React.useState([])
    const selected = useSelector(state=>state.checkBox.checked)
    const isNext = useSelector(state=>state.fetchData.isNext)
    const responseData = useSelector(state=>state.fetchData.responseData)
    const pageNumber = useSelector(state => state.fetchData.pageNumber)
    const searchTerm = useSelector(state => state.searchBar.searchTerm)
    const selectedRows = useSelector(state=>state.checkBox.selectedRows)
    const dispatch = useDispatch()
    



    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = responseData.map((n) => n.doc_id);
        dispatch(checked(newSelecteds));
        return;
      }
      dispatch(checked([]));
    };
  
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
      let newRows = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      newSelected.map((s)=>{
        const row = responseData.filter((row)=>row.doc_id==s);
        newRows = newRows.concat(row)
      })
      
      dispatch(rows(newRows))
      dispatch(checked(newSelected));
    };    

    const isSelected = (name) => selected.indexOf(name) !== -1; 


    function fetchMoreData(){
        dispatch(increasePage(pageNumber+1))
        if(pageNumber >=1100 )// 50 data coming from database
        {
          dispatch(checkNextPage(false))
        }
        fetchData(pageNumber).then((data)=>{
          if(data){
            dispatch(display([...responseData, ...data]))
          } else{
            console.log("Some error occured while fetching data")
          }
        })
    }

    const searchResult = (val)=>{
      if (searchTerm ==""){
        return val
      }
      else {
        console.log((val.filter(value=>String(value.doc_id).includes(searchTerm))).length===0)
        dispatch(checkNextPage(false))
          return val.filter(value=>String(value.doc_id).includes(searchTerm))
        }
        
      }
    
    const dateConversion = (date)=>{
      var curr_date = date.getDate();
      var curr_month = date.getMonth(); //Months are zero based
      var month = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"][curr_month]
      var curr_year = date.getFullYear();
      return(curr_date + "-" + month + "-" + curr_year);

    }
    

    // didMount phase the isNext will change to true
    React.useEffect(() => {
        dispatch(checkNextPage(true))
        fetchMoreData()
    }, [])


    return (
    <div style={{width:"100%",height:"86.5%"}}>
    <TableContainer
    id="test-table"
    component={Paper}
    style={{
      height: "95.3%",
      width: "96.77%",
      margin: "1.875rem",
      
    }}
  >
    <InfiniteScroll
      scrollableTarget="test-table"
      dataLength={responseData.length}
      style={{overflow: "unset"}}
      loader={

        <div className={classes.scrollBox}> 
        <div style={{paddingLeft:pxToRem(6)}}><FacebookCircularProgress/></div>
        <br/>
        <div className={classes.loading}>Loading</div>
          
        </div>
      }
      hasMore={isNext}
      next={fetchMoreData}
    >
        
        <Table stickyHeader aria-label="sticky table">
          <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={responseData.length}
            />  
            <TableBody>
            {searchResult(responseData).map((row,index)=>{
               const isItemSelected = isSelected(row.doc_id);
               const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  
                <TableRow 
                  key={index} 
                  hover 
                  onClick={(event) => handleClick(event, row.doc_id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  selected={isItemSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                  <TableCell>{row.name_customer}</TableCell>
                  <TableCell >{row.cust_number}</TableCell>
                  <TableCell>{row.doc_id}</TableCell>
                  <TableCell align="right">{formatter(row.total_open_amount)}</TableCell>
                  <TableCell>{(row.due_in_date<row.clear_date)?row.due_in_date: <span style={{color:"#FF5B5B"}}>{row.due_in_date}</span>}</TableCell>
                  <TableCell align="right" >--</TableCell>
                  <TableCell>--</TableCell>
                  <TableCell>{(row.notes?row.notes:"Lorem Ipsum dolor...")}</TableCell>
                </TableRow>
              )
            })} 
            </TableBody>
        </Table>
    </InfiniteScroll>
    </TableContainer>
    </div>
    )
}
export default InvoiceTable