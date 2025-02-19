const intitalState= {
    values: {customerName:"",
            customerNo:"",
            billId:"",
            billCurrency:"",
            dueDate:new Date(),
            notes:""}
}

const addFormReducer = (state=intitalState,action) =>{
    switch(action.type){
        case "ADD_FORM":
            return{
                ...state,
                values:action.data
            }

        default:
            return state
        
    }
}

export default addFormReducer