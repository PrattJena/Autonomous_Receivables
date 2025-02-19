const initialStates = {
    pageNumber : 1,
    isNext : false,
    responseData : []
}

const fetchDataReducer = (state=initialStates,action) =>{
    switch(action.type){
        case "PAGE_INCREASE":
            return{
                ...state,
                pageNumber:action.data
            }
        case "NEXT_DATA":
            return{
                ...state,
                isNext:action.data
            }
        case "MORE_DATA":
            return{
                ...state,
                responseData:action.data 
            }
        default:
            return state
        
    }
}

export default fetchDataReducer