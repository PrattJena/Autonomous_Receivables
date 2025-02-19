const initialState = {
    checked : [],
    selectedRows: []
}

const checkBoxReducer = (state=initialState, action)=>{
    switch(action.type){
        case "IS_CHECKED":
            return{
                ...state,
                checked:action.data
            }
        case "SELECTED_ROWS":
            return{
                ...state,
                selectedRows:action.data
            }
        default:
            return state
        
    }
}
export default checkBoxReducer