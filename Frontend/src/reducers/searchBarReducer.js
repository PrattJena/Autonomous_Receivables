const initialState = {
    searchTerm : "",
}

const searchBarReducer = (state=initialState, action)=>{
    switch(action.type){
        case "SEARCH":
            return{
                ...state,
                searchTerm:action.data
            }
        default:
            return state
        
    }
}
export default searchBarReducer